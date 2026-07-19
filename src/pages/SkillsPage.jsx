import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SKILLS } from '../data/skills.js'
import { FIELDS, getField, skillAppearances } from '../data/fields.js'
import { useProgress } from '../hooks/useProgress.jsx'

const FILTERS = [
  { id: 'all', label: 'All' },
  ...FIELDS.map((f) => ({ id: f.id, label: f.name })),
  { id: 'shared', label: 'Shared (2+ roadmaps)' },
]

export default function SkillsPage() {
  const { done, has, toggle } = useProgress()
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState(null)

  const rows = useMemo(() => {
    return Object.entries(SKILLS)
      .map(([id, skill]) => ({ id, skill, appearances: skillAppearances(id) }))
      .filter(({ skill, appearances }) => {
        if (filter === 'shared' && appearances.length < 2) return false
        if (filter !== 'all' && filter !== 'shared' && !appearances.some((a) => a.fieldId === filter)) return false
        if (query && !skill.name.toLowerCase().includes(query.toLowerCase())) return false
        return true
      })
      .sort((a, b) => b.appearances.length - a.appearances.length || a.skill.name.localeCompare(b.skill.name))
  }, [filter, query])

  const total = Object.keys(SKILLS).length

  return (
    <div className="skills-page">
      <header className="home-head">
        <h1>Skill Library</h1>
        <p className="muted">
          Every skill across all roadmaps. Click a skill to see which roadmaps it connects to and its free
          courses — skills at the top unlock the most paths.
        </p>
      </header>

      <div className="skills-toolbar">
        <input
          type="search"
          className="skill-search"
          placeholder="Search skills…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-chip ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="muted small skills-count">
          {rows.length} skills · {done.size}/{total} achieved
        </span>
      </div>

      <div className="skill-list">
        {rows.map(({ id, skill, appearances }) => {
          const isDone = has(id)
          const isOpen = openId === id
          return (
            <div key={id} className={`skill-row ${isDone ? 'done' : ''} ${isOpen ? 'open' : ''}`}>
              <div className="skill-row-top">
                <button
                  type="button"
                  className={`node-check big ${isDone ? 'checked' : ''}`}
                  aria-label={`Mark ${skill.name} as ${isDone ? 'not achieved' : 'achieved'}`}
                  onClick={() => toggle(id)}
                >
                  {isDone ? '✓' : ''}
                </button>
                <button
                  type="button"
                  className="skill-row-toggle"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : id)}
                >
                  <span className="skill-row-name">{skill.name}</span>
                  {appearances.length > 1 && (
                    <span className="node-shared">⇄ {appearances.length}</span>
                  )}
                  <span className={`chevron ${isOpen ? 'up' : ''}`}>▾</span>
                </button>
              </div>

              {isOpen && (
                <div className="skill-row-detail">
                  <p className="muted small skill-row-desc">{skill.description}</p>

                  <h4 className="detail-label">Roadmaps</h4>
                  <div className="chip-row">
                    {appearances.map((a) => (
                      <Link
                        key={`${a.fieldId}-${a.subfieldId}`}
                        to={`/field/${a.fieldId}/${a.subfieldId}`}
                        className="chip field-chip"
                        style={{ '--chip-accent': getField(a.fieldId).accent }}
                      >
                        {a.fieldName} · {a.subfieldName}
                      </Link>
                    ))}
                  </div>

                  {skill.courses?.length > 0 && (
                    <>
                      <h4 className="detail-label">Free courses</h4>
                      <ul className="course-list">
                        {skill.courses.map((course) => (
                          <li key={course.url}>
                            <a href={course.url} target="_blank" rel="noreferrer">
                              {course.name} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          )
        })}
        {rows.length === 0 && <p className="muted">No skills match.</p>}
      </div>
    </div>
  )
}
