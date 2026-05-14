import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Midway<span>.</span>Tech</Link>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </li>
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
