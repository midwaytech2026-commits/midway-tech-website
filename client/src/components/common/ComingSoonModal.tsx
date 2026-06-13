import { useEffect } from 'react'
import './ComingSoonModal.css'

interface ComingSoonModalProps {
  open: boolean
  title?: string
  message?: string
  onClose: () => void
}

export default function ComingSoonModal({
  open,
  title = 'Coming Soon',
  message,
  onClose,
}: ComingSoonModalProps) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="csm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="csm-modal" onClick={e => e.stopPropagation()}>
        <div className="csm-glow" aria-hidden="true" />
        <button className="csm-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="csm-icon-wrap" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
            <path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <h2 className="csm-title">{title}</h2>
        <p className="csm-message">
          {message ?? 'This feature is being prepared and will be available soon.'}
        </p>
        <button className="csm-cta" onClick={onClose}>Got it</button>
      </div>
    </div>
  )
}
