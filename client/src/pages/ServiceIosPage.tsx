import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceIosPage.css'

const included = [
  { icon: '🎨', title: 'Custom UI/UX Design', desc: 'Figma designs following Apple HIG, tailored to your brand.' },
  { icon: '⚡', title: 'Swift & SwiftUI', desc: 'Modern, performant code using Apple\'s latest frameworks.' },
  { icon: '🔗', title: 'API & Backend Integration', desc: 'REST, GraphQL, WebSocket — we connect to any backend.' },
  { icon: '🔔', title: 'Push Notifications', desc: 'APNs integration for transactional and marketing messages.' },
  { icon: '💳', title: 'In-App Purchases', desc: 'Subscriptions, consumables, and StoreKit 2 setup.' },
  { icon: '✅', title: 'App Store Submission', desc: 'Full App Store review handling and TestFlight QA setup.' },
  { icon: '🛡', title: '3-Month Support', desc: 'Bug fixes and minor updates after launch, included.' },
]

const techStack = {
  'Language & UI': ['Swift 5.9', 'SwiftUI', 'UIKit'],
  'Data & Networking': ['URLSession', 'Alamofire', 'Combine', 'Core Data'],
  'Auth & Payments': ['Sign in with Apple', 'StoreKit 2', 'Stripe SDK'],
  'Quality': ['XCTest', 'TestFlight', 'Instruments', 'Firebase Crashlytics'],
}

const processSteps = [
  { step: '01', title: 'Discovery', duration: '1 week', desc: 'Define scope, user flows, and technical requirements.' },
  { step: '02', title: 'Design', duration: '2 weeks', desc: 'Wireframes, high-fidelity Figma designs, prototype review.' },
  { step: '03', title: 'Development', duration: '6–10 weeks', desc: 'Sprint-based build with weekly demos and feedback loops.' },
  { step: '04', title: 'QA & Testing', duration: '1–2 weeks', desc: 'Device testing, TestFlight beta, performance profiling.' },
  { step: '05', title: 'Launch', duration: '1 week', desc: 'App Store submission, release management, and handover.' },
]

const faqItems = [
  {
    q: 'Do you build for iPhone and iPad?',
    a: 'Yes. We build universal apps that adapt to all iOS device sizes — iPhone, iPad, and with minor additions, Apple Watch and Mac via Catalyst.',
  },
  {
    q: 'What iOS version do you support?',
    a: 'We target iOS 16+ by default, which covers ~95% of active devices. We can go back to iOS 15 if your audience requires it.',
  },
  {
    q: 'Will I own the source code?',
    a: 'Yes. 100% of the code, assets, and App Store account belong to you from day one.',
  },
  {
    q: 'Can you work with our existing backend?',
    a: 'Absolutely. We integrate with any REST or GraphQL API. If you don\'t have a backend yet, we can build one alongside the app.',
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'Our minimum project size is $8,000. Most iOS MVPs fall in the $15k–$40k range depending on feature complexity.',
  },
]

const relatedServices = [
  { title: 'Android Development', slug: '/services/android',      icon: '🤖' },
  { title: 'React Native',        slug: '/services/react-native', icon: '⚛️' },
  { title: 'UI/UX Design',        slug: '/services/ui-ux',        icon: '🎨' },
]

export default function ServiceIosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="ios-page">
      <section className="ios-hero">
        <div className="ios-hero-content">
          <span className="section-eyebrow">iOS Development</span>
          <h1>Native iOS apps built<br />to <em>App Store standards</em></h1>
          <p>We build Swift & SwiftUI apps that feel at home on Apple devices — fast, polished, and ready for the App Store.</p>
          <div className="ios-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your iOS Project</Link>
            <Link to="/portfolio" className="btn-ghost">See iOS Work</Link>
          </div>
        </div>
        <div className="ios-hero-panel">
          <div className="ios-snapshot">
            <div className="ios-snapshot-header">Project snapshot</div>
            <div className="ios-snapshot-row"><span>Timeline</span><strong>10–14 weeks</strong></div>
            <div className="ios-snapshot-row"><span>Budget range</span><strong>$15k – $60k</strong></div>
            <div className="ios-snapshot-row"><span>Platform</span><strong>iOS 16+</strong></div>
            <div className="ios-snapshot-row"><span>Language</span><strong>Swift + SwiftUI</strong></div>
            <div className="ios-snapshot-row"><span>Delivery</span><strong>Fixed price or T&M</strong></div>
            <Link to="/contact" className="ios-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="ios-included">
        <div className="ios-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Everything your iOS app needs, <em>in one engagement</em></h2>
          <div className="ios-included-grid">
            {included.map(item => (
              <div key={item.title} className="ios-included-card">
                <div className="ios-included-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-tech">
        <div className="ios-container">
          <span className="section-eyebrow">Tech Stack</span>
          <h2>Modern Apple-first tooling</h2>
          <div className="ios-tech-grid">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="ios-tech-group">
                <h4>{category}</h4>
                <div className="ios-tech-pills">
                  {items.map(t => <span key={t} className="ios-tech-pill">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-process">
        <div className="ios-container">
          <span className="section-eyebrow">Our Process</span>
          <h2>From idea to live app</h2>
          <div className="ios-process-list">
            {processSteps.map(p => (
              <div key={p.step} className="ios-process-item">
                <div className="ios-process-step">{p.step}</div>
                <div className="ios-process-body">
                  <div className="ios-process-meta">
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

      <section className="ios-faq">
        <div className="ios-container">
          <span className="section-eyebrow">FAQ</span>
          <h2>Common questions</h2>
          <div className="ios-faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className={`ios-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="ios-faq-answer"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-related">
        <div className="ios-container">
          <h3>Related Services</h3>
          <div className="ios-related-grid">
            {relatedServices.map(s => (
              <Link key={s.title} to={s.slug} className="ios-related-card">
                <span>{s.icon}</span>
                <p>{s.title}</p>
                <span className="ios-related-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to build your iOS app?"
        subtitle="Let's scope your project. Free 30-minute discovery call, no commitment."
        primaryBtn={{ label: 'Book Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
