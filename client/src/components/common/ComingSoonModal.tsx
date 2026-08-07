import { useEffect } from 'react'
import { Clock3, X } from 'lucide-react'
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

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="csm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="csm-modal" onClick={e => e.stopPropagation()}>
        <div className="csm-glow" aria-hidden="true" />
        <button className="csm-close" onClick={onClose} aria-label="Close">
          <X size={16} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <div className="csm-icon-wrap" aria-hidden="true">
          <Clock3 size={26} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <h2 className="csm-title">{title}</h2>
        <p className="csm-message">
          {message ?? 'This page is being prepared and will be available soon.'}
        </p>
        <button className="csm-cta" onClick={onClose}>Got it</button>
      </div>
    </div>
  )
}
