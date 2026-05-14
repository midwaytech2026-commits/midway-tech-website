import { Link } from 'react-router-dom'
import './CtaStrip.css'

interface CtaStripProps {
  title: string
  subtitle: string
  primaryBtn: { label: string; to: string }
  secondaryBtn?: { label: string; to: string }
}

export default function CtaStrip({ title, subtitle, primaryBtn, secondaryBtn }: CtaStripProps) {
  return (
    <section className="cta-strip">
      <div className="cta-strip-inner">
        <div className="cta-strip-text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="cta-strip-actions">
          <Link to={primaryBtn.to} className="btn-primary">{primaryBtn.label}</Link>
          {secondaryBtn && (
            <Link to={secondaryBtn.to} className="btn-outline">{secondaryBtn.label}</Link>
          )}
        </div>
      </div>
    </section>
  )
}
