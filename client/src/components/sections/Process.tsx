import { Link } from 'react-router-dom'
import {
  PhoneCall,
  Search,
  Map,
  Hammer,
  TrendingUp,
} from 'lucide-react'
import './Process.css'

const steps = [
  { Icon: PhoneCall,  num: '01', title: 'Strategy Call',  desc: '30 min. No pitch. Honest advice.' },
  { Icon: Search,     num: '02', title: 'Growth Audit',   desc: 'We audit your marketing, tech & ops.' },
  { Icon: Map,        num: '03', title: 'Custom Roadmap', desc: '90-day plan scoped to your goals.' },
  { Icon: Hammer,     num: '04', title: 'Execution',      desc: 'Build, run, optimise. Weekly updates.' },
  { Icon: TrendingUp, num: '05', title: 'Scale',          desc: 'Double down on what works.' },
]

export default function Process() {
  return (
    <section id="process" className="proc-section">
      <p className="proc-eyebrow">Our Process</p>
      <h2 className="proc-title">From First Call to Full Execution.</h2>

      <div className="proc-steps">
        {steps.map(step => {
          const Icon = step.Icon
          return (
            <div key={step.num} className="proc-step">
              <div className="proc-step-num">
                <Icon className="proc-step-icon" aria-hidden="true" />
              </div>
              <div className="proc-step-label">{step.num}</div>
              <div className="proc-step-title">{step.title}</div>
              <div className="proc-step-desc">{step.desc}</div>
            </div>
          )
        })}
      </div>

      <Link to="/get-quote" className="btn-primary process-cta">
        Start with a Free Strategy Call →
      </Link>
    </section>
  )
}
