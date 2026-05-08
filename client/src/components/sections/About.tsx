import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <span className="section-badge">About Midway Tech</span>
        <h2>Your go-to web and mobile app development partner.</h2>
        <p>
          At Midway Tech, we do more than just assist you with a project. We
          transform your digital infrastructure, aligning it with industry
          standards and futuristic solutions, including AI, IoT, and advanced
          analytics.
        </p>
        <p>
          Team up with us and let us guide you throughout the project journey
          and beyond. From building and customizing digital tools to maintaining
          them as per evolving trends, we are with you at every step of the way.
        </p>
        <a href="#contact" className="btn-primary">About Us</a>
      </div>

      <div className="about-image">
        <div className="image-placeholder">
          <div className="image-inner">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="rgba(59,158,255,0.1)" />
              <path d="M20 55 Q40 20 60 55" stroke="#3b9eff" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <circle cx="30" cy="38" r="8" fill="#3b9eff" opacity="0.7"/>
              <circle cx="50" cy="32" r="6" fill="#3b9eff" opacity="0.5"/>
            </svg>
            <p>Building Your Digital Future</p>
          </div>
        </div>
      </div>
    </section>
  )
}
