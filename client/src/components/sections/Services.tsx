import { Link } from 'react-router-dom'
import { Layers, Megaphone, Bot } from 'lucide-react'
import './Services.css'

const disciplines = [
  {
    id: 'product',
    Icon: Layers,
    accent: 'orange',
    title: 'Product & Technology',
    description: 'Websites, apps, Shopify stores, and custom software built to global standards — engineered for scale from the start.',
    tags: ['Web Apps', 'Mobile', 'SaaS', 'UI/UX', 'Shopify'],
  },
  {
    id: 'growth',
    Icon: Megaphone,
    accent: 'orange',
    title: 'Growth Marketing',
    description: 'Marketing systems built to drive measurable revenue — performance, SEO, social, email, and branding connected to outcomes.',
    tags: ['Performance', 'SEO', 'Social', 'Email', 'Branding'],
  },
  {
    id: 'ai',
    Icon: Bot,
    accent: 'green',
    title: 'AI & Automation',
    description: 'AI chatbots, workflow automations, CRM systems, and intelligent tools that reduce cost, qualify leads, and multiply output.',
    tags: ['AI Chatbots', 'Workflow', 'CRM Auto', 'Lead Qual.'],
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
            <div key={d.id} className="wwd-card">
              <div className={`wwd-icon-wrap wwd-icon-${d.accent}`}>
                <Icon className="wwd-icon" aria-hidden="true" />
              </div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
              <div className="wwd-tags">
                {d.tags.map(tag => <span key={tag} className="wwd-tag">{tag}</span>)}
              </div>
            </div>
          )
        })}
      </div>

      <div className="wwd-cta-strip">
        <p>Not sure what you need? Book a free 30-minute strategy call — we&apos;ll map it out.</p>
        <Link to="/contact" className="btn-primary">Get a Quote</Link>
      </div>
    </section>
  )
}
