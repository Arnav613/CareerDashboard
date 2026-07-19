export default function ProgressBar({ percent, accent, height = 8 }) {
  return (
    <div className="progress-track" style={{ height }} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="progress-fill"
        style={{ width: `${percent}%`, background: accent ?? 'var(--series-1)' }}
      />
    </div>
  )
}
