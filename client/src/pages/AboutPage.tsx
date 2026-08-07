import { Link } from 'react-router-dom'
import { Target, Rocket, BrainCircuit, Network } from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import aboutTeam from '../assets/images/about-team.jpg'
import './AboutPage.css'

const beliefs = [
  {
    icon: Target,
    title: 'Clarity before code',
    desc: 'We define scope, flows, features, integrations, content, and approvals before development begins.',
  },
  {
    icon: Rocket,
    title: 'Speed with structure',
    desc: 'Fast delivery only works when the process is organized, milestones are clear, and decisions move quickly.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-first execution',
    desc: 'We look for automation opportunities early so the product is built for modern workflows from day one.',
  },
  {
    icon: Network,
    title: 'Built for scale',
    desc: 'We plan products with future features, analytics, integrations, backend growth, and business expansion in mind.',
  },
]

const process = [
  {
    num: '01',
    title: 'Understand the business',
    desc: 'We start by understanding your market, users, revenue model, and what success looks like before any planning begins.',
  },
  {
    num: '02',
    title: 'Freeze the scope',
    desc: 'Features, flows, integrations, content, and approvals are locked before development starts. No ambiguity, no scope creep.',
  },
  {
    num: '03',
    title: 'Build with milestones',
    desc: 'Development runs in structured sprints with clear deliverables, weekly updates, and visible progress at every stage.',
  },
  {
    num: '04',
    title: 'Launch and improve',
    desc: 'We ship, monitor, and iterate. Post-launch support ensures stability while feedback drives the next round of improvements.',
  },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="ap-hero">
        <div className="ap-hero-inner">
          <span className="section-eyebrow">About MidwayTech</span>
          <h1>Built for Businesses Moving<br />From Idea to Scale</h1>
          <p className="ap-hero-sub">
            MidwayTech is an AI-first product and technology partner helping startups and growing
            businesses build mobile apps, websites, automation systems, backend platforms, and
            digital growth systems with speed, clarity, and precision.
          </p>
          <div className="ap-hero-actions">
            <Link to="/contact" className="ap-btn-primary">Book a Discovery Call</Link>
            <Link to="/services" className="ap-btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      <section className="ap-why">
        <div className="ap-why-inner">
          <div className="ap-why-text">
            <span className="section-eyebrow">Our Purpose</span>
            <h2>Why MidwayTech Exists</h2>
            <p className="ap-why-copy">
              Most businesses do not fail because they lack ideas. They struggle because execution
              becomes slow, unclear, or disconnected from real business goals. MidwayTech was built to
              close that gap — helping businesses move from idea to launch and from launch to scale
              with structured product thinking, clean design, modern engineering, and AI-first execution.
            </p>
          </div>
          <div className="ap-why-img">
            <img src={aboutTeam} alt="Team collaboration and product planning workspace" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="ap-beliefs">
        <div className="ap-container">
          <span className="section-eyebrow">Our Principles</span>
          <h2>What We Believe</h2>
          <div className="ap-beliefs-grid">
            {beliefs.map(b => (
              <div key={b.title} className="ap-belief-card">
                <div className="ap-belief-icon">
                  <b.icon size={28} strokeWidth={1.5} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-process">
        <div className="ap-container">
          <span className="section-eyebrow">Our Process</span>
          <h2>How We Work With Clients</h2>
          <div className="ap-process-grid">
            {process.map(p => (
              <div key={p.num} className="ap-process-card">
                <div className="ap-process-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="ap-trust-line">
            No fake numbers. No empty promises. Just clear scope, practical execution, and
            product-focused delivery.
          </p>
        </div>
      </section>

      <CtaStrip
        title="Let's build something together"
        subtitle="Discovery calls are free. Let's talk about your project."
        primaryBtn={{ label: 'Book a Call', to: '/contact' }}
        secondaryBtn={{ label: 'See Our Work', to: '/portfolio' }}
      />
    </div>
  )
}
