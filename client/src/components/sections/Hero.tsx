import { Link } from 'react-router-dom'
import { Layers, TrendingUp, Bot, ShieldCheck, Clock3, ArrowRight } from 'lucide-react'
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

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual-main">
          <div className="hero-visual-rows">
            <div className="hero-visual-row">
              <span className="hero-visual-icon-wrap hvi-orange"><Layers className="hero-visual-icon" /></span>
              <div>
                <strong>Product &amp; Technology</strong>
                <span>Built to global standards</span>
              </div>
            </div>
            <div className="hero-visual-row">
              <span className="hero-visual-icon-wrap hvi-orange"><TrendingUp className="hero-visual-icon" /></span>
              <div>
                <strong>Growth Marketing</strong>
                <span>Systems that drive revenue</span>
              </div>
            </div>
            <div className="hero-visual-row">
              <span className="hero-visual-icon-wrap hvi-orange"><Bot className="hero-visual-icon" /></span>
              <div>
                <strong>AI &amp; Automation</strong>
                <span>Leverage, not headcount</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual-float hero-visual-float-1">
          <ShieldCheck className="hero-visual-float-icon" />
          Fixed Scope
        </div>
        <div className="hero-visual-float hero-visual-float-2">
          <Clock3 className="hero-visual-float-icon" />
          24h Reply
        </div>
      </div>
    </section>
  )
}
