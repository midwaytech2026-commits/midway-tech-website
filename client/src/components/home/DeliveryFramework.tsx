import {
  Lightbulb,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import './DeliveryFramework.css'

const steps = [
  {
    num: '01',
    Icon: Lightbulb,
    title: 'Discovery & Scope',
    desc: 'We map your business goals, user flows, technical requirements, and delivery expectations before anything is built.',
  },
  {
    num: '02',
    Icon: ClipboardList,
    title: 'Product Planning',
    desc: 'Feature prioritization, milestone definition, tech stack selection, and sprint structure aligned to your timeline.',
  },
  {
    num: '03',
    Icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Wireframes and high-fidelity Figma designs — reviewed and approved by you before development begins.',
  },
  {
    num: '04',
    Icon: Code2,
    title: 'Development Sprint',
    desc: 'Structured build cycles with regular progress updates, live demos, and milestone-based approvals throughout.',
  },
  {
    num: '05',
    Icon: ShieldCheck,
    title: 'QA & Testing',
    desc: 'Device testing, user flow validation, performance checks, and pre-launch quality review across all target platforms.',
  },
  {
    num: '06',
    Icon: Zap,
    title: 'Launch & Growth',
    desc: 'Deployment support, App Store/Play Store submission assistance, and a clear path for future improvements and scale.',
  },
]

export default function DeliveryFramework() {
  return (
    <section className="delivery-section">
      <div className="delivery-container">
        <p className="section-eyebrow">How We Work</p>
        <h2 className="section-title">What a MidwayTech Product Sprint Looks Like</h2>
        <p className="section-sub">Every project follows a structured delivery process designed to reduce risk, improve clarity, and accelerate launch readiness.</p>

        <div className="delivery-grid">
          {steps.map(step => {
            const Icon = step.Icon
            return (
              <div key={step.num} className="delivery-card">
                <div className="delivery-card-top">
                  <span className="delivery-num">{step.num}</span>
                  <div className="delivery-icon-wrap">
                    <Icon className="delivery-icon" aria-hidden="true" />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
