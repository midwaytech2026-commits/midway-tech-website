import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceDetailPage.css'

const included = [
  { icon: '🎨', title: 'Material You Design',      desc: 'Figma designs following Material 3 guidelines, adapted to your brand identity.' },
  { icon: '⚡', title: 'Kotlin & Jetpack Compose', desc: "Google's modern declarative UI toolkit for fast, maintainable Android code." },
  { icon: '🔗', title: 'API & Backend Integration', desc: 'REST, GraphQL, WebSocket — we connect to any backend stack you already have.' },
  { icon: '🔔', title: 'Push Notifications',        desc: 'Firebase Cloud Messaging (FCM) for transactional and marketing push messages.' },
  { icon: '💳', title: 'In-App Purchases',          desc: 'Google Play Billing Library for subscriptions, consumables, and one-time purchases.' },
  { icon: '✅', title: 'Google Play Submission',    desc: 'Full Play Store review handling, release track setup, and internal testing.' },
  { icon: '🛡', title: '3-Month Support',            desc: 'Bug fixes and minor updates after launch, included in every engagement.' },
]

const techStack = {
  'Language & UI':     ['Kotlin', 'Jetpack Compose', 'Material 3', 'XML Layouts'],
  'Data & Networking': ['Retrofit', 'OkHttp', 'Room', 'Kotlin Coroutines'],
  'Auth & Payments':   ['Google Sign-In', 'Play Billing', 'Stripe SDK'],
  'Quality':           ['Espresso', 'Firebase Test Lab', 'Firebase Crashlytics', 'LeakCanary'],
}

const processSteps = [
  { step: '01', title: 'Discovery',   duration: '1 week',    desc: 'Define scope, user flows, and technical requirements.' },
  { step: '02', title: 'Design',      duration: '2 weeks',   desc: 'Material 3 wireframes, high-fidelity Figma designs, prototype review.' },
  { step: '03', title: 'Development', duration: '6–10 weeks', desc: 'Sprint-based build with weekly demos and a TestFlight-equivalent internal track.' },
  { step: '04', title: 'QA & Testing', duration: '1–2 weeks', desc: 'Device matrix testing, Firebase Test Lab, performance profiling.' },
  { step: '05', title: 'Launch',      duration: '1 week',    desc: 'Play Store submission, release management, and codebase handover.' },
]

const faqItems = [
  {
    q: 'Do you build for phones, tablets, and wearables?',
    a: 'Yes. We build adaptive Android apps that scale from small phones to large tablets. Wear OS support is available as an add-on.',
  },
  {
    q: 'What Android version do you target?',
    a: 'We target Android 8.0 (API 26) and above by default, covering over 95% of active devices. We can adjust for your specific audience.',
  },
  {
    q: 'Will I own the source code?',
    a: 'Yes — 100%. All code, assets, and the Play Store account belong to you from day one. No lock-in, ever.',
  },
  {
    q: 'Can you work with our existing backend?',
    a: "Absolutely. We integrate with any REST or GraphQL API. If you don't have a backend yet, we can build one alongside the app.",
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'Our minimum project size is $8,000. Most Android MVPs fall in the $12k–$35k range depending on feature complexity.',
  },
]

const relatedServices = [
  { title: 'iOS Development',    slug: '/services/ios',          icon: '📱' },
  { title: 'React Native',       slug: '/services/react-native', icon: '⚛️' },
  { title: 'UI/UX Design',       slug: '/services/ui-ux',        icon: '🎨' },
]

export default function ServiceAndroidPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="svc-page">
      <section className="svc-hero">
        <div className="svc-hero-content">
          <span className="section-eyebrow">Android Development</span>
          <h1>Native Android apps built<br />for <em>Google Play success</em></h1>
          <p>We build Kotlin & Jetpack Compose apps that feel at home on every Android device — performant, polished, and ready to ship.</p>
          <div className="svc-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your Android Project</Link>
            <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
          </div>
        </div>
        <div className="svc-hero-panel">
          <div className="svc-snapshot">
            <div className="svc-snapshot-header">Project snapshot</div>
            <div className="svc-snapshot-row"><span>Timeline</span><strong>10–14 weeks</strong></div>
            <div className="svc-snapshot-row"><span>Budget range</span><strong>$12k – $50k</strong></div>
            <div className="svc-snapshot-row"><span>Platform</span><strong>Android 8.0+</strong></div>
            <div className="svc-snapshot-row"><span>Language</span><strong>Kotlin + Jetpack</strong></div>
            <div className="svc-snapshot-row"><span>Delivery</span><strong>Fixed price or T&M</strong></div>
            <Link to="/contact" className="svc-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="svc-included">
        <div className="svc-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Everything your Android app needs, <em>in one engagement</em></h2>
          <div className="svc-included-grid">
            {included.map(item => (
              <div key={item.title} className="svc-included-card">
                <div className="svc-included-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-tech">
        <div className="svc-container">
          <span className="section-eyebrow">Tech Stack</span>
          <h2>Modern Android-first tooling</h2>
          <div className="svc-tech-grid">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="svc-tech-group">
                <h4>{category}</h4>
                <div className="svc-tech-pills">
                  {items.map(t => <span key={t} className="svc-tech-pill">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="svc-container">
          <span className="section-eyebrow">Our Process</span>
          <h2>From idea to live app</h2>
          <div className="svc-process-list">
            {processSteps.map(p => (
              <div key={p.step} className="svc-process-item">
                <div className="svc-process-step">{p.step}</div>
                <div className="svc-process-body">
                  <div className="svc-process-meta">
                    <h3>{p.title}</h3>
                    <span>{p.duration}</span>
                  </div>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-faq">
        <div className="svc-container">
          <span className="section-eyebrow">FAQ</span>
          <h2>Common questions</h2>
          <div className="svc-faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className={`svc-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="svc-faq-answer"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related">
        <div className="svc-container">
          <h3>Related Services</h3>
          <div className="svc-related-grid">
            {relatedServices.map(s => (
              <Link key={s.title} to={s.slug} className="svc-related-card">
                <span>{s.icon}</span>
                <p>{s.title}</p>
                <span className="svc-related-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to build your Android app?"
        subtitle="Let's scope your project. Free 30-minute discovery call, no commitment."
        primaryBtn={{ label: 'Book Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
