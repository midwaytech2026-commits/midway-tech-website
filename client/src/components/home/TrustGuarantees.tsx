import {
  ShieldCheck,
  FileLock2,
  CalendarCheck,
  Clock3,
  FileText,
  LifeBuoy,
  GitBranch,
  Timer,
} from 'lucide-react'
import './TrustGuarantees.css'

const guarantees = [
  {
    Icon: ShieldCheck,
    title: '100% IP Transfer on Final Payment',
    desc: 'Every line of code and design becomes yours on final payment.',
  },
  {
    Icon: FileLock2,
    title: 'NDA Before Sensitive Details Are Shared',
    desc: 'We sign an NDA before discussing confidential product or business details.',
  },
  {
    Icon: CalendarCheck,
    title: 'Weekly Updates — Never a Big Reveal',
    desc: 'You see working progress every week.',
  },
  {
    Icon: Clock3,
    title: 'Reply to Every Enquiry Within 24 Hours',
    desc: 'Sales, support, or questions — first reply within the next business day or sooner.',
  },
  {
    Icon: FileText,
    title: 'Transparent Written Quotes — No Surprise Fees',
    desc: 'Every invoice is scoped and signed off before work starts.',
  },
  {
    Icon: LifeBuoy,
    title: '30-Day Post-Launch Support Included',
    desc: 'Any bug we shipped is fixed at our cost for 30 days post-launch.',
  },
  {
    Icon: GitBranch,
    title: 'Source Code on Your Repository From Day 1',
    desc: 'We commit to your repo from the start.',
  },
  {
    Icon: Timer,
    title: 'Honest Timelines — We Won’t Overpromise',
    desc: 'If a deadline is not achievable, we tell you clearly.',
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
