import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Palette, Zap, Smartphone, Search, Database, Shield,
  BarChart2, Clock, ShoppingCart, Rocket, Globe
} from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceIosPage.css'

const included = [
  { Icon: Palette,    title: 'UI/UX Design',          desc: "Figma designs built for conversion — not just aesthetics. Every layout decision made with your visitor's next action in mind." },
  { Icon: Zap,        title: 'Performance-First Build', desc: 'Fast load times, clean code, and Core Web Vitals scores that help — not hurt — your SEO.' },
  { Icon: Smartphone, title: 'Fully Responsive',       desc: 'Mobile-first design that works perfectly on every device and screen size your visitors actually use.' },
  { Icon: Search,     title: 'SEO-Ready Structure',    desc: 'Clean URL structure, proper heading hierarchy, schema markup, and sitemap — built in from day one, not added after.' },
  { Icon: Database,   title: 'CMS Integration',        desc: 'Editable content via the CMS of your choice — you update your own site without needing a developer every time.' },
  { Icon: Shield,     title: 'Security & Hosting',     desc: 'SSL, secure hosting setup, and basic security hardening included. Your site is safe and live from day one.' },
  { Icon: BarChart2,  title: 'Analytics Setup',        desc: 'Google Analytics 4, Search Console, and conversion tracking configured so you know what\'s working from launch day.' },
  { Icon: Clock,      title: 'Post-Launch Support',    desc: '30-day support window after launch. Any bugs or issues resolved at no extra cost.' },
]

const processSteps = [
  { step: '01', title: 'Discovery & Strategy', duration: '3–5 days', desc: 'We map your goals, your audience, your competitors, and the specific pages your business needs to convert visitors.' },
  { step: '02', title: 'Design',               duration: '1–2 weeks', desc: 'Wireframes first, then high-fidelity Figma designs. You approve before a single line of code is written.' },
  { step: '03', title: 'Development',          duration: '2–4 weeks', desc: 'Clean, performant code. Weekly check-ins. You see the build progress in a staging environment throughout.' },
  { step: '04', title: 'Review & Launch',      duration: '3–5 days', desc: 'Final review, QA across devices, analytics setup, and go-live. We handle the technical side of launch.' },
  { step: '05', title: 'Post-Launch',          duration: '30 days',  desc: 'Bug support included. If you pair with our SEO retainer, we also track rankings from day one.' },
]

const faqItems = [
  {
    q: 'How long does a website take to build?',
    a: 'A brochure site or landing page: 3–5 weeks. A mid-size business site: 5–8 weeks. A complex web app or platform: 10–20+ weeks. You get a specific timeline in your proposal.',
  },
  {
    q: 'What platforms do you build on?',
    a: "We build on React, Next.js, and other modern frameworks for performance-critical sites and web apps. For content-led sites we also work with WordPress, Webflow, and headless CMS setups.",
  },
  {
    q: 'Do you also do the copywriting?',
    a: "We can provide copy direction and structure. For full copywriting, we work with trusted writers or can recommend the right person for your brand voice.",
  },
  {
    q: 'Can you revamp an existing site without rebuilding it?',
    a: "Yes — and often that's the right call. We will tell you honestly whether a revamp or a rebuild is the better use of your budget after seeing what you have.",
  },
  {
    q: 'Does the website include SEO?',
    a: "Every site we build has a clean technical SEO foundation. For ongoing SEO — rankings, content, links — that is a separate retainer engagement. We can run both together.",
  },
]

const relatedServices = [
  { title: 'SEO',             slug: '/services/seo',       Icon: Search },
  { title: 'Ecommerce Dev',   slug: '/services/ecommerce', Icon: ShoppingCart },
  { title: 'MVP Development', slug: '/services/mvp',       Icon: Rocket },
]

export default function ServiceWebDevPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="ios-page">
      <section className="ios-hero">
        <div className="ios-hero-content">
          <span className="section-eyebrow">Web Development</span>
          <h1>Fast, clean websites built<br /><em>to convert visitors into customers</em></h1>
          <p>We build websites that perform — technically and commercially. Every design decision traced back to your business goals.</p>
          <div className="ios-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your Web Project</Link>
            <Link to="/services" className="btn-ghost">See All Services</Link>
          </div>
        </div>
        <div className="ios-hero-panel">
          <div className="ios-snapshot">
            <div className="ios-snapshot-header">Project Snapshot</div>
            <div className="ios-snapshot-row"><span>Simple site</span><strong>3–5 weeks</strong></div>
            <div className="ios-snapshot-row"><span>Business site</span><strong>5–8 weeks</strong></div>
            <div className="ios-snapshot-row"><span>Starting from</span><strong>$2,500 / £2,000</strong></div>
            <div className="ios-snapshot-row"><span>Payment</span><strong>Milestone-based</strong></div>
            <div className="ios-snapshot-row"><span>Markets</span><strong>EU · US · UK</strong></div>
            <Link to="/contact" className="ios-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="ios-included">
        <div className="ios-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Everything your website needs, <em>built right the first time</em></h2>
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
          <h2>From brief to live site</h2>
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
        title="Ready to build a website that actually works for your business?"
        subtitle="Free discovery call. We will scope your project honestly and tell you what it will cost — no padding, no guessing."
        primaryBtn={{ label: 'Book a Free Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
