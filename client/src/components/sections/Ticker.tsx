import './Ticker.css'

const items = [
  'Web Development', 'Mobile App Development', 'MVP Builds', 'Ecommerce Development',
  'AI Integrations', 'Website Revamps', 'SEO', 'PPC & Paid Advertising',
  'Content Marketing', 'Social Media Marketing', 'Email Marketing', 'Growth Marketing',
  'PR & Brand Visibility', 'Influencer Marketing',
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
