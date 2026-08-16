import { Link } from 'react-router-dom'
import { Clock3, UserCheck, Sparkles, Target } from 'lucide-react'
import QuoteForm from '../components/common/QuoteForm'
import './GetQuotePage.css'

const whyItems = [
  { Icon: Clock3, title: 'Quick Response', desc: 'We read every brief personally and reply within 24 hours.' },
  { Icon: UserCheck, title: 'Expert Review', desc: 'A senior team member reviews your project — not a generic intake form.' },
  { Icon: Sparkles, title: 'No Obligation', desc: 'Getting a quote doesn’t commit you to anything.' },
  { Icon: Target, title: 'Tailored Scope', desc: 'Every quote is scoped to your specific project — no template pricing.' },
]

export default function GetQuotePage() {
  return (
    <div className="gq-page">
      <section className="gq-hero">
        <div className="gq-hero-inner">
          <span className="section-eyebrow">Get a Free Quote</span>
          <h1>Tell Us What You&apos;re Building</h1>
          <p>Share your goals, timeline, and budget range. We&apos;ll review the details and suggest the clearest next step.</p>
          <p className="gq-hero-microcopy">Response within 24 hours. No obligation.</p>
        </div>
      </section>

      <section className="gq-body">
        <div className="gq-body-inner">
          <div className="gq-why">
            <h3>Why Get a Quote From Us?</h3>
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
