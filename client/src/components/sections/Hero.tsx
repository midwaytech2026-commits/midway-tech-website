import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Development & Marketing Agency</p>
      <h1 className="hero-title">
        We build products.<br />We grow businesses.<br />We don't waste your <em>budget</em> doing it.
      </h1>
      <p className="hero-sub">
        Development and marketing services for startups ready to scale and businesses ready to evolve.
        Honest work. Real transparency. Delivered on time — every time.
      </p>
      <div className="hero-actions">
        <a href="/contact" className="btn-primary">
          Book a Free Discovery Call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#services" className="btn-ghost">See How We Work</a>
      </div>
      <p className="hero-microcopy">No pitch. No pressure. Just an honest conversation.</p>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">EU · US · UK</div>
          <div className="stat-label">Markets Served</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">7+</div>
          <div className="stat-label">Years of Industry Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">1 Roof</div>
          <div className="stat-label">Dev & Marketing Together</div>
        </div>
      </div>
    </section>
  )
}
