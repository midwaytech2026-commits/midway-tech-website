import { TrendingUp, Code2, Bot } from 'lucide-react'
import './WhyUs.css'

const pillars = [
  {
    num: '01',
    title: 'Grow',
    Icon: TrendingUp,
    desc: 'Marketing systems that generate revenue, not impressions.',
  },
  {
    num: '02',
    title: 'Build',
    Icon: Code2,
    desc: 'Technology engineered for your business model.',
  },
  {
    num: '03',
    title: 'Automate',
    Icon: Bot,
    desc: 'AI systems that remove friction and multiply output.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <p className="why-eyebrow">Why MidwayTech</p>
      <blockquote className="why-quote">
        Most businesses waste months coordinating between a marketing agency, a development agency,
        and an AI consultant. We built MidwayTech so you never have to.
      </blockquote>
      <p className="why-sub">
        One team. One relationship. One invoice. Marketing, technology, and AI — all connected toward
        the same goal: growing your business.
      </p>

      <div className="why-grid">
        {pillars.map(p => {
          const Icon = p.Icon
          return (
            <div key={p.num} className="why-card">
              <div className="why-card-top">
                <span className="why-card-num">{p.num}</span>
                <span className="why-card-icon-wrap"><Icon className="why-card-icon" aria-hidden="true" /></span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
