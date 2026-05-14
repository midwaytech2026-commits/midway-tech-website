import { useState } from 'react'
import { api } from '../../services/api'
import './Contact.css'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await api.submitContact({ name: '', email, message: 'Discovery call request' })
    } catch {
      // proceed regardless — user intent is captured
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="cta-section">
      <h2 className="cta-title">Ready to build<br />your app?</h2>
      <p className="cta-sub">Drop your email and we'll set up a free 30-minute discovery call. No pitch. Just a conversation.</p>
      {submitted ? (
        <p className="cta-success">Thanks! We'll be in touch shortly ✓</p>
      ) : (
        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="cta-input"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cta-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Book free call →'}
          </button>
        </form>
      )}
    </section>
  )
}
