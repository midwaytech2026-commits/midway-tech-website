import {
  Globe, Smartphone, ShoppingCart, Bot, RefreshCw, Rocket,
  Search, Target, PenTool, Share2, Mail, TrendingUp, Megaphone, Users
} from 'lucide-react'
import './Services.css'

const devServices = [
  { Icon: Globe,        title: 'Web Development',         description: 'Fast, clean websites built to convert visitors into customers.' },
  { Icon: Smartphone,   title: 'Mobile App Development',  description: 'iOS and Android apps your users will actually want to use.' },
  { Icon: ShoppingCart, title: 'Ecommerce Development',   description: 'Online stores built to sell — not just to look good.' },
  { Icon: Bot,          title: 'AI Integrations',         description: 'Practical AI features that save time and create real competitive advantage.' },
  { Icon: RefreshCw,    title: 'Website Revamps',         description: 'Modernise what you have without starting from scratch unnecessarily.' },
  { Icon: Rocket,       title: 'Startup MVP Development', description: 'From idea to working product — fast, lean, and fundable.' },
]

const marketingServices = [
  { Icon: Search,      title: 'SEO',                     description: 'Visibility that compounds month after month. Traffic that actually converts.' },
  { Icon: Target,      title: 'PPC & Paid Advertising',  description: 'Ad spend that returns more than it costs — every time.' },
  { Icon: PenTool,     title: 'Content Marketing',       description: 'Content that builds authority and drives real business decisions.' },
  { Icon: Share2,      title: 'Social Media Marketing',  description: 'Presence that means something to your audience — not just your follower count.' },
  { Icon: Mail,        title: 'Email Marketing',         description: 'The highest-ROI channel available when done properly.' },
  { Icon: Users,       title: 'Influencer Marketing',    description: 'The right voices, speaking to the right audiences, for your product.' },
  { Icon: Megaphone,   title: 'PR & Brand Visibility',   description: 'Be known in the rooms that matter for your industry.' },
  { Icon: TrendingUp,  title: 'Growth Marketing',        description: 'Systematic, data-led growth across every channel — not just one.' },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <p className="section-eyebrow">What We Do</p>
      <h2 className="section-title">From idea to live product.<br />From live product to growing business.</h2>
      <p className="section-sub">We only recommend what your business actually needs — whether that's development, marketing, or both.</p>

      <div className="services-group">
        <div className="services-group-label">
          <span className="group-tag">Development & Product</span>
        </div>
        <div className="services-grid">
          {devServices.map(({ Icon, title, description }) => (
            <div key={title} className="service-card">
              <div className="service-icon"><Icon size={20} strokeWidth={1.5} /></div>
              <div className="service-name">{title}</div>
              <div className="service-desc">{description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-group">
        <div className="services-group-label">
          <span className="group-tag group-tag--marketing">Growth & Marketing</span>
        </div>
        <div className="services-grid">
          {marketingServices.map(({ Icon, title, description }) => (
            <div key={title} className="service-card">
              <div className="service-icon service-icon--marketing"><Icon size={20} strokeWidth={1.5} /></div>
              <div className="service-name">{title}</div>
              <div className="service-desc">{description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta">
        <a href="/services" className="btn-ghost-dark">See All Services →</a>
      </div>
    </section>
  )
}
