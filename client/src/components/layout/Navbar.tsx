import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        <span className="brand-mid">Midway</span>
        <span className="brand-tech">Tech</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </a>
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
