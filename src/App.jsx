import { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FieldPage from './pages/FieldPage.jsx'
import RoadmapPage from './pages/RoadmapPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ResetPasswordPage from './pages/ResetPasswordPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AuthModal from './components/AuthModal.jsx'
import { FIELDS } from './data/fields.js'
import { useAuth } from './hooks/useAuth.jsx'
import { useProgress } from './hooks/useProgress.jsx'

function AccountArea() {
  const { user, authEnabled, signOut } = useAuth()
  const { syncing } = useProgress()
  const [modalOpen, setModalOpen] = useState(false)

  if (!authEnabled) return null

  if (!user) {
    return (
      <>
        <button className="account-btn" onClick={() => setModalOpen(true)}>
          Sign in
        </button>
        {modalOpen && <AuthModal onClose={() => setModalOpen(false)} />}
      </>
    )
  }

  return (
    <div className="account-area">
      <span className="account-email" title={user.email}>
        {syncing && <span className="sync-dot" title="Syncing…" />}
        {user.email}
      </span>
      <button className="account-btn" onClick={signOut}>
        Sign out
      </button>
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-row">
          <Link to="/" className="brand">
            <span className="brand-mark">◆</span> Career Path
          </Link>
          <nav className="utilnav">
            <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
              All Skills
            </Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
          </nav>
          <AccountArea />
        </div>
        <nav className="fieldnav">
          {FIELDS.map((f) => (
            <Link
              key={f.id}
              to={`/field/${f.id}`}
              className={location.pathname.startsWith(`/field/${f.id}`) ? 'active' : ''}
              style={{ '--tab-accent': f.accent }}
            >
              <span className="field-dot" />
              {f.short ?? f.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/field/:fieldId" element={<FieldPage />} />
          <Route path="/field/:fieldId/:subfieldId" element={<RoadmapPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}
