import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { api } from '../../services/api'
import './Contact.css'

const checklist = [
  'Response within 1 business day',
  'No pitch deck. Just a real conversation.',
  'All time zones — US, UK, EU, AU',
  'This call is free. Always.',
]

const lookingForOptions = [
  'Product & Technology',
  'Growth Marketing',
  'AI & Automation',
  'Not sure yet — need guidance',
]

const budgetOptions = ['< $5k', '$5k–$15k', '$15k–$50k', '$50k+']

interface FormState {
  name: string
  business: string
  email: string
  website: string
  lookingFor: string
  budget: string
  details: string
}

const initialForm: FormState = {
  name: '', business: '', email: '', website: '', lookingFor: '', budget: '', details: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await api.submitContact({
        name: form.name,
        email: form.email,
        message: `Business: ${form.business || 'N/A'} | Website: ${form.website || 'N/A'} | Looking for: ${form.lookingFor || 'N/A'} | Budget: ${form.budget || 'N/A'} | Details: ${form.details || 'N/A'}`,
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="lets-talk" className="lt-section">
      <div className="lt-grid">
        <div className="lt-info">
          <p className="lt-eyebrow">Let&apos;s Talk</p>
          <h2 className="lt-title">
            Ready to Grow Your Business?<br />Let&apos;s Start With a Conversation.
          </h2>
          <p className="lt-sub">
            Book a free 30-minute strategy call. No pitch. No obligation. Just an honest conversation about
            your business, goals, and how we&apos;d approach growing it.
          </p>

          <ul className="lt-checklist">
            {checklist.map(item => (
              <li key={item}>
                <CheckCircle2 className="lt-check-icon" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="lt-email-card">
            <span className="lt-email-label">Prefer Email?</span>
            <a href="mailto:hello@midwaytech.co" className="lt-email-link">hello@midwaytech.co</a>
          </div>
        </div>

        <div className="lt-form-card">
          {submitted ? (
            <div className="lt-success">
              <CheckCircle2 className="lt-success-icon" aria-hidden="true" />
              <h3>Request received!</h3>
              <p>We&apos;ll review your details and get back to you within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="lt-form-title">Tell us about your business</h3>

              <div className="lt-field-row">
                <div className="lt-field">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Alex Johnson" required />
                </div>
                <div className="lt-field">
                  <label>Business Name</label>
                  <input name="business" value={form.business} onChange={handleChange} placeholder="Acme Inc." />
                </div>
              </div>

              <div className="lt-field">
                <label>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@company.com" required />
              </div>

              <div className="lt-field">
                <label>Website URL (optional)</label>
                <input name="website" value={form.website} onChange={handleChange} placeholder="https://yourbusiness.com" />
              </div>

              <div className="lt-field">
                <label>What are you looking for?</label>
                <select name="lookingFor" value={form.lookingFor} onChange={handleChange}>
                  <option value="">Select one…</option>
                  {lookingForOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="lt-field">
                <label>Monthly Budget Range</label>
                <select name="budget" value={form.budget} onChange={handleChange}>
                  <option value="">Select a range…</option>
                  {budgetOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="lt-field">
                <label>Tell us about your business in 2–3 sentences…</label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  rows={4}
                  placeholder="What you do, who you serve, and what you're hoping to achieve…"
                />
              </div>

              <button type="submit" className="lt-submit" disabled={submitting}>
                {submitting ? 'Sending…' : <>Book My Free Strategy Call <ArrowRight size={16} aria-hidden="true" /></>}
              </button>

              {error && <p className="lt-error">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
