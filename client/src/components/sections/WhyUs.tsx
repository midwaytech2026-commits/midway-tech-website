import './WhyUs.css'

const problems = [
  {
    num: '✗',
    title: 'They work for their invoice',
    desc: 'Services get added. Budgets inflate. You pay for what they need, not what you need.',
    type: 'problem',
  },
  {
    num: '✗',
    title: 'They disappear mid-project',
    desc: "Weekly updates become monthly ones. Emails go unanswered. You're left chasing.",
    type: 'problem',
  },
  {
    num: '✗',
    title: 'They separate dev and marketing',
    desc: 'One agency builds it. Another markets it. Nobody takes responsibility for the full result.',
    type: 'problem',
  },
  {
    num: '✗',
    title: "They don't understand your business",
    desc: "They know their tools. They don't know your business. There's a difference — and it costs you.",
    type: 'problem',
  },
]

const solutions = [
  {
    num: '✓',
    title: 'Development and marketing in one place',
    desc: 'Your product and your growth strategy built together — not bolted together after the fact.',
    type: 'solution',
  },
  {
    num: '✓',
    title: 'Budget protected from day one',
    desc: "We map exactly what's needed before anything starts. No padding. No surprises.",
    type: 'solution',
  },
  {
    num: '✓',
    title: 'You hear from us every day',
    desc: 'Daily updates. Real insights. Not just status reports — actual strategic thinking across both build and growth.',
    type: 'solution',
  },
  {
    num: '✓',
    title: 'Founded by a marketer, not just a builder',
    desc: 'Our founder spent 7 years inside real businesses understanding what actually drives growth. That perspective lives in every project.',
    type: 'solution',
  },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <p className="why-eyebrow">Why Midway Tech</p>
      <h2 className="why-title">Build it right. Grow it right.<br />Both under one roof.</h2>
      <p className="why-sub">Most businesses hire one agency to build and another to market. The result? No one owns the full picture. No one is accountable for real growth.</p>

      <div className="why-grid">
        <div className="why-col">
          <div className="why-col-label why-col-label--problem">Why most agencies fail you</div>
          {problems.map(r => (
            <div key={r.title} className="why-item why-item--problem">
              <div className="why-num why-num--problem">{r.num}</div>
              <div className="why-content">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-col">
          <div className="why-col-label why-col-label--solution">The Midway Tech difference</div>
          {solutions.map(r => (
            <div key={r.title} className="why-item why-item--solution">
              <div className="why-num why-num--solution">{r.num}</div>
              <div className="why-content">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
