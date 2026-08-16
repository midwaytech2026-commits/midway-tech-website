import { Link } from 'react-router-dom'
import { Clock3, UserCheck, Sparkles, Target } from 'lucide-react'
import QuoteForm from '../components/common/QuoteForm'
import './GetQuotePage.css'

const whyItems = [
  { Icon: Clock3, title: 'Quick Response — Within 24 Hours', desc: 'We read every brief personally and respond with detail, not a canned reply.' },
  { Icon: UserCheck, title: 'Expert Consultation Included', desc: 'Our senior team reviews your project — not a salesperson reading from a script.' },
  { Icon: Sparkles, title: 'Completely Free — No Obligation', desc: 'Getting a quote doesn’t commit you to anything. We want you to be sure before you sign.' },
  { Icon: Target, title: 'Custom Proposal for Your Project', desc: 'Every quote is scoped to your specific requirements — no template pricing that doesn’t fit.' },
]

export default function GetQuotePage() {
  return (
    <div className="gq-page">
      <section className="gq-hero">
        <div className="gq-hero-inner">
          <span className="section-eyebrow">Get a Free Quote</span>
          <h1>Get Your Free Project Quote</h1>
          <p>Tell us what you&apos;re building. Within 24 hours you&apos;ll have a detailed, honest quote — what we&apos;d build, how long it would take, and what it would cost. No vague estimates, no surprise additions.</p>
        </div>
      </section>

      <section className="gq-body">
        <div className="gq-body-inner">
          <div className="gq-why">
            <p className="gq-why-eyebrow">Why Get a Quote From Us?</p>
            <h2>A Fixed-Price Quote. Within 24 Hours.</h2>
            <p className="gq-why-intro">No obligation. No sales call required. We read your brief, ask any clarifying questions over email, and send you a detailed scope with pricing attached.</p>
            <div className="gq-why-list">
              {whyItems.map(item => (
                <div key={item.title} className="gq-why-item">
                  <div className="gq-why-icon"><item.Icon aria-hidden="true" /></div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="gq-why-note">
              Prefer to talk first? <Link to="/contact">Contact us</Link> and we&apos;ll point you in the right direction.
            </p>
          </div>

          <QuoteForm heading="Tell Us About Your Project" submitLabel="Request My Free Quote" />
        </div>
      </section>
    </div>
  )
}
