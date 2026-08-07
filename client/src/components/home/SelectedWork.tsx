import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import caseSaas from '../../assets/images/case-saas.jpg'
import caseD2c from '../../assets/images/case-d2c.jpg'
import caseExport from '../../assets/images/case-export.jpg'
import './SelectedWork.css'

const concepts = [
  {
    image: caseSaas,
    alt: 'Concept SaaS website and lead generation system mockup',
    label: 'CONCEPT / SAAS',
    title: 'SaaS Startup — Website + Lead Generation System',
  },
  {
    image: caseD2c,
    alt: 'Concept D2C ecommerce storefront mockup',
    label: 'CONCEPT / D2C',
    title: 'D2C Fashion Brand — Shopify + Performance Marketing',
  },
  {
    image: caseExport,
    alt: 'Concept AI lead qualification system mockup for an export business',
    label: 'CONCEPT / EXPORT',
    title: 'Export Business — AI Lead Qualification System',
  },
]

export default function SelectedWork() {
  return (
    <section className="sw-section">
      <p className="sw-eyebrow">Selected Work</p>
      <h2 className="sw-title">What We&apos;re Built to Ship.</h2>
      <p className="sw-sub">Concept projects and product explorations that show the kind of systems MidwayTech is built to deliver.</p>

      <div className="sw-grid">
        {concepts.map(c => (
          <div key={c.title} className="sw-card">
            <img src={c.image} alt={c.alt} className="sw-card-img" loading="lazy" />
            <div className="sw-card-body">
              <span className="sw-card-label">{c.label}</span>
              <h3>{c.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Link to="/portfolio" className="btn-ghost sw-cta">
        View All Case Studies
        <ArrowRight className="sw-cta-icon" aria-hidden="true" />
      </Link>
    </section>
  )
}
