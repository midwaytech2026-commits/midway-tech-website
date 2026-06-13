import {
  Search,
  Route,
  LayoutDashboard,
  Code2,
  Rocket,
} from 'lucide-react'
import './Process.css'

const steps = [
  { Icon: Search,          title: 'Discovery call',      desc: 'Free 30-min call to understand your idea, goals, and timeline. No pitch, just listening.',                              active: true  },
  { Icon: Route,           title: 'Scoping & proposal',  desc: 'Detailed breakdown of features, tech stack, timeline, and a fixed-price quote within 48 hours.',                         active: false },
  { Icon: LayoutDashboard, title: 'Design sprint',       desc: 'Wireframes and UI design in 2 weeks. You approve before a single line of code is written.',                             active: false },
  { Icon: Code2,           title: 'Build & iterate',     desc: '2-week sprints with weekly demos. You test on your device throughout the build.',                                        active: false },
  { Icon: Rocket,          title: 'Launch & support',    desc: 'App Store / Play Store submission handled by us. 60-day post-launch support included.',                                  active: false },
]

export default function Process() {
  return (
    <section id="process" className="process-section">
      <p className="section-eyebrow">How it works</p>
      <h2 className="section-title">From idea to launch<br />in 5 clear steps.</h2>
      <p className="section-sub">No confusion, no bottlenecks. You always know exactly what's happening and what comes next.</p>

      <div className="process-steps">
        {steps.map((step, i) => {
          const Icon = step.Icon
          return (
            <div key={i} className="step">
              <div className={`step-num ${step.active ? 'active' : 'inactive'}`}>
                <Icon className="step-icon" aria-hidden="true" />
              </div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
