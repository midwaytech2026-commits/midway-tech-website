import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { api } from '../../services/api'
import './Contact.css'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await api.submitContact({ email, message: 'Discovery call request' })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="cta-section">
      <h2 className="cta-title">Ready to Grow, Build, and Automate?</h2>
      <p className="cta-sub">Tell us what you are building and where you want to go next. We&apos;ll help you understand the right scope, timeline, and next step.</p>
      {submitted ? (
        <p className="cta-success"><CheckCircle2 size={18} aria-hidden="true" /> Thanks! We'll be in touch shortly</p>
      ) : (
        <>
          <form className="cta-email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="cta-email-input"
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-email-button" disabled={loading}>
              {loading ? 'Sending...' : <><span>Get a Free Quote</span><span aria-hidden="true">→</span></>}
            </button>
            {error && <p className="cta-error">{error}</p>}
          </form>
          <p className="cta-note">Response within 24 hours. No obligation.</p>
        </>
      )}
    </section>
  )
}
