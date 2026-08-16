import { Link } from 'react-router-dom'
import './WhyUs.css'

const pillars = [
  { num: '01', accent: 'orange', title: 'Grow', desc: 'Marketing that generates revenue, not impressions' },
  { num: '02', accent: 'green', title: 'Build', desc: 'Technology engineered for your business model' },
  { num: '03', accent: 'orange', title: 'Automate', desc: 'AI systems that remove friction and multiply output' },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <div className="why-inner">
        <p className="why-eyebrow">Why MidwayTech</p>
        <p className="why-quote">
          &ldquo;Most businesses waste months coordinating between a marketing agency, a development agency,
          and an AI consultant. We built MidwayTech so you never have to.&rdquo;
        </p>
        <p className="why-body">
          One team. One relationship. One invoice. Marketing, technology, and AI — all connected toward the
          same goal: growing your business.
        </p>
        <Link to="/get-quote" className="btn-primary why-cta">See How It Works →</Link>

        <div className="why-panel">
          {pillars.map(p => (
            <div key={p.num} className="why-card">
              <span className={`why-card-num why-card-num--${p.accent}`}>{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
