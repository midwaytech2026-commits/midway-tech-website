import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceDetailPage.css'

const included = [
  { icon: '🎨', title: 'Cross-Platform UI Design',    desc: 'Figma designs with platform-specific adaptations — iOS Human Interface and Android Material 3.' },
  { icon: '⚛️', title: 'React Native + TypeScript',   desc: 'Type-safe cross-platform code using Expo or bare workflow, chosen to fit your project needs.' },
  { icon: '🔧', title: 'Native Module Integration',   desc: 'Camera, GPS, biometrics, Bluetooth — we bridge any native device API your app requires.' },
  { icon: '🔔', title: 'Push Notifications',          desc: 'APNs + FCM setup for both platforms in a single codebase, with rich notification support.' },
  { icon: '🚀', title: 'OTA Updates',                 desc: 'Expo EAS Update for instant bug fixes and content changes without an App Store review cycle.' },
  { icon: '✅', title: 'Dual Store Submission',        desc: 'App Store + Google Play submission handled end-to-end, including screenshots and metadata.' },
  { icon: '🛡', title: '3-Month Support',              desc: 'Bug fixes and minor updates after launch, included in every engagement.' },
]

const techStack = {
  'Core':                ['React Native', 'TypeScript', 'Expo EAS', 'React 18'],
  'Navigation & State':  ['React Navigation', 'Zustand', 'Redux Toolkit', 'React Query'],
  'Backend & APIs':      ['REST', 'GraphQL', 'WebSocket', 'Axios'],
  'Quality':             ['Jest', 'Detox', 'Firebase Crashlytics', 'Sentry'],
}

const processSteps = [
  { step: '01', title: 'Discovery',    duration: '1 week',    desc: 'Define scope, user flows, and choose Expo managed vs bare workflow.' },
  { step: '02', title: 'Design',       duration: '2 weeks',   desc: 'Platform-aware Figma designs — one layout, two platform adaptations.' },
  { step: '03', title: 'Development',  duration: '6–10 weeks', desc: 'Sprint-based build. You test on real iOS and Android devices every week.' },
  { step: '04', title: 'QA & Testing', duration: '1–2 weeks', desc: 'Device matrix QA, Detox automation, and cross-platform performance profiling.' },
  { step: '05', title: 'Launch',       duration: '1 week',    desc: 'Simultaneous App Store and Play Store submission with release management.' },
]

const faqItems = [
  {
    q: 'Will the app feel truly native on both platforms?',
    a: 'Yes. We use platform-specific components and navigation patterns so iOS users get swipe-back gestures and Android users get back-button support. It feels native because the interactions are native.',
  },
  {
    q: 'Do you use Expo or bare React Native?',
    a: "We default to Expo with EAS Build — it speeds up development and enables OTA updates. If you need deep native modules that Expo can't handle, we use bare React Native. We'll recommend the right approach after scoping.",
  },
  {
    q: 'What are the trade-offs vs fully native development?',
    a: 'React Native is excellent for data-driven apps, marketplaces, and fintech. For apps requiring heavy graphics, AR, or very complex animations, fully native may be better. We give you an honest recommendation at the discovery stage.',
  },
  {
    q: 'How do you handle platform-specific UI differences?',
    a: 'We use the Platform API and platform-specific file extensions (.ios.tsx / .android.tsx) to manage differences cleanly. One codebase, deliberate adaptations.',
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'Our minimum project size is $10,000. Most React Native MVPs fall in the $15k–$40k range, covering both stores simultaneously.',
  },
]

const relatedServices = [
  { title: 'iOS Development',     slug: '/services/ios',     icon: '📱' },
  { title: 'Android Development', slug: '/services/android', icon: '🤖' },
  { title: 'Flutter',             slug: '/services/flutter', icon: '🐦' },
]

export default function ServiceReactNativePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="svc-page">
      <section className="svc-hero">
        <div className="svc-hero-content">
          <span className="section-eyebrow">React Native Development</span>
          <h1>One codebase.<br /><em>Both stores. Full quality.</em></h1>
          <p>We build React Native apps that feel and perform like native — without paying twice for two separate codebases.</p>
          <div className="svc-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your React Native Project</Link>
            <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
          </div>
        </div>
        <div className="svc-hero-panel">
          <div className="svc-snapshot">
            <div className="svc-snapshot-header">Project snapshot</div>
            <div className="svc-snapshot-row"><span>Timeline</span><strong>10–16 weeks</strong></div>
            <div className="svc-snapshot-row"><span>Budget range</span><strong>$15k – $55k</strong></div>
            <div className="svc-snapshot-row"><span>Platform</span><strong>iOS + Android</strong></div>
            <div className="svc-snapshot-row"><span>Language</span><strong>React Native + TS</strong></div>
            <div className="svc-snapshot-row"><span>Delivery</span><strong>Fixed price or T&M</strong></div>
            <Link to="/contact" className="svc-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="svc-included">
        <div className="svc-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Everything your cross-platform app needs, <em>in one engagement</em></h2>
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
          <h2>Production-grade React Native setup</h2>
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
          <h2>From idea to both stores</h2>
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
        title="Ready to ship on both platforms?"
        subtitle="One discovery call, one team, one codebase — iOS and Android, delivered together."
        primaryBtn={{ label: 'Book Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
