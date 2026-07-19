import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useAuth } from '../hooks/useAuth.jsx'

const TITLES = {
  signin: 'Sign in',
  signup: 'Create account',
  forgot: 'Reset password',
}

export default function AuthModal({ onClose }) {
  const { signIn, signUp, resetPassword } = useAuth()
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  function switchMode(next) {
    setMode(next)
    setError('')
    setNotice('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setNotice('')
    setBusy(true)
    if (mode === 'forgot') {
      const { error } = await resetPassword(email)
      setBusy(false)
      if (error) setError(error.message)
      else setNotice('Check your email for a reset link.')
      return
    }
    const action = mode === 'signin' ? signIn : signUp
    const { error } = await action(email, password)
    setBusy(false)
    if (error) setError(error.message)
    else onClose()
  }

  // Portal to <body>: the topbar's backdrop-filter creates a containing
  // block that would otherwise trap position:fixed inside the header.
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2>{TITLES[mode]}</h2>
        <p className="muted small">
          {mode === 'signup'
            ? 'Your progress on this device carries over to your account.'
            : mode === 'forgot'
              ? 'We will email you a link to set a new password.'
              : 'Sign in to keep your progress across devices.'}
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          {mode !== 'forgot' && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          )}
          {error && <p className="auth-error">{error}</p>}
          {notice && <p className="auth-notice">{notice}</p>}
          <button type="submit" className="auth-submit" disabled={busy}>
            {busy ? 'Please wait…' : TITLES[mode]}
          </button>
        </form>
        <div className="auth-links">
          {mode === 'signin' ? (
            <>
              <button onClick={() => switchMode('signup')}>New here? Create account</button>
              <button onClick={() => switchMode('forgot')}>Forgot password?</button>
            </>
          ) : (
            <button onClick={() => switchMode('signin')}>Back to sign in</button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
