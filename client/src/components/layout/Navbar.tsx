import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import logo from '../../assets/icons/brand-mark.png'
import ComingSoonModal from '../common/ComingSoonModal'
import './Navbar.css'

const navLinks = [
  { label: 'Case Studies', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
]

const servicesColumns = [
  {
    title: 'Product & Technology',
    links: [
      { label: 'Product & Technology Hub', caption: 'All product development services', to: '/services/product-technology' },
      { label: 'Website Development', caption: 'Credibility, SEO, and conversion', to: '/services/product-technology' },
      { label: 'Ecommerce & Shopify', caption: 'Stores, checkout, and retention', to: '/services/product-technology' },
      { label: 'Mobile Apps', caption: 'iOS, Android, React Native, Flutter', to: '/services/product-technology' },
      { label: 'UI/UX Design', caption: 'Flows, prototypes, and design systems', to: '/services/ui-ux' },
    ],
  },
  {
    title: 'Growth Marketing',
    links: [
      { label: 'Growth Marketing Hub', caption: 'Marketing systems built for demand', to: '/services/growth-marketing' },
      { label: 'Performance Marketing', caption: 'Campaigns, offers, and tracking', to: '/services/growth-marketing' },
      { label: 'SEO & Content', caption: 'Search structure and helpful content', to: '/services/growth-marketing' },
      { label: 'Social Media Systems', caption: 'Content planning and visibility', to: '/services/growth-marketing' },
      { label: 'Email & Retention', caption: 'Flows, follow-up, and repeat sales', to: '/services/growth-marketing' },
    ],
  },
  {
    title: 'AI & Automation',
    accent: 'green',
    links: [
      { label: 'AI & Automation Hub', caption: 'Systems that reduce manual work', to: '/services/ai-automation' },
      { label: 'AI Sales Assistant', caption: 'Qualify and route enquiries', to: '/services/ai-automation' },
      { label: 'Lead Qualification Workflow', caption: 'Score and organize opportunities', to: '/services/ai-automation' },
      { label: 'Workflow Automation', caption: 'Connect tools and remove repetition', to: '/services/ai-automation' },
      { label: 'CRM Automation', caption: 'Pipelines, reminders, and reporting', to: '/services/ai-automation' },
    ],
  },
]

const servicesMobileLinks = [
  { label: 'Services Overview', to: '/services' },
  { label: 'Product & Technology', to: '/services/product-technology' },
  { label: 'Growth Marketing', to: '/services/growth-marketing' },
  { label: 'AI & Automation', to: '/services/ai-automation' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const [comingSoon, setComingSoon] = useState<string | null>(null)

  return (
    <nav className="navbar">
      <ComingSoonModal
        open={Boolean(comingSoon)}
        message={`${comingSoon} is being prepared and will be available soon.`}
        onClose={() => setComingSoon(null)}
      />

      <Link to="/" className="nav-logo" aria-label="MidwayTech home">
        <img src={logo} alt="" className="nav-logo-mark" aria-hidden="true" />
        <span className="nav-logo-copy">
          <span className="nav-logo-name">Midway<span>Tech</span></span>
          <span className="nav-logo-tagline">AI &middot; AUTOMATION &middot; GROWTH</span>
        </span>
      </Link>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>

        {/* Services — desktop mega dropdown (hover / focus-within, no JS state needed) */}
        <li className="nav-services">
          <NavLink
            to="/services"
            className={({ isActive }) => `nav-services-trigger${isActive ? ' active' : ''}`}
          >
            Services
            <ChevronDown className="nav-services-caret" aria-hidden="true" />
          </NavLink>
          <div className="nav-dropdown">
            {servicesColumns.map(col => (
              <div key={col.title} className={`nav-dropdown-col${col.accent === 'green' ? ' nav-dropdown-col-green' : ''}`}>
                <span className="nav-dropdown-col-title">{col.title}</span>
                {col.links.map((l, i) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className={`nav-dropdown-link${i === 0 ? ' nav-dropdown-link-hub' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="nav-dropdown-link-label">{l.label}</span>
                    <span className="nav-dropdown-link-caption">{l.caption}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </li>

        {/* Services — mobile disclosure (touch has no reliable hover, so this is JS-driven) */}
        <li className="nav-services-mobile">
          <button
            type="button"
            className="nav-services-mobile-trigger"
            aria-expanded={servicesExpanded}
            onClick={() => setServicesExpanded(o => !o)}
          >
            Services
            <ChevronDown className={`nav-services-caret${servicesExpanded ? ' open' : ''}`} aria-hidden="true" />
          </button>
          {servicesExpanded && (
            <ul className="nav-services-mobile-list">
              {servicesMobileLinks.map(l => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

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
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <Link to="/get-quote" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Get a Free Quote
          </Link>
        </li>
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => { setMenuOpen(o => !o); setServicesExpanded(false) }}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
