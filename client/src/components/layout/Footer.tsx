import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import './Footer.css'

const footerServices = [
  { label: 'iOS Development',     to: '/services/ios' },
  { label: 'Android Development', to: '/services/android' },
  { label: 'React Native',        to: '/services/react-native' },
  { label: 'Flutter',             to: '/services/flutter' },
  { label: 'MVP Build',           to: '/services/mvp' },
]

const companyLinks = [
  { label: 'About Us',  to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact',   to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/"><img src={logo} alt="MidwayTech" className="site-logo footer-logo" /></Link>
          <p>MidwayTech builds AI-first mobile apps, websites, automation systems, backend platforms, and digital growth systems for startups and growing businesses.</p>
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
            <li>
              <a href="mailto:hello@midwaytech.co">hello@midwaytech.co</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MidwayTech. All rights reserved.</span>
        <span className="footer-legal">Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  )
}
