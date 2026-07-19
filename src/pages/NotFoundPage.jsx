import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <p>Page not found.</p>
      <Link to="/">← Back home</Link>
    </div>
  )
}
