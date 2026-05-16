import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './PortfolioPage.css'

const filters = ['All', 'iOS', 'Android', 'React Native', 'MVP']

const projects: Project[] = [
  {
    id: 'fittrack',
    title: 'FitTrack Pro',
    category: 'iOS',
    tags: ['iOS', 'MVP'],
    tagline: 'AI-powered fitness tracking for serious athletes',
    color: '#FF4D1C',
    emoji: '💪',
    client: 'FitTrack Inc.',
    timeline: '12 weeks',
    platform: 'iOS 16+',
    result: '40k downloads in 3 months',
    overview: 'FitTrack Pro is a native iOS fitness app with AI-driven workout recommendations, real-time Apple Watch integration, and advanced performance analytics.',
    challenge: 'The client needed an MVP that could compete with established players — fast. They had 90 days before a seed round close and needed a live App Store product.',
    solution: 'We ran a 2-week design sprint, then 8 weeks of agile development with weekly demos. Used SwiftUI for rapid UI iteration and Core ML for on-device AI inference.',
    results: ['40,000 downloads in 90 days', '4.8 App Store rating', '$1.2M seed round closed', 'Featured by Apple in Health & Fitness'],
    techStack: ['Swift', 'SwiftUI', 'Core ML', 'HealthKit', 'WatchOS', 'Firebase'],
  },
  {
    id: 'lumi',
    title: 'Lumi Finance',
    category: 'React Native',
    tags: ['React Native', 'MVP'],
    tagline: 'Personal finance app for Gen Z savers',
    color: '#FFB800',
    emoji: '💳',
    client: 'Lumi Technologies',
    timeline: '14 weeks',
    platform: 'iOS + Android',
    result: '4.9 App Store rating',
    overview: 'Lumi is a cross-platform personal finance app with round-up savings, spending insights, and BNPL integration — built in React Native to hit both stores simultaneously.',
    challenge: 'The founding team wanted iOS and Android simultaneously but had a $60k budget. A native dual build would have cost twice that.',
    solution: 'React Native with Expo allowed us to share 85% of the codebase. Custom native modules handled biometric auth and Plaid bank linking on each platform.',
    results: ['4.9 App Store rating', '4.8 Play Store rating', 'iOS + Android in 14 weeks', '10,000 beta sign-ups before launch'],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Plaid API', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'haulio',
    title: 'Haulio Fleet',
    category: 'Android',
    tags: ['Android'],
    tagline: 'Real-time fleet tracking for last-mile delivery',
    color: '#1A8C6A',
    emoji: '🚚',
    client: 'Haulio Pty Ltd',
    timeline: '14 weeks',
    platform: 'Android 8.0+',
    result: '35% faster delivery cycles',
    overview: 'Haulio Fleet is a native Android app for delivery fleet operators — giving dispatchers live driver tracking, automated route optimisation, and a structured delivery management interface for drivers in the field.',
    challenge: "Haulio's 60-driver fleet was coordinated entirely via WhatsApp groups and shared spreadsheets. Dispatchers had no real-time visibility; drivers had no structured way to confirm deliveries or flag issues. The team was losing 3–4 hours per day to coordination overhead.",
    solution: 'We built a dual-interface Android app — a dispatcher dashboard and a driver delivery list — using Kotlin and Jetpack Compose. Firebase Realtime Database provides sub-second location updates. Room database ensures the driver interface works fully offline when connectivity drops in warehouses.',
    results: ['35% reduction in average delivery cycle time', '4.7 Google Play rating across 600+ drivers', 'Replaced 3 WhatsApp groups and 2 spreadsheets', 'Zero unplanned downtime in first 6 months of production'],
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase RTDB', 'Google Maps SDK', 'Retrofit', 'Room', 'WorkManager'],
  },
]

const placeholders = [
  { emoji: '🏠', label: 'PropTech App', sublabel: 'Case study coming soon' },
  { emoji: '🍔', label: 'Food Delivery MVP', sublabel: 'Case study coming soon' },
]

interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  tagline: string
  color: string
  emoji: string
  client: string
  timeline: string
  platform: string
  result: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  techStack: string[]
}

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
            <div><span>Client</span><strong>{project.client}</strong></div>
            <div><span>Timeline</span><strong>{project.timeline}</strong></div>
            <div><span>Platform</span><strong>{project.platform}</strong></div>
            <div><span>Key result</span><strong>{project.result}</strong></div>
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
            <h3>Our Approach</h3>
            <p>{project.solution}</p>
          </div>
          <div className="pp-modal-section">
            <h3>Results</h3>
            <ul>{project.results.map(r => <li key={r}>{r}</li>)}</ul>
          </div>
          <div className="pp-modal-section">
            <h3>Tech Stack</h3>
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
          <span className="section-eyebrow">Portfolio</span>
          <h1>Apps we've <em>shipped</em></h1>
          <p>Real products, real results. From 8-week MVPs to full-featured platforms.</p>
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
                      {p.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.tagline}</p>
                    <div className="pp-card-result">
                      <strong>{p.result}</strong>
                    </div>
                    <button className="pp-view-case">View Case Study →</button>
                  </div>
                </div>
              ))}
              {placeholders.map(ph => (
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
            <div><strong>40+</strong><span>Apps Shipped</span></div>
            <div><strong>4.8★</strong><span>Avg App Store rating</span></div>
            <div><strong>8 weeks</strong><span>Fastest MVP</span></div>
            <div><strong>$50M+</strong><span>Raised by our clients</span></div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Want results like these?"
        subtitle="We have capacity for 2 new projects this quarter. Let's talk about yours."
        primaryBtn={{ label: 'Start a Project', to: '/contact' }}
        secondaryBtn={{ label: 'View Services', to: '/services' }}
      />
    </div>
  )
}
