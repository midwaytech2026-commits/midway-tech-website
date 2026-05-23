import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Microscope, KeyRound, FileText, PenTool, Link2, BarChart2,
  Target, TrendingUp, Globe
} from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceIosPage.css'

const included = [
  { Icon: Microscope, title: 'Technical SEO Audit',  desc: 'Full crawl of your site — speed, structure, indexation, and every technical factor that holds rankings back.' },
  { Icon: KeyRound,   title: 'Keyword Research',     desc: 'Data-led keyword strategy targeting terms your actual buyers search for — not just high-volume vanity terms.' },
  { Icon: FileText,   title: 'On-Page Optimisation', desc: 'Every page optimised for the right terms: titles, meta, headings, content structure, internal linking.' },
  { Icon: PenTool,    title: 'Content Strategy',     desc: 'A content plan built around what your buyers are searching for at every stage of the decision process.' },
  { Icon: Link2,      title: 'Link Building',        desc: 'Genuine editorial links from relevant publications — no spam, no shortcuts, no risks to your domain.' },
  { Icon: BarChart2,  title: 'Monthly Reporting',    desc: 'Clear monthly reports showing rankings, traffic, conversions, and what we are doing next — and why.' },
]

const processSteps = [
  { step: '01', title: 'Discovery & Audit',      duration: '1–2 weeks', desc: 'Full technical audit, keyword landscape analysis, competitor gap review, and goal alignment.' },
  { step: '02', title: 'Strategy & Roadmap',     duration: '1 week',    desc: 'We present a clear plan: priority pages, target keywords, content calendar, and expected timeline to results.' },
  { step: '03', title: 'On-Page & Technical',    duration: 'Month 1',   desc: 'All technical issues addressed. Core pages optimised. Foundation for rankings established.' },
  { step: '04', title: 'Content & Links',        duration: 'Ongoing',   desc: 'Regular content publication and link acquisition. Rankings compound over time as authority builds.' },
  { step: '05', title: 'Review & Scale',         duration: 'Monthly',   desc: "Monthly review of what's ranking, what's converting, and where to focus next to maximise ROI." },
]

const faqItems = [
  {
    q: 'How long before SEO shows results?',
    a: 'Honestly: 3–6 months before meaningful traffic growth. Month 1–2 is technical fixes and content. Month 3+ is when rankings start to move. We set realistic expectations upfront — not optimistic ones designed to win your business.',
  },
  {
    q: 'Do you work on existing sites or only new builds?',
    a: "Both. We work on existing sites regardless of their CMS or platform. If you're building a new site with us, SEO is built in from the start — not bolted on after.",
  },
  {
    q: 'Can you work alongside our current developer or agency?',
    a: 'Yes. We work with your existing team and provide clear technical recommendations they can implement. Or we implement directly if you prefer.',
  },
  {
    q: 'What makes your SEO different from other agencies?',
    a: "We treat SEO as a business strategy, not a checklist. Because we also handle development and understand your product, our content and technical recommendations are always grounded in what your business actually does — not generic best practice.",
  },
  {
    q: 'Do you guarantee rankings?',
    a: "No. Anyone who does is lying. What we guarantee: honest reporting, real effort, and a clear strategy based on what actually works in 2025. We track rankings, traffic, and conversions — not vanity metrics.",
  },
]

const relatedServices = [
  { title: 'PPC & Paid Advertising', slug: '/services',             Icon: Target },
  { title: 'Content Marketing',      slug: '/services',             Icon: PenTool },
  { title: 'Web Development',        slug: '/services/web-development', Icon: Globe },
]

export default function ServiceSEOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="ios-page">
      <section className="ios-hero">
        <div className="ios-hero-content">
          <span className="section-eyebrow">SEO Services</span>
          <h1>Organic visibility that<br /><em>compounds month after month</em></h1>
          <p>Traffic that converts — not just visits. We build SEO strategies grounded in how your business actually works, not generic best practice.</p>
          <div className="ios-hero-actions">
            <Link to="/contact" className="btn-primary">Book a Free SEO Audit</Link>
            <Link to="/services" className="btn-ghost">See All Services</Link>
          </div>
        </div>
        <div className="ios-hero-panel">
          <div className="ios-snapshot">
            <div className="ios-snapshot-header">Engagement Snapshot</div>
            <div className="ios-snapshot-row"><span>Results timeline</span><strong>3–6 months</strong></div>
            <div className="ios-snapshot-row"><span>Retainer from</span><strong>$1,200/month</strong></div>
            <div className="ios-snapshot-row"><span>Contract</span><strong>Monthly, no lock-in</strong></div>
            <div className="ios-snapshot-row"><span>Reporting</span><strong>Monthly, honest</strong></div>
            <div className="ios-snapshot-row"><span>Markets</span><strong>EU · US · UK</strong></div>
            <Link to="/contact" className="ios-snapshot-cta">Get a Free Audit →</Link>
          </div>
        </div>
      </section>

      <section className="ios-included">
        <div className="ios-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>SEO that actually moves the <em>needle for your business</em></h2>
          <div className="ios-included-grid">
            {included.map(({ Icon, title, desc }) => (
              <div key={title} className="ios-included-card">
                <div className="ios-included-icon-wrap"><Icon size={20} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-process">
        <div className="ios-container">
          <span className="section-eyebrow">Our Process</span>
          <h2>How we build rankings that last</h2>
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
            {relatedServices.map(({ Icon, title, slug }) => (
              <Link key={title} to={slug} className="ios-related-card">
                <Icon size={18} strokeWidth={1.5} />
                <p>{title}</p>
                <span className="ios-related-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to grow your organic traffic?"
        subtitle="Book a free discovery call. We will audit your current SEO and tell you honestly what the opportunity looks like."
        primaryBtn={{ label: 'Book a Free Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
