import { Link } from 'react-router-dom'
import { Megaphone, Search, Share2, Mail, Target, TrendingUp, PenLine, Handshake, Repeat, Magnet, Network } from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceHubPage.css'

const categories = [
  'Performance Marketing',
  'SEO',
  'Social Media',
  'Content Strategy',
  'Influencer Marketing',
  'Email Marketing',
  'Marketing Automation',
  'Lead Generation',
  'LinkedIn Marketing',
  'Brand Positioning',
  'Conversion Optimization',
]

const services = [
  {
    Icon: Megaphone,
    title: 'Performance Marketing',
    desc: 'Paid campaign systems built around clear offers, landing pages, tracking, and learning cycles.',
    tags: ['Meta Ads', 'Google Ads', 'Landing Pages', 'Tracking'],
  },
  {
    Icon: Search,
    title: 'SEO & Content',
    desc: 'Search-focused content structures that help customers understand your business and find your services.',
    tags: ['SEO', 'Content', 'Keywords', 'Site Structure'],
  },
  {
    Icon: PenLine,
    title: 'Content Marketing',
    desc: 'SEO-focused content that ranks, educates your audience, and supports conversion.',
    tags: ['Blog', 'SEO Content', 'Content Strategy', 'Editorial'],
  },
  {
    Icon: Share2,
    title: 'Social Media Systems',
    desc: 'Content planning, creative direction, and platform strategy for brands that need consistent visibility.',
    tags: ['LinkedIn', 'Instagram', 'Content Calendar', 'Creative'],
  },
  {
    Icon: Handshake,
    title: 'Influencer Marketing',
    desc: 'Creator partnerships structured around genuine purchase intent, not just reach.',
    tags: ['Creator Outreach', 'Campaigns', 'UGC', 'Affiliate'],
  },
  {
    Icon: Mail,
    title: 'Email & Retention',
    desc: 'Email flows, customer journeys, and follow-up systems that help turn attention into repeat business.',
    tags: ['Email Flows', 'Retention', 'Segments', 'Automation'],
  },
  {
    Icon: Repeat,
    title: 'Marketing Automation',
    desc: 'Automated nurture sequences and campaign workflows that run without manual upkeep.',
    tags: ['Workflows', 'Nurture Sequences', 'Triggers', 'CRM Sync'],
  },
  {
    Icon: Magnet,
    title: 'Lead Generation',
    desc: 'Inbound and outbound systems built for a predictable flow of qualified leads.',
    tags: ['Landing Pages', 'Forms', 'Outbound', 'Qualification'],
  },
  {
    Icon: Network,
    title: 'LinkedIn Marketing',
    desc: 'LinkedIn content and outreach systems built to generate business conversations, not just followers.',
    tags: ['Organic Content', 'Outreach', 'Sales Navigator', 'Personal Branding'],
  },
  {
    Icon: Target,
    title: 'Brand Positioning',
    desc: 'Messaging, offers, and website structure that make your business easier to trust and buy from.',
    tags: ['Messaging', 'Offers', 'Landing Pages', 'Positioning'],
  },
  {
    Icon: TrendingUp,
    title: 'Conversion Optimization',
    desc: 'Improving forms, pages, CTAs, and journeys so more visitors take the next step.',
    tags: ['CRO', 'Forms', 'UX', 'Analytics'],
  },
]

export default function ServiceGrowthMarketingPage() {
  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <p className="hub-breadcrumb">
            <Link to="/">Home</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <span className="hub-breadcrumb-current">Growth Marketing</span>
          </p>
          <span className="section-eyebrow">Growth Marketing</span>
          <h1>Growth Marketing Systems</h1>
          <p>Marketing strategy, content, SEO, paid campaigns, and retention systems built to create measurable demand — not just activity.</p>
          <div className="hub-hero-actions">
            <Link to="/get-quote" className="btn-primary">Get a Free Quote</Link>
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
        title="Need growth that connects with your website and systems?"
        subtitle="Tell us your goals. We'll help map the right marketing approach."
        primaryBtn={{ label: 'Get a Free Quote', to: '/get-quote' }}
      />
    </div>
  )
}
