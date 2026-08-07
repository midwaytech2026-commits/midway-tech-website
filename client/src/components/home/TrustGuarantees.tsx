import {
  ShieldCheck,
  LockKeyhole,
  CalendarCheck,
  ReceiptText,
  Bug,
} from 'lucide-react'
import './TrustGuarantees.css'

const guarantees = [
  {
    Icon: ShieldCheck,
    title: 'You Own Everything, From Day One.',
    desc: 'Your source code, design files, and final product are handed over clearly on final payment, with work committed to your repository from the start.',
  },
  {
    Icon: LockKeyhole,
    title: 'NDA Before Sensitive Details Are Shared',
    desc: 'We can sign an NDA before discussing confidential product, business, or customer information.',
  },
  {
    Icon: CalendarCheck,
    title: 'Weekly Updates — Never a Big Reveal',
    desc: 'You see progress every week, so feedback happens early and the project never disappears into silence.',
  },
  {
    Icon: ReceiptText,
    title: 'No Surprise Fees, No Surprise Delays',
    desc: 'Scope, cost, milestones, and timelines are discussed clearly before work begins. If something is not achievable, we tell you upfront.',
  },
  {
    Icon: Bug,
    title: '30-Day Post-Launch Support Included',
    desc: 'If something we shipped breaks after launch, we fix it during the included support window.',
  },
]

export default function TrustGuarantees() {
  return (
    <section className="tg-section">
      <p className="tg-eyebrow">Trust &amp; Guarantees</p>
      <h2 className="tg-title">How We Keep Your Project Safe</h2>
      <p className="tg-sub">Concrete promises on every engagement — so you know what you&apos;re signing up for before anything starts.</p>

      <div className="tg-grid">
        {guarantees.map(g => {
          const Icon = g.Icon
          return (
            <div key={g.title} className="tg-card">
              <div className="tg-icon-wrap">
                <Icon className="tg-icon" aria-hidden="true" />
              </div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
