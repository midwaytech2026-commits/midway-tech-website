import './Footer.css'

const quickLinks = ['About Us', 'Portfolio', 'Case Study', 'Tech Blog', 'Careers', 'Contact Us']
const services = ['Website Development', 'Mobile App Development', 'E-Commerce Development', 'AI & ML Solutions', 'CRM Development', 'IoT Development']
const industries = ['On-Demand', 'Retail Software', 'Food Delivery', 'Grocery', 'Travel & Hospitality', 'Healthcare', 'Real Estate', 'Education']
const solutions = ['Dating App', 'Video Streaming App', 'Social Media App', 'Startup App', 'Loyalty App', 'Lawyer App']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-name">
            <span className="brand-mid">Midway</span>
            <span className="brand-tech">Tech</span>
          </div>
          <p>Your Ideas, Our Innovations!</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>{quickLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>{services.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>

        <div className="footer-col">
          <h4>Industries</h4>
          <ul>{industries.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>{solutions.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Midway Tech. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
