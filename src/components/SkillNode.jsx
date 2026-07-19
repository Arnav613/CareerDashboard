import { getSkill } from '../data/skills.js'
import { skillAppearances } from '../data/fields.js'
import { useProgress } from '../hooks/useProgress.jsx'

export default function SkillNode({ skillId, side, currentSubfieldId, selected, onSelect }) {
  const skill = getSkill(skillId)
  const { has, toggle } = useProgress()
  const isDone = has(skillId)
  const sharedCount = skillAppearances(skillId).filter((a) => a.subfieldId !== currentSubfieldId).length

  return (
    <button
      type="button"
      className={`skill-node ${side} ${isDone ? 'done' : ''} ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(skillId)}
      title={skill.name}
    >
      <span
        className={`node-check ${isDone ? 'checked' : ''}`}
        role="checkbox"
        aria-checked={isDone}
        aria-label={`Mark ${skill.name} as ${isDone ? 'not achieved' : 'achieved'}`}
        onClick={(e) => {
          e.stopPropagation()
          toggle(skillId)
        }}
      >
        {isDone ? '✓' : ''}
      </span>
      <span className="node-name">{skill.name}</span>
      {sharedCount > 0 && (
        <span className="node-shared" title={`Also appears in ${sharedCount} other roadmap${sharedCount > 1 ? 's' : ''}`}>
          ⇄{sharedCount}
        </span>
      )}
    </button>
  )
}
