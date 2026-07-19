import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'

export default function ResetPasswordPage() {
  const { user, authLoading, updatePassword } = useAuth()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    const { error } = await updatePassword(password)
    setBusy(false)
    if (error) setError(error.message)
    else navigate('/')
  }

  // The recovery link signs the user in automatically; if that hasn't
  // happened the link is invalid or expired.
  if (!authLoading && !user) {
    return (
      <div className="not-found">
        <p>This reset link is invalid or has expired.</p>
        <Link to="/">← Back home</Link>
      </div>
    )
  }

  return (
    <div className="reset-page">
      <h1>Set a new password</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          autoFocus
        />
        {error && <p className="auth-error">{error}</p>}
        <button type="submit" className="auth-submit" disabled={busy}>
          {busy ? 'Saving…' : 'Save password'}
        </button>
      </form>
    </div>
  )
}
