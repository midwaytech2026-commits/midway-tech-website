import './Footer.css'

const footerServices = ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'MVP Build']
const companyLinks = ['About us', 'Portfolio', 'Careers', 'Blog']
const contactLinks = [
  { label: 'hello@midwaytech.co', href: 'mailto:hello@midwaytech.co' },
  { label: 'WhatsApp us', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Clutch profile', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">Midway<span>.</span>Tech</a>
          <p>Mobile app development for startups and growing businesses. Based in India, serving the US, UK &amp; Australia.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>{footerServices.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>{companyLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>{contactLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Midway Tech. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> · <a href="#">Terms</a></span>
      </div>
    </footer>
  )
}
