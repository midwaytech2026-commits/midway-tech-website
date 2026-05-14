import './Process.css'

const steps = [
  { num: '01', title: 'Discovery call', desc: 'Free 30-min call to understand your idea, goals, and timeline. No pitch, just listening.', active: true },
  { num: '02', title: 'Scoping & proposal', desc: 'Detailed breakdown of features, tech stack, timeline, and a fixed-price quote within 48 hours.', active: false },
  { num: '03', title: 'Design sprint', desc: 'Wireframes and UI design in 2 weeks. You approve before a single line of code is written.', active: false },
  { num: '04', title: 'Build & iterate', desc: '2-week sprints with weekly demos. You test on your device throughout the build.', active: false },
  { num: '05', title: 'Launch & support', desc: 'App Store / Play Store submission handled by us. 60-day post-launch support included.', active: false },
]

export default function Process() {
  return (
    <section id="process" className="process-section">
      <p className="section-eyebrow">How it works</p>
      <h2 className="section-title">From idea to App Store<br />in 5 clear steps.</h2>
      <p className="section-sub">No confusion, no bottlenecks. You always know exactly what's happening and what comes next.</p>

      <div className="process-steps">
        {steps.map(step => (
          <div key={step.num} className="step">
            <div className={`step-num ${step.active ? 'active' : 'inactive'}`}>{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
