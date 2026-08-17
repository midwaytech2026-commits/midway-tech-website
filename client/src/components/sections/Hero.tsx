import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import heroBg from '../../assets/images/home-hero-office.jpeg'
import './Hero.css'

const bullets = [
  'International clients — US, UK, EU',
  'Marketing + Tech + AI, one team',
  'No long-term lock-ins',
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Modern digital workspace" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" aria-hidden="true" />
          Growth · Technology · AI — One Partner
        </div>

        <h1 className="hero-title">
          Your Business Deserves a Partner That <em>Grows It, Builds It,</em> and Automates It.
        </h1>

        <p className="hero-sub">
          MidwayTech helps D2C brands, startups, and modern businesses scale through marketing strategy,
          technology development, and AI systems — without coordinating three separate agencies.
        </p>

        <div className="hero-actions">
          <Link to="/get-quote" className="btn-primary">Get a Free Quote</Link>
          <Link to="/portfolio" className="btn-ghost">See Our Work →</Link>
        </div>

        <ul className="hero-bullets">
          {bullets.map(b => (
            <li key={b}>
              <Check className="hero-bullet-icon" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
