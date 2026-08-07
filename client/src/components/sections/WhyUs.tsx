import { TrendingUp, Code2, Bot } from 'lucide-react'
import './WhyUs.css'

const pillars = [
  {
    num: '01',
    title: 'Grow',
    Icon: TrendingUp,
    desc: 'Marketing systems focused on revenue, visibility, and qualified demand — not just impressions.',
    chips: ['Demand', 'Leads', 'Revenue'],
  },
  {
    num: '02',
    title: 'Build',
    Icon: Code2,
    desc: 'Websites, apps, platforms, and backend systems engineered around your business model.',
    chips: ['Web', 'Apps', 'Systems'],
  },
  {
    num: '03',
    title: 'Automate',
    Icon: Bot,
    desc: 'AI workflows that reduce manual work, speed up operations, and help teams scale output.',
    chips: ['AI', 'CRM', 'Workflows'],
  },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <p className="why-eyebrow">Why MidwayTech</p>
      <h2 className="why-title">One Partner for Growth, Technology, and AI.</h2>
      <p className="why-sub">
        Most businesses waste months coordinating between marketing teams, developers, and automation
        consultants. MidwayTech brings all three together so execution stays clear, fast, and connected.
      </p>

      <div className="why-grid">
        {pillars.map(p => {
          const Icon = p.Icon
          return (
            <div key={p.num} className="why-card">
              <div className="why-card-top">
                <span className="why-card-icon-wrap"><Icon className="why-card-icon" aria-hidden="true" /></span>
                <span className="why-card-num">{p.num}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="why-card-chips">
                {p.chips.map(chip => <span key={chip} className="why-chip">{chip}</span>)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
