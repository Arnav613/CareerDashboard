import { Link, useParams } from 'react-router-dom'
import { getField, subfieldSkillIds, fieldSkillIds } from '../data/fields.js'
import { COMPANY_TIERS } from '../data/companies.js'
import { PROJECTS } from '../data/projects.js'
import { useProgress } from '../hooks/useProgress.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function FieldPage() {
  const { fieldId } = useParams()
  const field = getField(fieldId)
  const { countDone, percent } = useProgress()

  if (!field) {
    return (
      <div className="not-found">
        <p>Field not found.</p>
        <Link to="/">← Back home</Link>
      </div>
    )
  }

  const allIds = fieldSkillIds(field)
  const pct = percent(allIds)
  const tiers = COMPANY_TIERS[field.id] ?? []
  const projects = PROJECTS[field.id] ?? []

  return (
    <div className="field-page" style={{ '--accent': field.accent }}>
      <nav className="crumbs">
        <Link to="/">Home</Link> <span>/</span> <span className="crumb-here">{field.name}</span>
      </nav>

      <header className="field-head">
        <div>
          <h1>{field.name}</h1>
          <p className="tagline">{field.tagline}</p>
        </div>
        <div className="roadmap-progress">
          <div className="big-pct">{pct}%</div>
          <div className="muted small">
            {countDone(allIds)} of {allIds.length} skills
          </div>
          <ProgressBar percent={pct} accent={field.accent} />
        </div>
      </header>

      <section className="card">
        <h2>About the job</h2>
        <p>{field.about.overview}</p>
        <div className="about-cols">
          <div>
            <h3>Day to day</h3>
            <ul>
              {field.about.dayToDay.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>How you get hired</h3>
            <p>{field.about.interviewFocus}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Choose your path</h2>
        <div className="subfield-grid">
          {field.subfields.map((sub) => {
            const ids = subfieldSkillIds(sub)
            const subPct = percent(ids)
            return (
              <Link key={sub.id} to={`/field/${field.id}/${sub.id}`} className="subfield-card">
                <h3>{sub.name}</h3>
                <p className="muted">{sub.blurb}</p>
                <div className="subfield-meta">
                  <span className="muted small">
                    {countDone(ids)}/{ids.length} skills
                  </span>
                  <span className="pct">{subPct}%</span>
                </div>
                <ProgressBar percent={subPct} accent={field.accent} height={6} />
                <span className="go">View roadmap →</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="section-title">Projects that get you hired</h2>
        <p className="muted section-sub">
          Five portfolio projects, easiest to hardest. Each shows which roadmap skills it uses — and how many you
          already have.
        </p>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Target companies</h2>
        {tiers.map((tier) => (
          <div key={tier.tier} className="tier-block">
            <h3 className="tier-name">{tier.tier}</h3>
            <div className="company-grid">
              {tier.companies.map((co) => (
                <a key={co.name} href={co.url} target="_blank" rel="noreferrer" className="company-chip">
                  {co.name} ↗
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
