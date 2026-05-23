import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'You tell us what you\'re building or where you\'re trying to grow. We ask the right questions. No sales pressure — just a genuine conversation about your business.',
    note: 'Free · No obligation',
    active: true,
  },
  {
    num: '02',
    title: 'Strategy & Roadmap',
    desc: 'We map your project: the right services, the right stages, an honest timeline, and a clear budget. You review everything before we move forward.',
    note: '2–4 business days',
    active: false,
  },
  {
    num: '03',
    title: 'Build, Launch & Grow',
    desc: 'Our team gets to work — developers, marketers, and designers working from the same brief. You get daily updates across everything, not just the parts you asked about.',
    note: 'Daily updates throughout',
    active: false,
  },
  {
    num: '04',
    title: 'Ongoing Partnership',
    desc: "We don't disappear after launch or after a campaign ends. We track results, flag what's working, and recommend what to do next.",
    note: 'Post-launch support included',
    active: false,
  },
]

export default function Process() {
  return (
    <section id="process" className="process-section">
      <p className="section-eyebrow">How We Work</p>
      <h2 className="section-title">We listen before we build —<br />or market. Every time.</h2>
      <p className="section-sub">A clear, collaborative process with no mystery and no surprises — for development, marketing, or both.</p>

      <div className="process-steps">
        {steps.map(step => (
          <div key={step.num} className="step">
            <div className={`step-num ${step.active ? 'active' : 'inactive'}`}>{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
            <div className="step-note">{step.note}</div>
          </div>
        ))}
      </div>

      <div className="process-cta">
        <a href="/contact" className="btn-primary">
          Book a Free Discovery Call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
