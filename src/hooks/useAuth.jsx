import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabase.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(Boolean(supabase))

  useEffect(() => {
    if (!supabase) return
    let cancelled = false

    supabase.auth.getSession().then(({ data }) => {
      if (cancelled) return
      setUser(data.session?.user ?? null)
      setAuthLoading(false)
    })

    // Only set state here — calling other supabase methods synchronously
    // inside this callback can deadlock supabase-js.
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setAuthLoading(false)
    })

    return () => {
      cancelled = true
      sub.subscription.unsubscribe()
    }
  }, [])

  const signUp = useCallback(async (email, password) => {
    if (!supabase) return { error: new Error('Accounts are not configured') }
    const { error } = await supabase.auth.signUp({ email, password })
    return { error }
  }, [])

  const signIn = useCallback(async (email, password) => {
    if (!supabase) return { error: new Error('Accounts are not configured') }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }, [])

  const signOut = useCallback(async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }, [])

  const resetPassword = useCallback(async (email) => {
    if (!supabase) return { error: new Error('Accounts are not configured') }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error }
  }, [])

  const updatePassword = useCallback(async (password) => {
    if (!supabase) return { error: new Error('Accounts are not configured') }
    const { error } = await supabase.auth.updateUser({ password })
    return { error }
  }, [])

  const value = useMemo(
    () => ({
      user,
      authLoading,
      authEnabled: Boolean(supabase),
      signUp,
      signIn,
      signOut,
      resetPassword,
      updatePassword,
    }),
    [user, authLoading, signUp, signIn, signOut, resetPassword, updatePassword],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
