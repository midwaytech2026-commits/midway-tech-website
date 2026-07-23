import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import ComingSoonModal from '../common/ComingSoonModal'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [comingSoon, setComingSoon] = useState<string | null>(null)

  return (
    <nav className="navbar">
      <ComingSoonModal
        open={Boolean(comingSoon)}
        message={`${comingSoon} is being prepared and will be available soon.`}
        onClose={() => setComingSoon(null)}
      />

      <Link to="/"><img src={logo} alt="MidwayTech" className="site-logo" /></Link>

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
          <button
            type="button"
            className="nav-blog-link"
            onClick={() => { setComingSoon('Blog'); setMenuOpen(false) }}
          >
            Blog
          </button>
        </li>
        <li>
          <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Get a Free Quote
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
