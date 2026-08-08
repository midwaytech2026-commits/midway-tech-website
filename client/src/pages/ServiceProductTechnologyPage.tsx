import { Link } from 'react-router-dom'
import { Globe2, ShoppingBag, Smartphone, Server, Cloud, PenTool, Link2 } from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceHubPage.css'

const categories = [
  'Website Development',
  'Ecommerce / Shopify',
  'Mobile Apps',
  'Custom Software',
  'SaaS Platforms',
  'UI/UX Design',
  'API Integrations',
]

const services = [
  {
    Icon: Globe2,
    title: 'Website Development',
    desc: 'Fast, responsive websites designed for credibility, conversion, and long-term maintainability.',
    tags: ['React', 'Next.js', 'SEO', 'CMS'],
  },
  {
    Icon: ShoppingBag,
    title: 'Ecommerce & Shopify',
    desc: 'Online stores and product journeys built to support sales, retention, and growth campaigns.',
    tags: ['Shopify', 'Checkout', 'CRO', 'Email Flow'],
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'iOS, Android, Flutter, and React Native apps designed around real user flows and business outcomes.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    Icon: Server,
    title: 'Custom Software',
    desc: 'Internal tools, dashboards, CRM workflows, and operational systems built around how your business actually works.',
    tags: ['Dashboards', 'CRM', 'Admin Panels', 'Automation'],
  },
  {
    Icon: Cloud,
    title: 'SaaS Platforms',
    desc: 'Product architecture, authentication flows, dashboards, and scalable web applications for SaaS ideas.',
    tags: ['SaaS', 'Auth', 'Subscriptions', 'APIs'],
  },
  {
    Icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Interfaces, journeys, wireframes, and prototypes that make complex products easier to understand and use.',
    tags: ['UX', 'Wireframes', 'Design Systems', 'Prototypes'],
  },
  {
    Icon: Link2,
    title: 'API Integrations',
    desc: 'Connect your website, CRM, payment systems, analytics, and third-party tools into one cleaner workflow.',
    tags: ['REST APIs', 'CRM', 'Payments', 'Analytics'],
  },
]

export default function ServiceProductTechnologyPage() {
  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <p className="hub-breadcrumb">
            <Link to="/">Home</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <span className="hub-breadcrumb-current">Product &amp; Technology</span>
          </p>
          <span className="section-eyebrow">Product &amp; Technology</span>
          <h1>Product &amp; Technology Development</h1>
          <p>Websites, ecommerce stores, apps, SaaS platforms, and custom systems built for businesses that need reliable technology, not just attractive screens.</p>
          <div className="hub-hero-actions">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/portfolio" className="btn-ghost">View Case Studies</Link>
          </div>
        </div>
      </section>

      <div className="hub-chips-row">
        {categories.map(c => <span key={c} className="hub-chip">{c}</span>)}
      </div>

      <section className="hub-cards-section">
        <div className="hub-grid">
          {services.map(s => (
            <div key={s.title} className="hub-card">
              <div className="hub-card-icon-wrap">
                <s.Icon className="hub-card-icon" aria-hidden="true" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="hub-card-tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Have a product or platform idea?"
        subtitle="Tell us what you're building. We'll help you scope the right approach."
        primaryBtn={{ label: 'Get a Free Quote', to: '/contact' }}
      />
    </div>
  )
}
