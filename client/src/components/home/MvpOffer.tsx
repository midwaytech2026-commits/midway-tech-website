import {
  Rocket,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import './MvpOffer.css'

const mvpIncludes = [
  'Product discovery',
  'UI/UX design',
  'React Native mobile app',
  'Authentication flow',
  'Requirement-based screens',
  'API/backend integration support',
  'Basic admin/dashboard if included in scope',
  'Testing and deployment-ready build',
]

const fullBuildIncludes = [
  'Product strategy',
  'UI/UX design system',
  'Mobile app development',
  'Backend & API development',
  'Admin dashboard',
  'AI automation workflows',
  'Third-party integrations',
  'Analytics setup',
  'Testing and launch support',
]

export default function MvpOffer() {
  return (
    <section className="mvp-offer-section">
      <div className="mvp-offer-container">

        <div className="mvp-offer-header">
          <p className="section-eyebrow">Product Sprints</p>
          <h2 className="section-title">Launch Faster With Clear,<br />High-Value Build Packages</h2>
          <p className="section-sub">Choose a focused MVP sprint or a full-scale product build depending on your stage, scope, and growth goals.</p>
        </div>

        <div className="offer-grid">

          {/* Package 1 — Featured */}
          <article className="offer-card offer-card-featured">
            <div className="offer-card-head">
              <div className="offer-icon-wrap offer-icon-featured">
                <Rocket className="offer-icon" aria-hidden="true" />
              </div>
              <span className="offer-badge">
                <ShieldCheck className="offer-badge-icon" aria-hidden="true" />
                15-Day MVP Sprint Available
              </span>
            </div>

            <h3>AI-Ready Mobile App MVP</h3>

            <div className="offer-price-block">
              <span className="offer-price-label">Starting at</span>
              <span className="offer-price">$9,999</span>
            </div>

            <p className="offer-best-for">
              <strong>Best for:</strong> Startups and growing businesses that need a launch-ready mobile app MVP with clean UI, core features, and scalable architecture.
            </p>

            <ul className="offer-list">
              {mvpIncludes.map(item => (
                <li key={item}>
                  <CheckCircle2 className="offer-check" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="offer-note">
              <ShieldCheck className="offer-note-icon" aria-hidden="true" />
              15-day sprint available after finalized scope, content, app flow, brand assets, API access, third-party accounts, app store/payment access, and approvals are ready.
            </p>

            <a href="#contact" className="offer-cta offer-cta-primary">
              Start MVP Sprint
              <ArrowRight className="offer-cta-icon" aria-hidden="true" />
            </a>
          </article>

          {/* Package 2 */}
          <article className="offer-card">
            <div className="offer-card-head">
              <div className="offer-icon-wrap">
                <BrainCircuit className="offer-icon" aria-hidden="true" />
              </div>
              <span className="offer-badge offer-badge-muted">
                <ShieldCheck className="offer-badge-icon" aria-hidden="true" />
                Custom Timeline Based on Scope
              </span>
            </div>

            <h3>Full-Scale Product Build</h3>

            <div className="offer-price-block">
              <span className="offer-price-label">Starting at</span>
              <span className="offer-price">$19,999</span>
            </div>

            <p className="offer-best-for">
              <strong>Best for:</strong> Businesses that need a complete digital product with mobile app, backend, admin dashboard, AI workflows, integrations, and scalable infrastructure.
            </p>

            <ul className="offer-list">
              {fullBuildIncludes.map(item => (
                <li key={item}>
                  <CheckCircle2 className="offer-check" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="offer-cta offer-cta-secondary">
              Discuss Full Build
              <ArrowRight className="offer-cta-icon" aria-hidden="true" />
            </a>
          </article>

        </div>

        <p className="offer-footnote">
          Final pricing and timeline depend on scope, integrations, number of screens, backend complexity, AI workflows, third-party tools, accounts, and approval speed.
        </p>

      </div>
    </section>
  )
}
