import './Technologies.css'

const techs = [
  { logo: '🍎', name: 'Swift' },
  { logo: '⚡', name: 'Kotlin' },
  { logo: '⚛️', name: 'React Native' },
  { logo: '🐦', name: 'Flutter' },
  { logo: '🔥', name: 'Firebase' },
  { logo: '☁️', name: 'AWS' },
  { logo: '🐘', name: 'PostgreSQL' },
  { logo: '🟢', name: 'Node.js' },
  { logo: '🐍', name: 'Python' },
  { logo: '🎨', name: 'Figma' },
  { logo: '📊', name: 'Mixpanel' },
  { logo: '💳', name: 'Stripe' },
]

export default function Technologies() {
  return (
    <section id="tech" className="tech-section">
      <p className="section-eyebrow">Technologies</p>
      <h2 className="section-title">The stack that powers your app.</h2>

      <div className="tech-grid">
        {techs.map(t => (
          <div key={t.name} className="tech-item">
            <div className="tech-logo">{t.logo}</div>
            <div className="tech-name">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
