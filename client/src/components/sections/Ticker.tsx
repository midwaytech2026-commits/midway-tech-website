import './Ticker.css'

const items = [
  'Mobile-First Builds', 'AI-First Solutions', 'Fast MVP Delivery', 'Scalable Systems',
  'Custom Software', 'Digital Transformation', 'Full-Stack Development', 'Smart Automation',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
