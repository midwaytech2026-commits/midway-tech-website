import './Ticker.css'

const items = [
  'iOS Development', 'Android Development', 'React Native', 'Flutter',
  'UI/UX Design', 'MVP Builds', 'App Store Launch', 'Post-launch Support',
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
