import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import logo from '../../assets/icons/brand-mark.png'
import ComingSoonModal from '../common/ComingSoonModal'
import './Footer.css'

type FooterLink = { label: string; to: string } | { label: string; comingSoon: true }

const companyLinks: FooterLink[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Blog', comingSoon: true },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Get a Free Quote', to: '/contact' },
  { label: 'Case Studies', to: '/portfolio' },
]

const productLinks: FooterLink[] = [
  { label: 'Website Development', to: '/services/product-technology' },
  { label: 'Ecommerce / Shopify', to: '/services/product-technology' },
  { label: 'Mobile Apps', to: '/services/product-technology' },
  { label: 'Custom Software', to: '/services/product-technology' },
  { label: 'SaaS Development', to: '/services/product-technology' },
  { label: 'UI/UX Design', to: '/services/ui-ux' },
  { label: 'API Integrations', to: '/services/product-technology' },
]

const marketingLinks: FooterLink[] = [
  { label: 'Performance Marketing', to: '/services/growth-marketing' },
  { label: 'SEO', to: '/services/growth-marketing' },
  { label: 'Social Media', to: '/services/growth-marketing' },
  { label: 'Email Marketing', to: '/services/growth-marketing' },
  { label: 'Branding', to: '/services/growth-marketing' },
  { label: 'Lead Generation', comingSoon: true },
  { label: 'LinkedIn Marketing', comingSoon: true },
]

const aiLinks: FooterLink[] = [
  { label: 'AI Chatbots', to: '/services/ai-automation' },
  { label: 'Workflow Automation', to: '/services/ai-automation' },
  { label: 'CRM Automation', to: '/services/ai-automation' },
  { label: 'AI Content Systems', to: '/services/ai-automation' },
  { label: 'Lead Qualification AI', to: '/services/ai-automation' },
  { label: 'AI Customer Support', comingSoon: true },
]

function FooterLinkItem({ link, onComingSoon }: { link: FooterLink; onComingSoon: (label: string) => void }) {
  if ('to' in link) {
    return <li><Link to={link.to}>{link.label}</Link></li>
  }
  return (
    <li>
      <button type="button" className="footer-link-btn" onClick={() => onComingSoon(link.label)}>
        {link.label}
      </button>
    </li>
  )
}

export default function Footer() {
  const [comingSoon, setComingSoon] = useState<string | null>(null)

  return (
    <footer className="footer">
      <ComingSoonModal
        open={Boolean(comingSoon)}
        message={`${comingSoon} is being prepared and will be available soon.`}
        onClose={() => setComingSoon(null)}
      />

      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div>
            <h2>Have a Project in Mind?</h2>
            <p>Tell us what you are building. We&apos;ll help you understand the right next step.</p>
          </div>
          <Link to="/contact" className="btn-primary footer-cta-btn">Get a Free Quote</Link>
        </div>
      </div>

      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="MidwayTech home">
            <img src={logo} alt="" className="footer-logo-mark" aria-hidden="true" />
            <span className="footer-logo-copy">
              <span className="footer-logo-name">Midway<span>Tech</span></span>
              <span className="footer-logo-tagline">AI &middot; AUTOMATION &middot; GROWTH</span>
            </span>
          </Link>
          <p>Growth and technology partner for modern businesses. Marketing, technology, and AI — one team, one invoice.</p>
          <ul className="footer-contact-list">
            <li><a href="mailto:hello@midwaytech.co"><Mail aria-hidden="true" /> hello@midwaytech.co</a></li>
            <li><span><MapPin aria-hidden="true" /> Jaipur, Rajasthan, India</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {companyLinks.map(l => <FooterLinkItem key={l.label} link={l} onComingSoon={setComingSoon} />)}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Product &amp; Technology</h4>
          <ul>
            {productLinks.map(l => <FooterLinkItem key={l.label} link={l} onComingSoon={setComingSoon} />)}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Growth Marketing</h4>
          <ul>
            {marketingLinks.map(l => <FooterLinkItem key={l.label} link={l} onComingSoon={setComingSoon} />)}
          </ul>
        </div>

        <div className="footer-col footer-col-ai">
          <h4>AI &amp; Automation</h4>
          <ul>
            {aiLinks.map(l => <FooterLinkItem key={l.label} link={l} onComingSoon={setComingSoon} />)}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MidwayTech. All rights reserved.</span>
        <span className="footer-legal">
          <button type="button" className="footer-legal-btn" onClick={() => setComingSoon('Privacy Policy')}>Privacy Policy</button>
          <span className="footer-legal-sep">·</span>
          <button type="button" className="footer-legal-btn" onClick={() => setComingSoon('Terms & Conditions')}>Terms & Conditions</button>
        </span>
      </div>
    </footer>
  )
}
