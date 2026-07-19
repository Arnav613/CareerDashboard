import { Link } from 'react-router-dom'
import { FIELDS, fieldSkillIds, subfieldSkillIds } from '../data/fields.js'
import { SKILLS } from '../data/skills.js'
import { PROJECTS, PROJECT_COUNT } from '../data/projects.js'
import { useProgress } from '../hooks/useProgress.jsx'
import ProgressBar from '../components/ProgressBar.jsx'

export default function Home() {
  const { done, countDone, percent, doneProjects, hasProject } = useProgress()

  const allSkillIds = Object.keys(SKILLS)
  const fieldStats = FIELDS.map((field) => {
    const ids = fieldSkillIds(field)
    return { field, ids, pct: percent(ids), doneCount: countDone(ids) }
  })
  const best = fieldStats.reduce((a, b) => (b.pct > a.pct ? b : a), fieldStats[0])
  const anyProgress = fieldStats.some((s) => s.pct > 0)

  return (
    <div className="home">
      <header className="home-head">
        <h1>Career Path Dashboard</h1>
        <p className="muted">
          Pick a path, follow the roadmap, mark skills as you master them. Shared skills count everywhere at once.
        </p>
      </header>

      <div className="stat-row">
        <div className="stat-tile">
          <div className="stat-label">Skills achieved</div>
          <div className="stat-value">
            {done.size}
            <span className="stat-sub">/ {allSkillIds.length}</span>
          </div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">Overall completion</div>
          <div className="stat-value">
            {percent(allSkillIds)}
            <span className="stat-sub">%</span>
          </div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">Projects completed</div>
          <div className="stat-value">
            {doneProjects.size}
            <span className="stat-sub">/ {PROJECT_COUNT}</span>
          </div>
        </div>
        <div className="stat-tile">
          <div className="stat-label">Closest path</div>
          <div className="stat-value stat-text" style={{ color: best.field.accent }}>
            {anyProgress ? best.field.name : '—'}
          </div>
          {anyProgress && <div className="stat-sub-line muted small">{best.pct}% ready</div>}
        </div>
      </div>

      <div className="field-card-grid">
        {fieldStats.map(({ field, ids, pct, doneCount }) => (
          <div key={field.id} className="field-card" style={{ '--accent': field.accent }}>
            {anyProgress && best.field.id === field.id && best.pct > 0 && (
              <span className="best-badge">★ Closest path</span>
            )}
            <Link to={`/field/${field.id}`} className="field-card-title">
              <h2>{field.name}</h2>
            </Link>
            <p className="muted">{field.tagline}</p>

            <div className="field-card-pct">
              <span className="pct-big">{pct}%</span>
              <span className="muted small">
                {doneCount}/{ids.length} skills · {(PROJECTS[field.id] ?? []).filter((p) => hasProject(p.id)).length}/
                {(PROJECTS[field.id] ?? []).length} projects
              </span>
            </div>
            <ProgressBar percent={pct} accent={field.accent} />

            <div className="mini-subfields">
              {field.subfields.map((sub) => {
                const subIds = subfieldSkillIds(sub)
                const subPct = percent(subIds)
                return (
                  <Link key={sub.id} to={`/field/${field.id}/${sub.id}`} className="mini-subfield">
                    <span className="mini-name">{sub.name}</span>
                    <span className="mini-track">
                      <span className="mini-fill" style={{ width: `${subPct}%`, background: field.accent }} />
                    </span>
                    <span className="mini-pct muted small">{subPct}%</span>
                  </Link>
                )
              })}
            </div>

            <Link to={`/field/${field.id}`} className="field-card-cta">
              Explore field →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
