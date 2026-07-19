import SkillNode from './SkillNode.jsx'
import { useProgress } from '../hooks/useProgress.jsx'

// Group a stage's nodes into rows: a 'left' node followed by a 'right'
// node share a row; anything else gets its own row.
function toRows(nodes) {
  const rows = []
  let i = 0
  while (i < nodes.length) {
    const cur = nodes[i]
    const next = nodes[i + 1]
    if (cur.side === 'left' && next && next.side === 'right') {
      rows.push({ left: cur, right: next })
      i += 2
    } else {
      rows.push(cur.side === 'right' ? { right: cur } : { left: cur })
      i += 1
    }
  }
  return rows
}

export default function Flowchart({ subfield, selectedSkill, onSelect }) {
  const { countDone } = useProgress()

  return (
    <div className="flowchart">
      <div className="spine" aria-hidden="true" />
      {subfield.roadmap.map((stage) => {
        const stageIds = stage.nodes.map((n) => n.skill)
        const doneCount = countDone(stageIds)
        return (
          <section key={stage.stage} className="stage">
            <div className="stage-pill">
              <span className="stage-name">{stage.stage}</span>
              <span className={`stage-count ${doneCount === stageIds.length ? 'complete' : ''}`}>
                {doneCount}/{stageIds.length}
              </span>
            </div>
            {toRows(stage.nodes).map((row, idx) => (
              <div className="node-row" key={idx}>
                <div className="cell left-cell">
                  {row.left && (
                    <SkillNode
                      skillId={row.left.skill}
                      side="left"
                      currentSubfieldId={subfield.id}
                      selected={selectedSkill === row.left.skill}
                      onSelect={onSelect}
                    />
                  )}
                </div>
                <div className="cell gap-cell" />
                <div className="cell right-cell">
                  {row.right && (
                    <SkillNode
                      skillId={row.right.skill}
                      side="right"
                      currentSubfieldId={subfield.id}
                      selected={selectedSkill === row.right.skill}
                      onSelect={onSelect}
                    />
                  )}
                </div>
              </div>
            ))}
          </section>
        )
      })}
      <div className="finish-pill">🏁 Interview Ready</div>
    </div>
  )
}
