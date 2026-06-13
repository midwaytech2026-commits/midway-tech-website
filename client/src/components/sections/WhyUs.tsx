import { BrainCircuit, Rocket, Layers, Network } from 'lucide-react'
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

const differentiators = [
  {
    Icon: BrainCircuit,
    title: 'AI-first thinking',
    desc: 'We look for automation opportunities from day one, not after the product is already built.',
  },
  {
    Icon: Rocket,
    title: 'Speed with structure',
    desc: 'Fast delivery does not mean random execution. We work with clear scope, milestones, and approval points.',
  },
  {
    Icon: Layers,
    title: 'Product-level precision',
    desc: 'We focus on user flows, scalable architecture, clean UI, and business outcomes — not just screens.',
  },
  {
    Icon: Network,
    title: 'Built for growth',
    desc: 'Every product is planned with future features, integrations, analytics, and scale in mind.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <p className="why-eyebrow">Why MidwayTech</p>
      <h2 className="why-title">Why Growing Businesses Choose MidwayTech</h2>
      <p className="why-sub">We work like a product partner — combining strategy, design, engineering, AI automation, and execution speed to help businesses build systems that can actually scale.</p>

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

        <div className="why-diff-grid">
          {differentiators.map(d => {
            const Icon = d.Icon
            return (
              <div key={d.title} className="why-diff-card">
                <div className="why-diff-icon-wrap">
                  <Icon className="why-diff-icon" aria-hidden="true" />
                </div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
