import { ClipboardList, Cpu, Eye, Rocket } from 'lucide-react'
import './Testimonials.css'

const cards = [
  {
    Icon: ClipboardList,
    title: 'Clear scope before development',
    desc: 'We define app flow, features, accounts, integrations, content, and approvals before sprint execution.',
  },
  {
    Icon: Cpu,
    title: 'Modern AI-ready delivery',
    desc: 'We build with current product expectations — automation, scalable backend systems, responsive UI, and clean user experience.',
  },
  {
    Icon: Eye,
    title: 'Transparent execution',
    desc: 'Clients get milestone-based updates, practical recommendations, and honest delivery expectations.',
  },
  {
    Icon: Rocket,
    title: 'Launch-focused mindset',
    desc: 'We design and develop with deployment, testing, analytics, and future growth in mind.',
  },
]

export default function Testimonials() {
  return (
    <section id="how-we-work" className="clarity-section">
      <p className="section-eyebrow">How We Work</p>
      <h2 className="section-title">Built on Clarity, Speed, and Product Thinking</h2>
      <p className="section-sub">Until we publish verified case studies, we prefer to show how we work instead of making claims we can't back up yet.</p>

      <div className="clarity-grid">
        {cards.map(card => {
          const Icon = card.Icon
          return (
            <div key={card.title} className="clarity-card">
              <div className="clarity-icon-wrap">
                <Icon className="clarity-icon" aria-hidden="true" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
