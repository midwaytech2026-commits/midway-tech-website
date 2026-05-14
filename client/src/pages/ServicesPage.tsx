import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './ServicesPage.css'

const services = [
  {
    icon: '📱',
    title: 'iOS App Development',
    slug: '/services/ios',
    desc: 'Swift & SwiftUI native apps built for performance and App Store approval.',
    bullets: ['Swift & SwiftUI', 'App Store submission', 'TestFlight QA', 'App Clips', 'In-app purchases'],
  },
  {
    icon: '🤖',
    title: 'Android App Development',
    slug: '/services',
    desc: 'Kotlin-first Android apps for phones, tablets, and wearables.',
    bullets: ['Kotlin & Jetpack Compose', 'Google Play submission', 'Material You design', 'Wear OS support', 'Firebase integration'],
  },
  {
    icon: '⚛️',
    title: 'React Native',
    slug: '/services',
    desc: 'One codebase, two stores. Ship faster without sacrificing native feel.',
    bullets: ['Expo managed workflow', 'Custom native modules', 'OTA updates', 'Navigation & deep links', 'Push notifications'],
  },
  {
    icon: '🦋',
    title: 'Flutter',
    slug: '/services',
    desc: "Google's cross-platform UI toolkit for pixel-perfect apps on every device.",
    bullets: ['Dart & Flutter 3', 'iOS + Android + Web', 'Custom animations', 'Platform channels', 'BLoC state management'],
  },
  {
    icon: '🚀',
    title: 'MVP Build',
    slug: '/services',
    desc: 'Launch in 8 weeks with a focused product ready for real users and investors.',
    bullets: ['8-week sprints', 'Scope workshop included', 'Design + dev in one team', 'Investor-ready output', 'Handover documentation'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    slug: '/services',
    desc: 'Research-backed design that converts and delights — from wireframe to prototype.',
    bullets: ['User research', 'Figma prototypes', 'Design system', 'Interaction design', 'Handoff to dev'],
  },
]

const industries = [
  { icon: '💪', name: 'Health & Fitness' },
  { icon: '💳', name: 'Fintech' },
  { icon: '🛒', name: 'E-commerce' },
  { icon: '📚', name: 'EdTech' },
  { icon: '🚚', name: 'Logistics' },
  { icon: '🏠', name: 'PropTech' },
  { icon: '🍔', name: 'Food & Delivery' },
  { icon: '🎮', name: 'Gaming & Social' },
]

const engagements = [
  {
    title: 'Fixed Price',
    best: 'MVPs & defined scope',
    desc: 'Agree the spec, agree the price. No surprises. Best when you have a clear feature set.',
    icon: '🎯',
  },
  {
    title: 'Time & Materials',
    best: 'Evolving products',
    desc: 'Pay for what we build. Ideal for products where scope evolves based on user feedback.',
    icon: '⏱',
  },
  {
    title: 'Dedicated Team',
    best: 'Long-term builds',
    desc: 'A full team embedded into your product. Scales up or down as your roadmap demands.',
    icon: '🤝',
  },
]

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="sp-hero">
        <div className="sp-hero-inner">
          <span className="section-eyebrow">Our Services</span>
          <h1>Mobile development,<br /><em>end to end</em></h1>
          <p>From idea to App Store — we handle design, development, QA, and launch for iOS and Android.</p>
        </div>
      </section>

      <section className="sp-services">
        <div className="sp-container">
          <div className="sp-services-grid">
            {services.map(s => (
              <div key={s.title} className="sp-service-card">
                <div className="sp-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <Link to={s.slug} className="sp-service-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-industries">
        <div className="sp-container">
          <span className="section-eyebrow">Industries</span>
          <h2>We've built apps across <em>every</em> vertical</h2>
          <div className="sp-industries-grid">
            {industries.map(i => (
              <div key={i.name} className="sp-industry-card">
                <span>{i.icon}</span>
                <p>{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-engagement">
        <div className="sp-container">
          <span className="section-eyebrow">Engagement Models</span>
          <h2>Work with us the way that fits your project</h2>
          <div className="sp-engagement-grid">
            {engagements.map(e => (
              <div key={e.title} className="sp-engagement-card">
                <div className="sp-engagement-icon">{e.icon}</div>
                <div className="sp-engagement-best">Best for: {e.best}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to start building?"
        subtitle="Book a free 30-minute discovery call and get a scope estimate within 48 hours."
        primaryBtn={{ label: 'Book Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View Our Work', to: '/portfolio' }}
      />
    </div>
  )
}
