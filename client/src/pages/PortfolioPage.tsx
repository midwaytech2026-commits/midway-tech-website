import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import caseSaas from '../assets/images/sample-case-saas.jpeg'
import caseFashion from '../assets/images/sample-case-fashion.jpeg'
import caseExport from '../assets/images/sample-case-export.jpeg'
import caseJewellery from '../assets/images/sample-case-jewellery.jpeg'
import caseDental from '../assets/images/sample-case-dental.jpeg'
import './PortfolioPage.css'

interface CaseCard {
  id: string
  image: string
  alt: string
  badge: string
  badgeAccent: 'blue' | 'orange' | 'green' | 'gold'
  type: string
  title: string
  desc: string
  pills: string[]
  meta: string
  filterTags: string[]
}

const caseCards: CaseCard[] = [
  {
    id: 'saas',
    image: caseSaas,
    alt: 'Concept SaaS website and lead generation system mockup',
    badge: 'Concept · SaaS',
    badgeAccent: 'blue',
    type: 'SaaS · Website + Lead Generation',
    title: 'SaaS Startup — Website + Lead Generation System',
    desc: 'A concept marketing website for a B2B SaaS startup — SEO architecture, LinkedIn lead outreach, and an AI chatbot that qualifies leads before they reach a sales team.',
    pills: ['Next.js', 'SEO', 'LinkedIn Auto.', 'AI Chatbot'],
    meta: 'Website · Technology · AI',
    filterTags: ['technology', 'marketing'],
  },
  {
    id: 'fashion',
    image: caseFashion,
    alt: 'Concept D2C fashion ecommerce storefront mockup',
    badge: 'Concept · D2C',
    badgeAccent: 'orange',
    type: 'D2C · Ecommerce + Performance Marketing',
    title: 'Fashion Brand — Shopify + Performance Marketing',
    desc: 'A concept Shopify build for a D2C fashion label — product pages, checkout, email automation, and Meta/Google campaigns designed as one connected system.',
    pills: ['Shopify', 'Meta Ads', 'Google Ads', 'Klaviyo'],
    meta: 'Ecommerce · Marketing',
    filterTags: ['d2c', 'marketing', 'technology'],
  },
  {
    id: 'export',
    image: caseExport,
    alt: 'Concept AI lead qualification workflow mockup for an export business',
    badge: 'Concept · Export',
    badgeAccent: 'green',
    type: 'Export Business · AI Lead Qualification',
    title: 'Export Business — AI Lead Qualification + Website',
    desc: 'A concept workflow showing how an export business could score inbound enquiries by intent and route high-value leads automatically — before a human touches the inbox.',
    pills: ['AI Chatbot', 'CRM Auto.', 'LinkedIn', 'Lead Scoring'],
    meta: 'AI · Technology · Marketing',
    filterTags: ['ai', 'technology', 'marketing'],
  },
  {
    id: 'jewellery',
    image: caseJewellery,
    alt: 'Concept jewellery brand identity and Shopify storefront mockup',
    badge: 'Concept · Jewellery',
    badgeAccent: 'gold',
    type: 'Jewellery · Brand Identity + Ecommerce',
    title: 'Jewellery Brand — Brand Identity + Shopify',
    desc: 'A concept brand identity and Shopify build for a fine jewellery label — editorial design paired with a shopping experience that matches a premium product feel.',
    pills: ['Branding', 'Figma', 'Shopify', 'SEO'],
    meta: 'Branding · Ecommerce',
    filterTags: ['technology', 'd2c'],
  },
  {
    id: 'dental',
    image: caseDental,
    alt: 'Concept AI appointment chatbot mockup for a healthcare practice',
    badge: 'Concept · Healthcare',
    badgeAccent: 'green',
    type: 'Healthcare · AI Appointment System',
    title: 'Healthcare Practice — AI Appointment Chatbot Concept',
    desc: 'A concept AI chatbot workflow for a healthcare practice — answering common questions, checking appointment availability, and booking slots directly, with staff handling anything clinical.',
    pills: ['AI Chatbot', 'Booking Flow', 'WhatsApp API'],
    meta: 'AI Solutions · Automation',
    filterTags: ['ai', 'technology'],
  },
]

const caseFilters = ['All', 'Technology', 'Marketing', 'AI Solutions', 'D2C']
const caseFilterTagMap: Record<string, string> = {
  Technology: 'technology',
  Marketing: 'marketing',
  'AI Solutions': 'ai',
  D2C: 'd2c',
}

export default function PortfolioPage() {
  const [activeCaseFilter, setActiveCaseFilter] = useState('All')

  const filteredCases = activeCaseFilter === 'All'
    ? caseCards
    : caseCards.filter(c => c.filterTags.includes(caseFilterTagMap[activeCaseFilter]))

  return (
    <div className="portfolio-page">

      <section className="pp-hero">
        <div className="pp-hero-inner">
          <span className="section-eyebrow">Case Studies</span>
          <h1>Selected Work</h1>
          <p>Concept projects and product explorations across marketing, technology, and AI — clearly labeled as concept work until verified client case studies are ready.</p>
          <div className="pp-case-filters">
            {caseFilters.map(f => (
              <button
                key={f}
                className={`pp-case-filter ${activeCaseFilter === f ? 'active' : ''}`}
                onClick={() => setActiveCaseFilter(f)}
              >{f}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-concepts">
        <div className="pp-container">
          <div className="pp-case-list">
            {filteredCases.map(c => (
              <div key={c.id} className="pp-case-card">
                <div className="pp-case-img">
                  <img src={c.image} alt={c.alt} loading="lazy" />
                  <span className={`pp-case-badge pp-case-badge-${c.badgeAccent}`}>{c.badge}</span>
                </div>
                <div className="pp-case-content">
                  <div className={`pp-case-type pp-case-type-${c.badgeAccent}`}>{c.type}</div>
                  <h3 className="pp-case-title">{c.title}</h3>
                  <p className="pp-case-desc">{c.desc}</p>
                  <div className="pp-case-pills">
                    {c.pills.map(p => <span key={p} className="pp-case-pill">{p}</span>)}
                  </div>
                  <div className="pp-case-foot">
                    <span className="pp-case-meta">{c.meta}</span>
                    <Link to="/get-quote" className={`pp-case-link pp-case-link-${c.badgeAccent === 'green' ? 'green' : 'orange'}`}>
                      Start similar project
                      <ArrowRight className="pp-case-link-icon" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-cta-section">
        <div className="pp-container">
          <h2>Your Project Could Be Next</h2>
          <p>Tell us what you&apos;re building. We&apos;ll tell you honestly if we&apos;re the right fit — and if we are, we&apos;ll show you exactly how we&apos;d approach it.</p>
          <div className="pp-cta-actions">
            <Link to="/get-quote" className="btn-primary">
              Get a Free Project Quote
              <ArrowRight className="pp-cta-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
