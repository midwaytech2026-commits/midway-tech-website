import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceDetailPage.css'

const included = [
  { icon: '🔭', title: 'Scope Workshop',            desc: 'Half-day session to define features, cut scope to the essential, and align on success metrics.' },
  { icon: '🎨', title: 'UI/UX Design Sprint',       desc: 'Wireframes, high-fidelity screens, and a clickable prototype — completed in 2 weeks.' },
  { icon: '⚡', title: 'Core Feature Development',   desc: 'Lean, focused build with only the features your MVP hypothesis needs to validate.' },
  { icon: '🔗', title: 'Backend API',               desc: 'Node.js REST API with authentication, database, and core endpoints — built to scale.' },
  { icon: '🚀', title: 'App Store / Play Store Launch', desc: 'Full submission process handled by our team — screenshots, metadata, review management.' },
  { icon: '📄', title: 'Investor-Ready Handover',   desc: 'Source code, architecture documentation, and a project summary slide deck for your investors.' },
  { icon: '🛡', title: '60-Day Post-Launch Support', desc: 'Bug fixes and monitoring for 60 days after launch — because most issues appear in week one.' },
]

const techStack = {
  'Mobile':         ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  'Backend':        ['Node.js', 'Express', 'REST API', 'JWT Auth'],
  'Database':       ['PostgreSQL', 'MongoDB', 'Redis'],
  'Infrastructure': ['AWS', 'Firebase', 'Supabase', 'Render'],
}

const processSteps = [
  { step: '01', title: 'Scope Workshop',   duration: '1 week',  desc: 'We facilitate a structured session to define your MVP feature set, user personas, and success KPIs.' },
  { step: '02', title: 'Design Sprint',    duration: '2 weeks', desc: 'Wireframes, high-fidelity Figma designs, and a prototype you can share with early users.' },
  { step: '03', title: 'Development',      duration: '4–6 weeks', desc: '2-week sprints. You test on your device every Friday. Feedback goes in the following sprint.' },
  { step: '04', title: 'QA & Testing',     duration: '1 week',  desc: 'Functional testing, crash reporting setup, and TestFlight / internal testing track distribution.' },
  { step: '05', title: 'Launch & Handover', duration: '1 week', desc: 'App Store / Play Store submission, source code handover, and investor documentation delivery.' },
]

const faqItems = [
  {
    q: 'What exactly counts as an MVP?',
    a: "An MVP (Minimum Viable Product) is the smallest version of your app that lets real users accomplish the core task. It's NOT a rough prototype — it's a fully functional, App Store–ready product with only the essential features. No nice-to-haves, no admin panels, no version 2 features.",
  },
  {
    q: 'How do you decide what to include and what to cut?',
    a: 'In the Scope Workshop, we map every feature request to a user problem and a business hypothesis. If a feature can\'t be tied to a testable hypothesis, it goes to the backlog. This keeps the build lean and the timeline on track.',
  },
  {
    q: 'Can you build for both iOS and Android?',
    a: 'Yes — we recommend React Native or Flutter for MVPs that need both platforms, as they share 80–90% of the codebase. For platform-specific MVPs, we build native (Swift or Kotlin) for best performance.',
  },
  {
    q: 'Do I get the source code?',
    a: 'Yes. 100% of the code, repositories, and documentation are transferred to you on launch day. No licensing fees, no lock-in.',
  },
  {
    q: 'What happens after the MVP is live?',
    a: 'You get 60 days of free bug-fix support. After that, we offer monthly retainer packages for feature development, or you can take the code to any team you choose — you own it entirely.',
  },
]

const relatedServices = [
  { title: 'iOS Development',     slug: '/services/ios',          icon: '📱' },
  { title: 'Android Development', slug: '/services/android',      icon: '🤖' },
  { title: 'UI/UX Design',        slug: '/services/ui-ux',        icon: '🎨' },
]

export default function ServiceMvpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="svc-page">
      <section className="svc-hero">
        <div className="svc-hero-content">
          <span className="section-eyebrow">MVP Development</span>
          <h1>From idea to App Store<br />in <em>8–12 weeks</em></h1>
          <p>We help startups validate their product hypothesis with a lean, investor-ready MVP — built fast, built right, built to grow.</p>
          <div className="svc-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your MVP</Link>
            <Link to="/portfolio" className="btn-ghost">See MVPs We've Built</Link>
          </div>
        </div>
        <div className="svc-hero-panel">
          <div className="svc-snapshot">
            <div className="svc-snapshot-header">Project snapshot</div>
            <div className="svc-snapshot-row"><span>Timeline</span><strong>8–12 weeks</strong></div>
            <div className="svc-snapshot-row"><span>Budget range</span><strong>$15k – $40k</strong></div>
            <div className="svc-snapshot-row"><span>Platform</span><strong>iOS or Android</strong></div>
            <div className="svc-snapshot-row"><span>Deliverable</span><strong>Live app + docs</strong></div>
            <div className="svc-snapshot-row"><span>Delivery</span><strong>Fixed price</strong></div>
            <Link to="/contact" className="svc-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="svc-included">
        <div className="svc-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Everything to go from zero to <em>live product</em></h2>
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
          <h2>Chosen for speed and scalability</h2>
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
          <h2>Zero to live in 5 clear steps</h2>
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
        title="Ready to validate your idea?"
        subtitle="Book a free discovery call. We'll tell you honestly if your scope fits 8 weeks or needs 12."
        primaryBtn={{ label: 'Book Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
