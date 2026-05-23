import { Link } from 'react-router-dom'
import './Footer.css'

const devServices = [
  { label: 'Web Development',       to: '/services' },
  { label: 'Mobile App Development', to: '/services' },
  { label: 'Ecommerce Development', to: '/services' },
  { label: 'AI Integrations',       to: '/services' },
  { label: 'Startup MVP Development', to: '/services' },
]

const marketingServices = [
  { label: 'SEO',                   to: '/services' },
  { label: 'PPC & Paid Advertising', to: '/services' },
  { label: 'Content Marketing',     to: '/services' },
  { label: 'Social Media Marketing', to: '/services' },
  { label: 'Email Marketing',       to: '/services' },
  { label: 'Growth Marketing',      to: '/services' },
]

const companyLinks = [
  { label: 'About Us',   to: '/about' },
  { label: 'Portfolio',  to: '/portfolio' },
  { label: 'Contact',    to: '/contact' },
]

const contactLinks = [
  { label: 'hello@midwaytech.co', href: 'mailto:hello@midwaytech.co', external: false },
  { label: 'WhatsApp us',         href: '#',                           external: true },
  { label: 'LinkedIn',            href: '#',                           external: true },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Midway<span>.</span>Tech</Link>
          <p>Development and marketing services for startups and businesses. Based in Jaipur, India — serving the EU, US & UK.</p>
          <div className="footer-tagline">Build it. Launch it. Grow it.</div>
        </div>

        <div className="footer-col">
          <h4>Development</h4>
          <ul>
            {devServices.map(l => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Marketing</h4>
          <ul>
            {marketingServices.map(l => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {companyLinks.map(l => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <h4 style={{ marginTop: '1.5rem' }}>Contact</h4>
          <ul>
            {contactLinks.map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Midway Tech. All rights reserved.</span>
        <span>
          <a href="#">Privacy Policy</a> · <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  )
}
