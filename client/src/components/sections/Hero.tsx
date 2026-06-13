import './Hero.css'

const trustPoints = [
  'Mobile-First Builds',
  'AI-First Solutions',
  'Fast MVP Delivery',
  'Scalable Systems',
]

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">AI-Powered Digital Solutions</p>
      <h1 className="hero-title">
        Transforming Businesses<br />With <em>AI-Powered</em><br />Digital Solutions
      </h1>
      <p className="hero-sub">
        MidwayTech builds intelligent apps, websites, automation systems, and digital
        experiences that help businesses launch, scale, and grow.
      </p>
      <div className="hero-actions">
        <a href="/contact" className="btn-primary">
          Start Your Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="/portfolio" className="btn-ghost">View Our Work</a>
      </div>

      <div className="hero-trust">
        {trustPoints.map(point => (
          <div key={point} className="trust-item">
            <span className="trust-dot" />
            {point}
          </div>
        ))}
      </div>
    </section>
  )
}
