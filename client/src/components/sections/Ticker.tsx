import {
  Smartphone,
  BrainCircuit,
  Zap,
  Network,
  Code2,
  TrendingUp,
  Layers,
  Bot,
} from 'lucide-react'
import './Ticker.css'

const items = [
  { Icon: Smartphone,   text: 'Mobile-First Builds' },
  { Icon: BrainCircuit, text: 'AI-First Solutions' },
  { Icon: Zap,          text: 'Fast MVP Delivery' },
  { Icon: Network,      text: 'Scalable Systems' },
  { Icon: Code2,        text: 'Custom Software' },
  { Icon: TrendingUp,   text: 'Digital Transformation' },
  { Icon: Layers,       text: 'Full-Stack Development' },
  { Icon: Bot,          text: 'Smart Automation' },
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => {
          const Icon = item.Icon
          return (
            <span key={i} className="ticker-item">
              <Icon className="trust-icon" aria-hidden="true" />
              {item.text}
            </span>
          )
        })}
      </div>
    </div>
  )
}
