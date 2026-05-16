import { Link } from 'react-router-dom'
import './Footer.css'

const footerServices = [
  { label: 'iOS Development',     to: '/services/ios' },
  { label: 'Android Development', to: '/services/android' },
  { label: 'React Native',        to: '/services/react-native' },
  { label: 'Flutter',             to: '/services/flutter' },
  { label: 'MVP Build',           to: '/services/mvp' },
]

const companyLinks = [
  { label: 'About Us',   to: '/about' },
  { label: 'Portfolio',  to: '/portfolio' },
  { label: 'Careers',    to: '/contact' },  // no careers page yet — contact is closest
  { label: 'Blog',       to: '/' },         // no blog page yet — home is closest
]

const contactLinks = [
  { label: 'hello@midwaytech.co', href: 'mailto:hello@midwaytech.co', external: false },
  { label: 'WhatsApp us',         href: '#',                           external: true },  // TODO: replace with https://wa.me/YOURPHONE
  { label: 'LinkedIn',            href: '#',                           external: true },  // TODO: replace with https://linkedin.com/company/midway-tech
  { label: 'Clutch profile',      href: '#',                           external: true },  // TODO: replace with your Clutch profile URL
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Midway<span>.</span>Tech</Link>
          <p>Mobile app development for startups and growing businesses. Based in India, serving the US, UK &amp; Australia.</p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {footerServices.map(l => (
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
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
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
          {/* TODO: replace with /privacy and /terms pages, or link to an external legal doc */}
        </span>
      </div>
    </footer>
  )
}
