import { useState } from 'react'
import { api } from '../../services/api'
import type { ContactForm } from '../../types'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await api.submitContact({ ...form, phone: form.phone || undefined })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <span className="section-badge">Get In Touch</span>
        <h2>Start Growing Your <strong>Business With Us</strong></h2>
        <p>If you have any questions, feel free to contact us.</p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>123 Tech Park, Innovation District,<br />Your City, State 100001</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>hello@midwaytech.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+1 (201) 555-0123</span>
          </div>
        </div>

        <div className="contact-actions">
          <a href="tel:+12015550123" className="action-btn">📞 Call Now</a>
          <a href="mailto:hello@midwaytech.com" className="action-btn">✉️ Email</a>
          <a href="#contact" className="action-btn">💬 Chat</a>
        </div>
      </div>

      <div className="contact-form-wrap">
        {submitted ? (
          <div className="success-msg">
            <span>✅</span>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Submit →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
