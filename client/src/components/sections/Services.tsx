import { Link } from 'react-router-dom'
import { Layers, Megaphone, Bot, ArrowRight } from 'lucide-react'
import './Services.css'

const disciplines = [
  {
    id: 'product',
    Icon: Layers,
    accent: 'orange',
    title: 'Product & Technology',
    description: 'Websites, apps, Shopify stores, and custom software built to global standards — engineered for scale from the start.',
    tags: ['Shopify', 'Web Apps', 'Mobile', 'SaaS', 'UI/UX'],
    exploreLabel: 'Explore Technology',
    to: '/services/product-technology',
  },
  {
    id: 'growth',
    Icon: Megaphone,
    accent: 'orange',
    title: 'Growth Marketing',
    description: 'Marketing systems built to drive measurable revenue — performance, SEO, social, email, and branding connected to outcomes.',
    tags: ['Performance', 'SEO', 'Social', 'Email', 'Branding'],
    exploreLabel: 'Explore Marketing',
    to: '/services/growth-marketing',
  },
  {
    id: 'ai',
    Icon: Bot,
    accent: 'green',
    title: 'AI & Automation',
    description: 'AI chatbots, workflow automations, and intelligent systems that reduce cost, qualify leads, and multiply output.',
    tags: ['AI Chatbots', 'Workflow', 'CRM Auto', 'Lead Qual.'],
    exploreLabel: 'Explore AI Solutions',
    to: '/services/ai-automation',
  },
]

export default function Services() {
  return (
    <section id="services" className="wwd-section">
      <p className="wwd-eyebrow">What We Do</p>
      <h2 className="wwd-title">Three Disciplines. One Partner. Everything to Scale.</h2>

      <div className="wwd-grid">
        {disciplines.map(d => {
          const Icon = d.Icon
          return (
            <Link
              key={d.id}
              to={d.to}
              className={`wwd-card${d.id === 'ai' ? ' wwd-card--ai' : ''}`}
              aria-label={`Explore ${d.title}`}
            >
              <div className={`wwd-icon-wrap wwd-icon-${d.accent}`}>
                <Icon className="wwd-icon" aria-hidden="true" />
              </div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
              <div className="wwd-tags">
                {d.tags.map(tag => <span key={tag} className="wwd-tag">{tag}</span>)}
              </div>
              <span className="wwd-explore">
                {d.exploreLabel}
                <ArrowRight className="wwd-explore-icon" aria-hidden="true" />
              </span>
            </Link>
          )
        })}
      </div>

      <div className="wwd-notsure">
        <span className="wwd-notsure-text">
          Not sure what you need? <Link to="/contact">Book a free 30-min strategy call — we&apos;ll map it out.</Link>
        </span>
        <Link to="/get-quote" className="btn-primary wwd-notsure-cta">Get a Quote →</Link>
      </div>
    </section>
  )
}
