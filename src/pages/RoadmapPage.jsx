import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getField, getSubfield, subfieldSkillIds } from '../data/fields.js'
import { useProgress } from '../hooks/useProgress.jsx'
import Flowchart from '../components/Flowchart.jsx'
import SkillPanel from '../components/SkillPanel.jsx'
import ProgressBar from '../components/ProgressBar.jsx'

export default function RoadmapPage() {
  const { fieldId, subfieldId } = useParams()
  const [selected, setSelected] = useState(null)
  const { countDone, percent } = useProgress()

  const field = getField(fieldId)
  const subfield = getSubfield(fieldId, subfieldId)
  if (!field || !subfield) {
    return (
      <div className="not-found">
        <p>Roadmap not found.</p>
        <Link to="/">← Back home</Link>
      </div>
    )
  }

  const ids = subfieldSkillIds(subfield)
  const pct = percent(ids)

  return (
    <div className={`roadmap-page ${selected ? 'panel-open' : ''}`} style={{ '--accent': field.accent }}>
      <div className="roadmap-main">
        <nav className="crumbs">
          <Link to="/">Home</Link> <span>/</span>{' '}
          <Link to={`/field/${field.id}`}>{field.name}</Link> <span>/</span>{' '}
          <span className="crumb-here">{subfield.name}</span>
        </nav>

        <header className="roadmap-head">
          <div>
            <h1>{subfield.name} Roadmap</h1>
            <p className="muted">{subfield.blurb}</p>
          </div>
          <div className="roadmap-progress">
            <div className="big-pct">{pct}%</div>
            <div className="muted small">
              {countDone(ids)} of {ids.length} skills
            </div>
            <ProgressBar percent={pct} accent={field.accent} />
          </div>
        </header>

        <p className="hint muted small">
          Click a node for details &amp; courses · click its circle to mark it achieved · ⇄ = shared with other
          roadmaps
        </p>

        <Flowchart subfield={subfield} selectedSkill={selected} onSelect={setSelected} />
      </div>

      <SkillPanel skillId={selected} currentSubfieldId={subfield.id} onClose={() => setSelected(null)} />
    </div>
  )
}
