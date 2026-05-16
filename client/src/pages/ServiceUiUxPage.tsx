import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceDetailPage.css'

const included = [
  { icon: '🔍', title: 'User Research & Discovery', desc: 'User interviews, competitor analysis, and journey mapping to ground every design decision in real behaviour.' },
  { icon: '🗺️', title: 'Wireframes & User Flows',   desc: 'Low-fidelity wireframes covering every key user journey — before a single colour is chosen.' },
  { icon: '🎨', title: 'High-Fidelity Figma Designs', desc: 'Pixel-perfect screens for every state: empty, loading, error, and success.' },
  { icon: '⚡', title: 'Interactive Prototype',      desc: 'Clickable Figma prototype for stakeholder review, investor demos, and early user testing.' },
  { icon: '🔠', title: 'Design System',              desc: 'Reusable component library with tokens, typography scale, colour palette, and spacing rules.' },
  { icon: '🤝', title: 'Developer Handoff',          desc: 'Figma Dev Mode specs with precise measurements, exportable assets, and code-ready annotations.' },
  { icon: '🔄', title: '2 Revision Rounds',          desc: 'Two full rounds of design revisions are included before final delivery — no hidden revision fees.' },
]

const techStack = {
  'Design':        ['Figma', 'FigJam', 'Principle', 'Lottie'],
  'Research':      ['Maze', 'Hotjar', 'Google Forms', 'UserTesting'],
  'Collaboration': ['Notion', 'Linear', 'Loom', 'Slack'],
  'Handoff':       ['Figma Dev Mode', 'Zeplin', 'Storybook'],
}

const processSteps = [
  { step: '01', title: 'Research & Discovery', duration: '1 week',   desc: 'Stakeholder interviews, user research, and competitor analysis to define design direction.' },
  { step: '02', title: 'Wireframes',           duration: '1 week',   desc: 'Low-fidelity wireframes for all key screens, reviewed and approved before moving to visuals.' },
  { step: '03', title: 'Visual Design',        duration: '2–3 weeks', desc: 'High-fidelity Figma screens with your brand identity, colour system, and typography.' },
  { step: '04', title: 'Prototype & Review',   duration: '1 week',   desc: 'Interactive Figma prototype, two rounds of revisions, and stakeholder sign-off.' },
  { step: '05', title: 'Handoff',              duration: '1 week',   desc: 'Developer-ready Figma file with specs, assets, and a design system ready for engineering.' },
]

const faqItems = [
  {
    q: 'Do I need to decide the tech stack before starting design?',
    a: "No. Design can start independently of tech decisions. However, knowing the target platform (iOS, Android, or web) helps us apply the right platform conventions — Apple Human Interface Guidelines vs Google Material Design.",
  },
  {
    q: 'What exactly do I receive at the end?',
    a: 'You receive: a complete Figma project file (all screens, components, design tokens), an interactive prototype link, a design system document, and a developer handoff export with specs and assets.',
  },
  {
    q: 'How many revision rounds are included?',
    a: 'Two full revision rounds are included in the engagement. Additional revision rounds can be added at a flat rate. In practice, most projects finish well within the two included rounds.',
  },
  {
    q: 'Can you design for both iOS and Android guidelines simultaneously?',
    a: "Yes. We create platform-aware designs — the same app adapts to Apple's Human Interface Guidelines on iOS and Material Design on Android. Navigation patterns, typography, and component sizing all follow the right platform rules.",
  },
  {
    q: 'Do you conduct user testing?',
    a: 'We use Maze to run unmoderated usability tests on prototypes at no additional cost for simple tests. For moderated testing with recruited participants, we can arrange this as a separate engagement.',
  },
]

const relatedServices = [
  { title: 'MVP Development',     slug: '/services/mvp',          icon: '🚀' },
  { title: 'iOS Development',     slug: '/services/ios',          icon: '📱' },
  { title: 'Android Development', slug: '/services/android',      icon: '🤖' },
]

export default function ServiceUiUxPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="svc-page">
      <section className="svc-hero">
        <div className="svc-hero-content">
          <span className="section-eyebrow">UI/UX Design</span>
          <h1>Designs that convert users<br />into <em>loyal customers</em></h1>
          <p>We create research-backed mobile app designs that feel intuitive, look premium, and give your development team everything they need to build with confidence.</p>
          <div className="svc-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your Design Project</Link>
            <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
          </div>
        </div>
        <div className="svc-hero-panel">
          <div className="svc-snapshot">
            <div className="svc-snapshot-header">Project snapshot</div>
            <div className="svc-snapshot-row"><span>Timeline</span><strong>2–6 weeks</strong></div>
            <div className="svc-snapshot-row"><span>Budget range</span><strong>$5k – $25k</strong></div>
            <div className="svc-snapshot-row"><span>Deliverable</span><strong>Figma + system</strong></div>
            <div className="svc-snapshot-row"><span>Handoff</span><strong>Dev-ready specs</strong></div>
            <div className="svc-snapshot-row"><span>Delivery</span><strong>Fixed price</strong></div>
            <Link to="/contact" className="svc-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="svc-included">
        <div className="svc-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Research to handoff, <em>all in one engagement</em></h2>
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
          <span className="section-eyebrow">Tools</span>
          <h2>Industry-standard design tooling</h2>
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
          <h2>From blank canvas to dev-ready designs</h2>
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
        title="Ready to start designing?"
        subtitle="Share your idea — we'll scope a design engagement and get back within 24 hours."
        primaryBtn={{ label: 'Book Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
