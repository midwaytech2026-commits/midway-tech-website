import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Smartphone,
  BrainCircuit,
  Globe2,
  Server,
  Rocket,
  PenTool,
  Megaphone,
  ArrowRight,
} from 'lucide-react'
import './PortfolioPage.css'

const filters = ['All', 'Websites', 'Mobile Apps', 'AI Automation', 'MVP', 'Growth Systems', 'Backend Systems']

interface Capability {
  id: string
  Icon: typeof Smartphone
  title: string
  tagline: string
  category: string
  tags: string[]
  desc: string
  techStack: string[]
  timeline: string
}

const capabilities: Capability[] = [
  {
    id: 'mobile',
    Icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'iOS & Android apps built to ship',
    category: 'Mobile Apps',
    tags: ['Mobile Apps', 'MVP'],
    desc: 'We build cross-platform and native mobile apps with clean UI, smooth performance, and App Store / Play Store submission handled end-to-end.',
    techStack: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Firebase', 'Expo'],
    timeline: '8–14 weeks',
  },
  {
    id: 'ai',
    Icon: BrainCircuit,
    title: 'AI Automation Systems',
    tagline: 'Intelligent workflows that save real hours',
    category: 'AI Automation',
    tags: ['AI Automation'],
    desc: 'Custom AI integrations, smart workflow automation, and LLM-powered agents that reduce manual work and unlock new operational capabilities.',
    techStack: ['OpenAI / Claude', 'LangChain', 'Node.js', 'Python', 'Zapier / Make', 'REST APIs'],
    timeline: '4–8 weeks',
  },
  {
    id: 'web',
    Icon: Globe2,
    title: 'Website & Web App Development',
    tagline: 'High-performance sites that convert',
    category: 'Websites',
    tags: ['Websites'],
    desc: 'From landing pages to full web platforms — built for speed, trust, and conversion with modern React stacks and responsive design.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Sanity CMS'],
    timeline: '3–8 weeks',
  },
  {
    id: 'growth',
    Icon: Megaphone,
    title: 'Growth & Marketing Systems',
    tagline: 'Systems built to drive measurable revenue',
    category: 'Growth Systems',
    tags: ['Growth Systems'],
    desc: 'Performance marketing, SEO, lead capture funnels, and email/CRM systems connected to real business outcomes — not vanity metrics.',
    techStack: ['Meta Ads', 'Google Ads', 'SEO', 'Email Automation', 'CRM Integration', 'Analytics'],
    timeline: 'Ongoing / 4+ weeks',
  },
  {
    id: 'mvp',
    Icon: Rocket,
    title: 'MVP Development',
    tagline: 'Validate fast with a real product',
    category: 'MVP',
    tags: ['MVP', 'Mobile Apps'],
    desc: 'Structured MVP sprints with a defined scope, weekly demos, and a launch-ready product in 8–10 weeks. Built to test, not to impress investors.',
    techStack: ['React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS / GCP', 'Figma'],
    timeline: '8–10 weeks',
  },
  {
    id: 'backend',
    Icon: Server,
    title: 'Backend & API Systems',
    tagline: 'Scalable infrastructure that grows with you',
    category: 'Backend Systems',
    tags: ['Backend Systems'],
    desc: 'APIs, databases, authentication, admin dashboards, and cloud infrastructure — engineered for scale, security, and seamless third-party integrations.',
    techStack: ['Node.js', 'PostgreSQL', 'MongoDB', 'AWS / GCP', 'Docker', 'Stripe'],
    timeline: '4–10 weeks',
  },
  {
    id: 'design',
    Icon: PenTool,
    title: 'UI/UX Design',
    tagline: 'Product design that earns user trust',
    category: 'Websites',
    tags: ['Websites', 'Mobile Apps', 'MVP'],
    desc: 'Wireframes, prototypes, and Figma design systems built for clarity, accessibility, and conversion — before a single line of code is written.',
    techStack: ['Figma', 'FigJam', 'Prototyping', 'Design Systems', 'User Research'],
    timeline: '2–4 weeks',
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? capabilities
    : capabilities.filter(c => c.tags.includes(activeFilter))

  return (
    <div className="portfolio-page">

      <section className="pp-hero">
        <div className="pp-hero-inner">
          <span className="section-eyebrow">Case Studies / Portfolio</span>
          <h1>Work, Concepts, and Product Systems Built to Scale</h1>
          <p>A look at the types of websites, apps, AI systems, and growth platforms MidwayTech is built to deliver.</p>
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
              <p>No capabilities in this category yet.</p>
              <button className="pp-filter active" onClick={() => setActiveFilter('All')}>
                View all
              </button>
            </div>
          ) : (
            <div className="pp-grid">
              {filtered.map(cap => {
                const Icon = cap.Icon
                return (
                  <div key={cap.id} className="pp-card">
                    <div className="pp-card-icon-wrap">
                      <Icon className="pp-card-icon" aria-hidden="true" />
                    </div>
                    <div className="pp-card-body">
                      <span className="pp-card-badge">BUILD CAPABILITY</span>
                      <div className="pp-card-tags">
                        {cap.tags.map(t => <span key={t}>{t}</span>)}
                      </div>
                      <h3>{cap.title}</h3>
                      <p className="pp-card-tagline">{cap.tagline}</p>
                      <p className="pp-card-desc">{cap.desc}</p>
                      <div className="pp-tech-pills">
                        {cap.techStack.map(t => <span key={t}>{t}</span>)}
                      </div>
                      <div className="pp-card-meta">
                        <span className="pp-timeline-label">Typical timeline:</span>
                        <span className="pp-timeline-value">{cap.timeline}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section className="pp-cta-section">
        <div className="pp-container">
          <h2>Have a project in mind?</h2>
          <p>Book a free 30-minute discovery call. We'll give you a scope estimate within 48 hours.</p>
          <div className="pp-cta-actions">
            <Link to="/contact" className="btn-primary">
              Book Discovery Call
              <ArrowRight className="pp-cta-icon" aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn-ghost">View Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
