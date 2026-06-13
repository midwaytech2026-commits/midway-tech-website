import { Link } from 'react-router-dom'
import {
  Smartphone,
  Globe2,
  BrainCircuit,
  Rocket,
  PenTool,
  Server,
  Megaphone,
  Lightbulb,
  Target,
  Clock,
  Users,
  ArrowRight,
} from 'lucide-react'
import './ServicesPage.css'

const services = [
  {
    Icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Launch fast, scalable mobile apps with clean UI, smooth flows, and React Native execution built for both iOS and Android.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    Icon: Globe2,
    title: 'Website Development',
    desc: 'High-performance websites designed for trust, conversion, speed, and modern brand presence.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    Icon: BrainCircuit,
    title: 'AI Automation',
    desc: 'Automate repetitive workflows, lead handling, customer journeys, internal operations, and business processes with AI-first systems.',
    tags: ['LLM Integration', 'Workflow AI', 'Smart Agents'],
  },
  {
    Icon: Rocket,
    title: 'MVP Development',
    desc: 'Validate your product idea with structured MVP sprints, focused feature scope, and fast launch-ready execution.',
    tags: ['Rapid Build', 'User Testing', 'Product Strategy'],
  },
  {
    Icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Clean product design, user flows, wireframes, and interfaces built for clarity, trust, and conversion.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    Icon: Server,
    title: 'Backend & API Development',
    desc: 'Scalable backend systems, APIs, authentication, dashboards, and integrations built for future growth.',
    tags: ['Node.js', 'PostgreSQL', 'AWS / GCP'],
  },
  {
    Icon: Megaphone,
    title: 'Digital Marketing Systems',
    desc: 'Conversion-focused digital systems for funnels, campaigns, analytics, lead capture, and growth operations.',
    tags: ['SEO', 'Performance Ads', 'Growth Strategy'],
  },
  {
    Icon: Lightbulb,
    title: 'Brand & Product Strategy',
    desc: 'Product positioning, feature planning, brand direction, and launch strategy for businesses that want clarity before execution.',
    tags: ['Product Roadmap', 'Brand Positioning', 'GTM Planning'],
  },
]

const engagements = [
  {
    Icon: Target,
    title: 'Fixed Price',
    best: 'MVPs & defined scope',
    desc: 'Agree the spec, agree the price. No surprises. Best when you have a clear feature set and timeline.',
  },
  {
    Icon: Clock,
    title: 'Time & Materials',
    best: 'Evolving products',
    desc: 'Pay for what we build. Ideal for products where scope evolves based on user feedback and market signals.',
  },
  {
    Icon: Users,
    title: 'Dedicated Team',
    best: 'Long-term builds',
    desc: 'A focused team embedded into your product. Scales up or down as your roadmap and priorities demand.',
  },
]

export default function ServicesPage() {
  return (
    <div className="services-page">

      <section className="sp-hero">
        <div className="sp-hero-inner">
          <p className="section-eyebrow">Services</p>
          <h1>AI-First Services Built for<br /><em>Modern Businesses</em></h1>
          <p>From mobile apps and websites to AI automation and scalable backend systems, MidwayTech helps startups and growing businesses launch faster and scale smarter.</p>
          <Link to="/contact" className="btn-primary sp-hero-cta">
            Book a Discovery Call
            <ArrowRight className="sp-cta-icon" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="sp-services">
        <div className="sp-container">
          <div className="sp-services-grid">
            {services.map(s => {
              const Icon = s.Icon
              return (
                <div key={s.title} className="sp-service-card">
                  <div className="sp-service-icon-wrap">
                    <Icon className="sp-service-icon" aria-hidden="true" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="sp-service-tags">
                    {s.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sp-engagement">
        <div className="sp-container">
          <p className="section-eyebrow">Engagement Models</p>
          <h2>Work with us the way that fits your project</h2>
          <div className="sp-engagement-grid">
            {engagements.map(e => {
              const Icon = e.Icon
              return (
                <div key={e.title} className="sp-engagement-card">
                  <div className="sp-engagement-icon-wrap">
                    <Icon className="sp-engagement-icon" aria-hidden="true" />
                  </div>
                  <div className="sp-engagement-best">Best for: {e.best}</div>
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sp-cta-section">
        <div className="sp-container">
          <h2>Ready to start building?</h2>
          <p>Book a free 30-minute discovery call and get a scope estimate within 48 hours.</p>
          <div className="sp-cta-actions">
            <Link to="/contact" className="btn-primary">
              Book Discovery Call
              <ArrowRight className="sp-cta-icon" aria-hidden="true" />
            </Link>
            <Link to="/portfolio" className="btn-ghost">View Our Work</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
