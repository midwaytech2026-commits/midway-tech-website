import './WhyUs.css'

const reasons = [
  {
    num: '01',
    title: 'Fixed-scope, fixed-price projects',
    desc: 'No surprise invoices. We scope your project in detail upfront, agree on a price, and stick to it. Every time.',
  },
  {
    num: '02',
    title: 'You own everything, always',
    desc: 'Full source code, IP, and asset ownership transferred to you on day one of payment. No lock-in, ever.',
  },
  {
    num: '03',
    title: 'Weekly demos, not monthly surprises',
    desc: "Every Friday you see exactly what's been built. Async Loom updates + a live demo call — your choice.",
  },
  {
    num: '04',
    title: 'Timezone-friendly communication',
    desc: 'Dedicated Slack channel with 4-hour response SLA. We overlap with US/UK/AU business hours every day.',
  },
]

const metrics = [
  { label: 'Average delivery time', value: '12 weeks', type: 'accent' },
  { label: 'On-time delivery rate', value: '94%', type: '' },
  { label: 'Client retention rate', value: '87%', type: 'accent2' },
  { label: 'Avg. cost vs US agency', value: '60% less', type: 'accent' },
  { label: 'Clutch rating', value: '4.9 ★', type: '' },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <p className="why-eyebrow">Why Midway Tech</p>
      <h2 className="why-title">Built for startups who<br />can't afford to get it wrong.</h2>
      <p className="why-sub">We know what's at stake when you're spending your runway on an app. Here's why founders trust us.</p>

      <div className="why-grid">
        <div className="why-list">
          {reasons.map(r => (
            <div key={r.num} className="why-item">
              <div className="why-num">{r.num}</div>
              <div className="why-content">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-visual">
          {metrics.map(m => (
            <div key={m.label} className="metric-row">
              <span className="metric-label">{m.label}</span>
              <span className={`metric-val ${m.type}`}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
