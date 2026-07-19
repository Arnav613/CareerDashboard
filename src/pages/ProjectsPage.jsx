import { useMemo, useState } from 'react'
import { PROJECTS, PROJECT_COUNT } from '../data/projects.js'
import { FIELDS, getField } from '../data/fields.js'
import { useProgress } from '../hooks/useProgress.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const FIELD_FILTERS = [{ id: 'all', label: 'All fields' }, ...FIELDS.map((f) => ({ id: f.id, label: f.name }))]
const DIFFICULTIES = ['All levels', 'Starter', 'Intermediate', 'Advanced', 'Flagship']

export default function ProjectsPage() {
  const { doneProjects } = useProgress()
  const [fieldFilter, setFieldFilter] = useState('all')
  const [difficulty, setDifficulty] = useState('All levels')

  const rows = useMemo(() => {
    return Object.entries(PROJECTS)
      .flatMap(([fieldId, list]) => list.map((project) => ({ project, field: getField(fieldId) })))
      .filter(({ project, field }) => {
        if (fieldFilter !== 'all' && field.id !== fieldFilter) return false
        if (difficulty !== 'All levels' && project.difficulty !== difficulty) return false
        return true
      })
  }, [fieldFilter, difficulty])

  return (
    <div className="projects-page">
      <header className="home-head">
        <h1>Project Ideas</h1>
        <p className="muted">
          All {PROJECT_COUNT} portfolio projects across every path, easiest to hardest. Each one says what makes
          it genuinely impressive — build the write-up, not just the code.
        </p>
      </header>

      <div className="skills-toolbar">
        <div className="filter-row">
          {FIELD_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-chip ${fieldFilter === f.id ? 'active' : ''}`}
              onClick={() => setFieldFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="filter-row">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              type="button"
              className={`filter-chip ${difficulty === d ? 'active' : ''}`}
              onClick={() => setDifficulty(d)}
            >
              {d}
            </button>
          ))}
        </div>
        <span className="muted small skills-count">
          {rows.length} projects · {doneProjects.size}/{PROJECT_COUNT} completed
        </span>
      </div>

      <div className="project-grid">
        {rows.map(({ project, field }) => (
          <ProjectCard key={project.id} project={project} field={field} />
        ))}
        {rows.length === 0 && <p className="muted">No projects match.</p>}
      </div>
    </div>
  )
}
