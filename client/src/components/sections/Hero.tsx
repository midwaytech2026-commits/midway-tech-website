import { Link } from 'react-router-dom'
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'
import heroVisual from '../../assets/images/hero-visual.jpg'
import './Hero.css'

const bullets = [
  'Product + Growth + AI in one team',
  'Clear scope and honest timelines',
  'Built for real launch conditions',
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Your Business Deserves a Partner That <em>Grows It</em>, <em>Builds It</em>, and Automates It.
        </h1>
        <p className="hero-sub">
          MidwayTech helps startups and growing businesses scale through product strategy, technology
          development, growth systems, and AI automation — without coordinating three separate agencies.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Get a Free Quote
            <ArrowRight className="hero-cta-icon" aria-hidden="true" />
          </a>
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
