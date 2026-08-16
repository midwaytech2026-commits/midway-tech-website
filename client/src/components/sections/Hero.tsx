import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import heroBg from '../../assets/images/home-hero-office.jpeg'
import './Hero.css'

const bullets = [
  'International clients — US, UK & EU',
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

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-n">7<span>+</span></div>
            <div className="hero-stat-l">Years building<br />marketing systems</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-n">3</div>
            <div className="hero-stat-l">Services in<br />one team</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-n">24<span>h</span></div>
            <div className="hero-stat-l">Quote response<br />turnaround</div>
          </div>
        </div>

        <div className="hero-float-bar">
          <div className="hero-badge">
            <div className="hb-dot hb-dot--green" aria-hidden="true" />
            <div>
              <div className="hb-t">AI Systems Active</div>
              <div className="hb-s">Running 24/7 — no manual input</div>
            </div>
          </div>
          <div className="hero-badge">
            <div className="hb-dot hb-dot--orange" aria-hidden="true" />
            <div>
              <div className="hb-t">International Ready</div>
              <div className="hb-s">US · UK · EU time zones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
