import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceDetailPage.css'

const included = [
  { icon: '🎨', title: 'Custom Flutter UI Design',  desc: 'Pixel-perfect Figma designs with Flutter component specs, ready for dev handoff.' },
  { icon: '🐦', title: 'Dart & Flutter 3',          desc: "Latest stable Flutter using Material 3 and Cupertino widgets for a native look on both platforms." },
  { icon: '🔧', title: 'Platform Channels',         desc: 'Native Swift/Kotlin integrations via platform channels for any API Flutter cannot reach natively.' },
  { icon: '🔔', title: 'Push Notifications',        desc: 'Firebase Cloud Messaging with rich notification support across iOS and Android.' },
  { icon: '💳', title: 'In-App Purchases',          desc: 'StoreKit 2 + Google Play Billing integration for subscriptions and one-time purchases.' },
  { icon: '✅', title: 'Dual Store Submission',      desc: 'App Store + Google Play submission handled end-to-end by our team.' },
  { icon: '🛡', title: '3-Month Support',            desc: 'Bug fixes and minor updates after launch, included in every engagement.' },
]

const techStack = {
  'Core':                 ['Flutter 3', 'Dart', 'Material 3', 'Cupertino'],
  'State Management':     ['BLoC', 'Riverpod', 'Provider', 'GetX'],
  'Backend & APIs':       ['Dio', 'GraphQL Flutter', 'WebSocket', 'Supabase'],
  'Quality':              ['Flutter Test', 'Integration Tests', 'Firebase Crashlytics', 'Very Good Analysis'],
}

const processSteps = [
  { step: '01', title: 'Discovery',    duration: '1 week',    desc: 'Define scope, user flows, and select the right state management approach for your app.' },
  { step: '02', title: 'Design',       duration: '2 weeks',   desc: 'Flutter-native Figma designs with component specs for each target platform.' },
  { step: '03', title: 'Development',  duration: '6–10 weeks', desc: 'Sprint-based build with weekly device demos on both iOS and Android simulators.' },
  { step: '04', title: 'QA & Testing', duration: '1–2 weeks', desc: 'Integration testing, device matrix QA, and performance profiling on real hardware.' },
  { step: '05', title: 'Launch',       duration: '1 week',    desc: 'Simultaneous App Store and Play Store submission with release notes and metadata.' },
]

const faqItems = [
  {
    q: 'How does Flutter compare to React Native?',
    a: 'Flutter renders its own widgets using the Skia/Impeller engine, giving you pixel-perfect control across platforms. React Native uses native components. Flutter excels in UI-heavy apps with custom animations; React Native has a larger ecosystem and easier JavaScript integration.',
  },
  {
    q: 'Does Flutter look and feel native on both platforms?',
    a: "Flutter renders its own UI, so it looks the same everywhere — which is an advantage for brand consistency. We use Cupertino widgets on iOS and Material 3 on Android to respect platform conventions where it matters, like navigation patterns.",
  },
  {
    q: 'What state management approach do you use?',
    a: 'We default to BLoC for enterprise-scale apps (testable, predictable) and Riverpod for faster-moving products. We match the approach to your project complexity, not our preference.',
  },
  {
    q: 'Can Flutter apps access native device features?',
    a: 'Yes. Flutter has pub.dev packages for most common APIs (camera, location, biometrics). For anything custom, we use platform channels to call Swift or Kotlin code directly.',
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'Our minimum project size is $10,000. Most Flutter MVPs targeting both platforms fall in the $15k–$40k range.',
  },
]

const relatedServices = [
  { title: 'React Native',        slug: '/services/react-native', icon: '⚛️' },
  { title: 'iOS Development',     slug: '/services/ios',          icon: '📱' },
  { title: 'Android Development', slug: '/services/android',      icon: '🤖' },
]

export default function ServiceFlutterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="svc-page">
      <section className="svc-hero">
        <div className="svc-hero-content">
          <span className="section-eyebrow">Flutter Development</span>
          <h1>Pixel-perfect apps built<br />with <em>Flutter & Dart</em></h1>
          <p>We build Flutter apps with beautiful, consistent UI across iOS and Android — from a single codebase, without compromising on quality.</p>
          <div className="svc-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your Flutter Project</Link>
            <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
          </div>
        </div>
        <div className="svc-hero-panel">
          <div className="svc-snapshot">
            <div className="svc-snapshot-header">Project snapshot</div>
            <div className="svc-snapshot-row"><span>Timeline</span><strong>10–16 weeks</strong></div>
            <div className="svc-snapshot-row"><span>Budget range</span><strong>$15k – $55k</strong></div>
            <div className="svc-snapshot-row"><span>Platform</span><strong>iOS + Android</strong></div>
            <div className="svc-snapshot-row"><span>Language</span><strong>Dart + Flutter 3</strong></div>
            <div className="svc-snapshot-row"><span>Delivery</span><strong>Fixed price or T&M</strong></div>
            <Link to="/contact" className="svc-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="svc-included">
        <div className="svc-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Everything your Flutter app needs, <em>in one engagement</em></h2>
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
          <h2>Google-backed Flutter tooling</h2>
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
        title="Ready to build with Flutter?"
        subtitle="One codebase, two stores, pixel-perfect quality. Let's scope your project."
        primaryBtn={{ label: 'Book Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
