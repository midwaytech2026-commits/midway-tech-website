import { Link } from 'react-router-dom'
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'
import heroVisual from '../../assets/images/hero-visual.jpg'
import './Hero.css'

const bullets = [
  'International clients — US, UK & Australia',
  'Marketing + Tech + AI, one team',
  'No long-term lock-ins',
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Your Business Deserves a Partner That <em>Grows It</em>, <em>Builds It</em>, and Automates It.
        </h1>
        <p className="hero-sub">
          MidwayTech helps D2C brands, startups, and modern businesses scale through marketing strategy,
          technology development, and AI systems — without coordinating three separate agencies.
        </p>

        <div className="hero-actions">
          <Link to="/get-quote" className="btn-primary">
            Get a Free Quote
            <ArrowRight className="hero-cta-icon" aria-hidden="true" />
          </Link>
          <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
        </div>

        <ul className="hero-bullets">
          {bullets.map(b => (
            <li key={b}>
              <ShieldCheck className="hero-bullet-icon" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-visual">
        <img
          src={heroVisual}
          alt="MidwayTech team planning a product, growth, and AI roadmap together"
          className="hero-visual-img"
        />
        <div className="hero-visual-float-card">
          <span className="hero-visual-float-icon-wrap">
            <Sparkles className="hero-visual-float-icon" aria-hidden="true" />
          </span>
          <div>
            <strong>Growth + Tech + AI</strong>
            <span>One connected execution team</span>
          </div>
        </div>
      </div>
    </section>
  )
}
