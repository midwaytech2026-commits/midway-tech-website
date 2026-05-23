import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './PortfolioPage.css'

const filters = ['All', 'Development', 'Marketing', 'Full-Service']

interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  tagline: string
  color: string
  emoji: string
  client: string
  market: string
  services: string
  result: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  techStack: string[]
}

const projects: Project[] = [
  {
    id: 'ecom-revamp',
    title: 'Export Business Digital Overhaul',
    category: 'Full-Service',
    tags: ['Full-Service', 'Development', 'Marketing'],
    tagline: 'Website revamp + SEO strategy — organic traffic doubled in 4 months',
    color: '#1A6B3C',
    emoji: '🌍',
    client: 'Export Business',
    market: 'Germany',
    services: 'Website Revamp + SEO + Content Marketing',
    result: 'Organic traffic doubled in 4 months',
    overview: 'A long-established export business with an outdated website and zero organic search presence. They needed both a credible digital presence and a marketing strategy that would attract buyers independently of trade shows.',
    challenge: 'The site was 8 years old, not mobile-optimised, and had no SEO structure. Their marketing was entirely offline. We had to modernise without disrupting existing client relationships.',
    solution: 'We rebuilt the site with a conversion-first approach, then launched an SEO and content strategy targeting buyers in their key markets. Both timelines were aligned so the content strategy launched with the new site.',
    results: [
      'Organic traffic doubled within 4 months of launch',
      'First page rankings for 12 target keywords within 5 months',
      'Website rebuilt and launched in 5 weeks',
      'Copy, design, and SEO aligned from day one — no handoff gaps',
    ],
    techStack: ['React', 'Node.js', 'SEO', 'Content Strategy', 'Google Analytics 4'],
  },
  {
    id: 'saas-mvp',
    title: 'SaaS Platform MVP',
    category: 'Development',
    tags: ['Development'],
    tagline: 'MVP built on budget, launched on time — no scope creep',
    color: '#FF4D1C',
    emoji: '🚀',
    client: 'SaaS Startup',
    market: 'United Kingdom',
    services: 'Web App Development + MVP Strategy',
    result: 'Launched 3 weeks ahead of schedule',
    overview: 'An early-stage SaaS founder who had been burned by a previous agency — over budget, under-delivered, two months late. They came to us needing an MVP that was actually buildable within their remaining runway.',
    challenge: 'The scope the previous agency had agreed to was unrealistic for the budget. We had to re-scope honestly, cut non-essential features, and deliver a product users could actually test.',
    solution: 'We started with a two-day scope workshop, rebuilt the spec around the core validation question, and delivered a working product in 11 weeks — 3 weeks ahead of the revised plan.',
    results: [
      'Launched in 11 weeks — 3 weeks ahead of schedule',
      'Came in on budget with no scope additions',
      'First 40 beta users onboarded within 2 weeks of launch',
      'Founder closed a seed conversation within 60 days of launch',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
  },
  {
    id: 'd2c-marketing',
    title: 'D2C Brand Growth',
    category: 'Marketing',
    tags: ['Marketing'],
    tagline: 'SEO + email strategy that compounded over 6 months',
    color: '#4fa8ff',
    emoji: '📈',
    client: 'D2C Consumer Brand',
    market: 'Netherlands',
    services: 'SEO + Email Marketing + Growth Strategy',
    result: 'Revenue from organic channels up 3x in 6 months',
    overview: 'A direct-to-consumer brand that had been spending heavily on paid ads with diminishing returns. They needed channels that would compound over time and reduce their dependency on ad spend.',
    challenge: 'Their SEO foundation was non-existent. Their email list was underutilised. They had no content strategy. We had to build sustainable channels from scratch while their ad spend continued.',
    solution: 'We recommended cutting two underperforming ad channels immediately and redirecting that budget into SEO content and email automation. Six months later, organic and email together exceeded what paid had been generating.',
    results: [
      'Organic revenue up 3x over 6 months',
      'Email automation generating 18% of monthly revenue',
      'Reduced paid ad dependency by 60%',
      'SEO traffic compounding month on month from month 3',
    ],
    techStack: ['SEO', 'Email Marketing', 'Klaviyo', 'Google Search Console', 'Content Strategy'],
  },
  {
    id: 'logistics-platform',
    title: 'Logistics Platform',
    category: 'Full-Service',
    tags: ['Full-Service', 'Development', 'Marketing'],
    tagline: 'Platform built and grown — from zero to operational in 16 weeks',
    color: '#8B5CF6',
    emoji: '🚚',
    client: 'Logistics Platform',
    market: 'United States',
    services: 'Web App Development + SEO + PPC',
    result: '3x inbound leads within 90 days of launch',
    overview: 'A logistics startup that needed both a working platform and a marketing strategy to attract their first enterprise clients. They came to us wanting both handled as one project.',
    challenge: 'Building a platform clients could actually use was the first priority — but without a parallel go-to-market strategy, the launch would have been invisible.',
    solution: 'We ran development and marketing planning in parallel. The SEO structure was built into the platform from day one. PPC campaigns were prepared before launch and activated on go-live day.',
    results: [
      '3x inbound leads within 90 days of launch',
      'Platform built and operational in 14 weeks',
      'PPC campaign ROAS of 3.8x in month 2',
      'Daily updates throughout — client always knew exactly where things stood',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'SEO', 'Google Ads', 'Analytics'],
  },
]

const placeholders = [
  { emoji: '🏪', label: 'Ecommerce Case Study', sublabel: 'Coming soon' },
  { emoji: '🤖', label: 'AI Integration Case Study', sublabel: 'Coming soon' },
]

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="pp-modal-overlay" onClick={onClose}>
      <div className="pp-modal" onClick={e => e.stopPropagation()}>
        <button className="pp-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="pp-modal-header" style={{ background: project.color }}>
          <div className="pp-modal-emoji">{project.emoji}</div>
          <div>
            <h2>{project.title}</h2>
            <p>{project.tagline}</p>
          </div>
        </div>
        <div className="pp-modal-body">
          <div className="pp-modal-meta">
            <div><span>Market</span><strong>{project.market}</strong></div>
            <div><span>Services</span><strong>{project.services}</strong></div>
            <div><span>Key Result</span><strong>{project.result}</strong></div>
          </div>
          <div className="pp-modal-section">
            <h3>Overview</h3>
            <p>{project.overview}</p>
          </div>
          <div className="pp-modal-section">
            <h3>The Challenge</h3>
            <p>{project.challenge}</p>
          </div>
          <div className="pp-modal-section">
            <h3>What We Did</h3>
            <p>{project.solution}</p>
          </div>
          <div className="pp-modal-section">
            <h3>Results</h3>
            <ul>{project.results.map(r => <li key={r}>{r}</li>)}</ul>
          </div>
          <div className="pp-modal-section">
            <h3>Tools & Channels</h3>
            <div className="pp-tech-pills">
              {project.techStack.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>
        <div className="pp-modal-footer">
          <Link to="/contact" className="btn-primary" onClick={onClose}>Start a Similar Project →</Link>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [openProject, setOpenProject] = useState<Project | null>(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  return (
    <div className="portfolio-page">
      {openProject && <CaseStudyModal project={openProject} onClose={() => setOpenProject(null)} />}

      <section className="pp-hero">
        <div className="pp-hero-inner">
          <span className="section-eyebrow">Case Studies</span>
          <h1>Work that <em>speaks for itself.</em></h1>
          <p>Development and marketing projects — built, launched, and grown. Real results from real engagements.</p>
        </div>
      </section>

      <section className="pp-work">
        <div className="pp-container">
          <div className="pp-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`pp-filter ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >{f}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="pp-empty">
              <p>No case studies in this category yet — more coming soon.</p>
              <button className="pp-filter active" onClick={() => setActiveFilter('All')}>
                View all projects
              </button>
            </div>
          ) : (
            <div className="pp-grid">
              {filtered.map(p => (
                <div key={p.id} className="pp-card" onClick={() => setOpenProject(p)}>
                  <div className="pp-card-visual" style={{ background: p.color }}>
                    <span>{p.emoji}</span>
                  </div>
                  <div className="pp-card-body">
                    <div className="pp-card-tags">
                      {p.tags.map(t => <span key={t} className={t === 'Marketing' ? 'tag-marketing' : t === 'Full-Service' ? 'tag-full' : ''}>{t}</span>)}
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.tagline}</p>
                    <div className="pp-card-result">
                      <strong>{p.result}</strong>
                    </div>
                    <div className="pp-card-services">{p.services}</div>
                    <button className="pp-view-case">Read Case Study →</button>
                  </div>
                </div>
              ))}
              {activeFilter === 'All' && placeholders.map(ph => (
                <div key={ph.label} className="pp-card pp-placeholder">
                  <div className="pp-card-visual pp-card-visual--muted">
                    <span>{ph.emoji}</span>
                  </div>
                  <div className="pp-card-body">
                    <h3>{ph.label}</h3>
                    <p className="pp-placeholder-sub">{ph.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pp-stats">
        <div className="pp-container">
          <div className="pp-stats-grid">
            <div><strong>EU · US · UK</strong><span>Markets Served</span></div>
            <div><strong>Dev + Marketing</strong><span>Under One Roof</span></div>
            <div><strong>Daily</strong><span>Client Updates</span></div>
            <div><strong>Real</strong><span>Results, Real Clients</span></div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Want results like these?"
        subtitle="Book a free discovery call. We will tell you honestly which services will actually move your business forward."
        primaryBtn={{ label: 'Book a Free Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
