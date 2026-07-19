import { Link } from 'react-router-dom'
import { getSkill } from '../data/skills.js'
import { skillAppearances } from '../data/fields.js'
import { useProgress } from '../hooks/useProgress.jsx'

export default function SkillPanel({ skillId, currentSubfieldId, onClose }) {
  const { has, toggle } = useProgress()
  if (!skillId) return null
  const skill = getSkill(skillId)
  const isDone = has(skillId)
  const elsewhere = skillAppearances(skillId).filter((a) => a.subfieldId !== currentSubfieldId)

  return (
    <aside className="skill-panel">
      <div className="panel-head">
        <h2>{skill.name}</h2>
        <button type="button" className="panel-close" onClick={onClose} aria-label="Close panel">
          ✕
        </button>
      </div>

      <button
        type="button"
        className={`achieve-btn ${isDone ? 'achieved' : ''}`}
        onClick={() => toggle(skillId)}
      >
        {isDone ? '✓ Achieved — click to undo' : 'Mark as achieved'}
      </button>

      <p className="panel-desc">{skill.description}</p>

      {elsewhere.length > 0 && (
        <div className="panel-section">
          <h3>Also counts toward</h3>
          <div className="chip-row">
            {elsewhere.map((a) => (
              <Link
                key={`${a.fieldId}-${a.subfieldId}`}
                to={`/field/${a.fieldId}/${a.subfieldId}`}
                className="chip"
              >
                {a.fieldName} · {a.subfieldName}
              </Link>
            ))}
          </div>
        </div>
      )}

      {skill.courses?.length > 0 && (
        <div className="panel-section">
          <h3>Free courses</h3>
          <ul className="course-list">
            {skill.courses.map((course) => (
              <li key={course.url}>
                <a href={course.url} target="_blank" rel="noreferrer">
                  {course.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
