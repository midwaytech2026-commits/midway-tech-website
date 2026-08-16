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
    desc: 'Full marketing site with SEO, LinkedIn lead system, and an AI chatbot pre-qualifying leads around the clock.',
    tags: ['Next.js', 'SEO', 'AI Chatbot'],
  },
  {
    image: caseD2c,
    alt: 'Concept D2C ecommerce storefront mockup',
    label: 'CONCEPT / D2C',
    title: 'D2C Fashion Brand — Shopify + Performance Marketing',
    desc: 'Full Shopify build with integrated Meta and Google campaigns — a unified system from product to checkout.',
    tags: ['Shopify', 'Meta Ads', 'Email Auto.'],
  },
  {
    image: caseExport,
    alt: 'Concept AI lead qualification system mockup for an export business',
    label: 'CONCEPT / EXPORT',
    title: 'Export Business — AI Lead Qualification System',
    desc: 'AI scoring inbound enquiries from LinkedIn and website, routing high-value leads automatically.',
    tags: ['AI Chatbot', 'CRM Auto.', 'Lead Scoring'],
    accent: 'green',
  },
]

export default function SelectedWork() {
  return (
    <section className="sw-section">
      <div className="sw-header">
        <div>
          <p className="sw-eyebrow">Selected Work</p>
          <h2 className="sw-title">Work We&apos;re Proud Of.</h2>
          <p className="sw-sub">Concept projects and product explorations across industries.</p>
        </div>
        <Link to="/portfolio" className="sw-viewall-link">
          View all case studies
          <ArrowRight className="sw-viewall-icon" aria-hidden="true" />
        </Link>
      </div>

      <div className="sw-grid">
        {concepts.map(c => (
          <div key={c.title} className="sw-card">
            <div className="sw-card-img-wrap">
              <img src={c.image} alt={c.alt} className="sw-card-img" loading="lazy" />
            </div>
            <div className="sw-card-body">
              <span className={`sw-card-label${c.accent === 'green' ? ' sw-card-label-green' : ''}`}>{c.label}</span>
              <h3>{c.title}</h3>
              <p className="sw-card-desc">{c.desc}</p>
              <div className="sw-card-tags">
                {c.tags.map(tag => <span key={tag} className="sw-card-tag">{tag}</span>)}
              </div>
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
