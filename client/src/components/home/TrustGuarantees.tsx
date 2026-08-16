import {
  ShieldCheck,
  LockKeyhole,
  CalendarCheck,
  Zap,
  ReceiptText,
  Bug,
  Code2,
  Clock3,
} from 'lucide-react'
import './TrustGuarantees.css'

const guarantees = [
  {
    Icon: ShieldCheck,
    title: '100% IP Transfer on Final Payment',
    desc: 'Every line of code and design becomes yours on final payment. No clauses that lock you in — ever.',
  },
  {
    Icon: LockKeyhole,
    title: 'NDA Before Sensitive Details Are Shared',
    desc: 'We sign an NDA before the discovery call if your project involves confidential data or unreleased product info.',
  },
  {
    Icon: CalendarCheck,
    title: 'Weekly Updates — Never a Big Reveal',
    desc: 'You see working progress every week. Drift is caught early — not at launch when it costs twice as much to fix.',
  },
  {
    Icon: Zap,
    title: 'Reply to Every Enquiry Within 24 Hours',
    desc: 'Sales, support, or questions — first reply in your inbox the next business day or sooner. Always.',
  },
  {
    Icon: ReceiptText,
    title: 'Transparent Written Quotes — No Surprise Fees',
    desc: 'Every invoice scoped and signed off before work starts. Change requests quoted separately, never assumed.',
  },
  {
    Icon: Bug,
    title: '30-Day Post-Launch Support Included',
    desc: 'Any bug we shipped is fixed at our cost for 30 days post-launch. Support is on a clear retainer — not a surprise invoice.',
  },
  {
    Icon: Code2,
    title: 'Source Code on Your Repository From Day 1',
    desc: 'We commit to your repo from the start — not a private one we control. You see every change as it happens.',
  },
  {
    Icon: Clock3,
    title: "Honest Timelines — We Won't Overpromise",
    desc: "If a deadline isn't achievable, we tell you in week one — not week six. Realistic planning protects both sides.",
  },
]

export default function TrustGuarantees() {
  return (
    <section className="tg-section">
      <p className="tg-eyebrow">Trust &amp; Guarantees</p>
      <h2 className="tg-title">How We Keep Your Project Safe</h2>
      <p className="tg-sub">Eight concrete promises on every engagement — so you know what you&apos;re signing up for before anything starts.</p>

      <div className="tg-grid">
        {guarantees.map(g => {
          const Icon = g.Icon
          return (
            <div key={g.title} className="tg-card">
              <div className="tg-icon-wrap">
                <Icon className="tg-icon" aria-hidden="true" />
              </div>
              <div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
