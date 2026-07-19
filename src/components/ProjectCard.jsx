import { Link } from 'react-router-dom'
import { getSkill } from '../data/skills.js'
import { useProgress } from '../hooks/useProgress.jsx'

// `field` is optional — when given (All Projects page), a field badge is shown.
export default function ProjectCard({ project, field }) {
  const { has, hasProject, toggleProject } = useProgress()
  const isDone = hasProject(project.id)
  const skillsHave = project.skills.filter((id) => has(id)).length

  return (
    <div className={`project-card ${isDone ? 'done' : ''}`}>
      <div className="project-head">
        <button
          type="button"
          className={`node-check big ${isDone ? 'checked' : ''}`}
          aria-label={`Mark project ${project.name} as ${isDone ? 'not completed' : 'completed'}`}
          onClick={() => toggleProject(project.id)}
        >
          {isDone ? '✓' : ''}
        </button>
        <h3 className="project-name">{project.name}</h3>
        <span className={`difficulty ${project.difficulty.toLowerCase()}`}>{project.difficulty}</span>
      </div>

      {field && (
        <Link to={`/field/${field.id}`} className="project-field-badge" style={{ '--chip-accent': field.accent }}>
          {field.name}
        </Link>
      )}

      <p className="muted small project-desc">{project.description}</p>

      <div className="project-skills">
        <span className="muted small project-skill-count">
          Skills used — you have {skillsHave}/{project.skills.length}:
        </span>
        <div className="chip-row">
          {project.skills.map((id) => (
            <span key={id} className={`chip skill-chip-sm ${has(id) ? 'have' : ''}`}>
              {has(id) ? '✓ ' : ''}
              {getSkill(id).name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
