import { Link } from 'react-router-dom'
import { Globe2, ShoppingBag, BrainCircuit, ArrowRight } from 'lucide-react'
import './SelectedWork.css'

const concepts = [
  {
    Icon: Globe2,
    label: 'CONCEPT / SAAS WEBSITE',
    title: 'SaaS Startup — Website + Lead Generation System',
  },
  {
    Icon: ShoppingBag,
    label: 'CONCEPT / D2C SHOPIFY',
    title: 'D2C Fashion Brand — Shopify + Performance Marketing',
  },
  {
    Icon: BrainCircuit,
    label: 'CONCEPT / AI SYSTEM',
    title: 'Export Business — AI Lead Qualification System',
  },
]

export default function SelectedWork() {
  return (
    <section className="sw-section">
      <p className="sw-eyebrow">Selected Work</p>
      <h2 className="sw-title">Work We&apos;re Proud Of.</h2>
      <p className="sw-sub">Concept projects and product explorations across industries.</p>

      <div className="sw-grid">
        {concepts.map(c => {
          const Icon = c.Icon
          return (
            <div key={c.title} className="sw-card">
              <div className="sw-card-icon-wrap">
                <Icon className="sw-card-icon" aria-hidden="true" />
              </div>
              <span className="sw-card-label">{c.label}</span>
              <h3>{c.title}</h3>
            </div>
          )
        })}
      </div>

      <Link to="/portfolio" className="btn-ghost sw-cta">
        View All Case Studies
        <ArrowRight className="sw-cta-icon" aria-hidden="true" />
      </Link>
    </section>
  )
}
