import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">Your Digital Growth Partner</span>
        <h1>
          We Build <span className="highlight">Digital Solutions</span>
          <br />That Drive Results
        </h1>
        <p>
          From web and mobile app development to AI, IoT, and e-commerce — we
          transform your ideas into powerful digital products aligned with
          industry standards and futuristic technologies.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get Free Consultation</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <span className="stat-number">500+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">50+</span>
          <span className="stat-label">Industries Served</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">8+</span>
          <span className="stat-label">Years of Experience</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">98%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
      </div>
    </section>
  )
}
