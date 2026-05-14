import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Mobile App Development Agency</p>
      <h1 className="hero-title">
        We build apps<br />that <em>ship</em>,<br />scale &amp; sell.
      </h1>
      <p className="hero-sub">
        Midway Tech partners with startups and growing businesses in the US, UK &amp; Australia to build
        high-performance iOS &amp; Android apps — on time, on budget, no BS.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">
          Start your project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#services" className="btn-ghost">See what we build</a>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">50+</div>
          <div className="stat-label">Apps delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">98%</div>
          <div className="stat-label">Client satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">12w</div>
          <div className="stat-label">Avg. time to launch</div>
        </div>
      </div>
    </section>
  )
}
