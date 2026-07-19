import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { supabase } from '../lib/supabase.js'
import { useAuth } from './useAuth.jsx'

const STORAGE_KEY = 'career-dashboard-progress'
const PROJECTS_KEY = 'career-dashboard-projects'
const WRITE_DEBOUNCE_MS = 800

function loadStored(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

const ProgressContext = createContext(null)

// localStorage is always the instantly-available copy; Supabase holds the
// account copy. On sign-in the two are unioned, so progress made signed-out
// (or a lost trailing write) is folded back in on the next sign-in. The
// union also means un-checking a skill on one device can be resurrected by
// a stale device's next sign-in — accepted trade-off. The local copy is
// kept after sign-out as an offline cache (shared computers will retain it).
export function ProgressProvider({ children }) {
  const { user } = useAuth()
  const [done, setDone] = useState(() => loadStored(STORAGE_KEY))
  const [doneProjects, setDoneProjects] = useState(() => loadStored(PROJECTS_KEY))
  const [syncing, setSyncing] = useState(false)

  const doneRef = useRef(done)
  const projectsRef = useRef(doneProjects)
  const userIdRef = useRef(null)
  const pendingRef = useRef(false)
  const timerRef = useRef(null)
  const lastSyncedUserRef = useRef(null)

  userIdRef.current = user?.id ?? null

  const flush = useCallback(() => {
    if (!supabase || !pendingRef.current || !userIdRef.current) return
    pendingRef.current = false
    clearTimeout(timerRef.current)
    supabase
      .from('progress')
      .upsert({
        user_id: userIdRef.current,
        skills: [...doneRef.current],
        projects: [...projectsRef.current],
        updated_at: new Date().toISOString(),
      })
      .then(() => {})
  }, [])

  const scheduleWrite = useCallback(() => {
    if (!supabase || !userIdRef.current) return
    pendingRef.current = true
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(flush, WRITE_DEBOUNCE_MS)
  }, [flush])

  // Best-effort flush when the tab is hidden/closed; a lost trailing write
  // self-heals via the sign-in union.
  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === 'hidden') flush()
    }
    document.addEventListener('visibilitychange', onHide)
    return () => document.removeEventListener('visibilitychange', onHide)
  }, [flush])

  // On sign-in: fetch the account row, union with local, persist both ways.
  useEffect(() => {
    if (!supabase || !user?.id) return
    if (lastSyncedUserRef.current === user.id) return
    let cancelled = false
    const userId = user.id

    async function merge() {
      setSyncing(true)
      const { data, error } = await supabase
        .from('progress')
        .select('skills, projects')
        .eq('user_id', userId)
        .maybeSingle()
      if (cancelled) return
      if (error) {
        setSyncing(false)
        return
      }
      const mergedSkills = new Set([...doneRef.current, ...(data?.skills ?? [])])
      const mergedProjects = new Set([...projectsRef.current, ...(data?.projects ?? [])])
      doneRef.current = mergedSkills
      projectsRef.current = mergedProjects
      setDone(mergedSkills)
      setDoneProjects(mergedProjects)
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...mergedSkills]))
      localStorage.setItem(PROJECTS_KEY, JSON.stringify([...mergedProjects]))
      lastSyncedUserRef.current = userId
      await supabase.from('progress').upsert({
        user_id: userId,
        skills: [...mergedSkills],
        projects: [...mergedProjects],
        updated_at: new Date().toISOString(),
      })
      if (!cancelled) setSyncing(false)
    }

    merge()

    // Cleanup runs on sign-out/user switch: push any pending toggles first.
    return () => {
      cancelled = true
      flush()
    }
  }, [user?.id, flush])

  const toggle = useCallback(
    (skillId) => {
      setDone((prev) => {
        const next = new Set(prev)
        if (next.has(skillId)) next.delete(skillId)
        else next.add(skillId)
        doneRef.current = next
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
        return next
      })
      scheduleWrite()
    },
    [scheduleWrite],
  )

  const toggleProject = useCallback(
    (projectId) => {
      setDoneProjects((prev) => {
        const next = new Set(prev)
        if (next.has(projectId)) next.delete(projectId)
        else next.add(projectId)
        projectsRef.current = next
        localStorage.setItem(PROJECTS_KEY, JSON.stringify([...next]))
        return next
      })
      scheduleWrite()
    },
    [scheduleWrite],
  )

  const value = useMemo(() => {
    const has = (id) => done.has(id)
    const countDone = (ids) => ids.filter((id) => done.has(id)).length
    const percent = (ids) => (ids.length === 0 ? 0 : Math.round((countDone(ids) / ids.length) * 100))
    const hasProject = (id) => doneProjects.has(id)
    return { done, has, toggle, countDone, percent, doneProjects, hasProject, toggleProject, syncing }
  }, [done, toggle, doneProjects, toggleProject, syncing])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
