import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

export interface ServiceDetailData {
  id: string
  anchorLabel: string
  eyebrow: string
  title: string
  paragraphs: string[]
  features: string[]
  techChips: string[]
  ctaLabel: string
  image?: string
  imageAlt?: string
}

export function ServiceDetail({ detail, accent, reverse }: { detail: ServiceDetailData; accent?: 'green'; reverse?: boolean }) {
  return (
    <div className="svc-detail" id={detail.id}>
      <div className={`svc-detail-grid${detail.image ? '' : ' svc-detail-grid--full'}${reverse ? ' rev' : ''}`}>
        {detail.image && (
          <div className="svc-detail-img">
            <img src={detail.image} alt={detail.imageAlt ?? detail.eyebrow} loading="lazy" />
          </div>
        )}
        <div className="svc-detail-content">
          <p className="section-eyebrow">{detail.eyebrow}</p>
          <h2>{detail.title}</h2>
          {detail.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="svc-features">
            {detail.features.map(f => (
              <span key={f} className="svc-feat">
                <Check className="svc-feat-icon" aria-hidden="true" />
                {f}
              </span>
            ))}
          </div>
          <div className="tech-chips">
            {detail.techChips.map(t => <span key={t} className="tech-chip">{t}</span>)}
          </div>
          <Link
            to="/get-quote"
            className={`btn-primary svc-detail-cta${accent === 'green' ? ' svc-detail-cta-green' : ''}`}
          >
            {detail.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

export function scrollToServiceSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
