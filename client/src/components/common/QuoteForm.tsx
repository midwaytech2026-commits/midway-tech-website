import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { api } from '../../services/api'
import './QuoteForm.css'

const serviceChips = ['iOS App', 'Android App', 'React Native', 'Flutter', 'MVP Build', 'UI/UX Design']
const budgetLabels = ['< $5k', '$5k–$15k', '$15k–$50k', '$50k+']
const timelines = ['ASAP', '1–3 months', '3–6 months', '6+ months']

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  brief: string
  timeline: string
}

interface QuoteFormProps {
  heading: string
  submitLabel?: string
}

export default function QuoteForm({ heading, submitLabel = 'Get a Free Quote' }: QuoteFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [budgetIndex, setBudgetIndex] = useState(1)
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', company: '', brief: '', timeline: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function toggleService(s: string) {
    setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

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
        phone: form.phone,
        message: `Services: ${selectedServices.join(', ')} | Budget: ${budgetLabels[budgetIndex]} | Timeline: ${form.timeline} | Company: ${form.company} | Brief: ${form.brief}`,
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="qf-wrap">
      {submitted ? (
        <div className="qf-success">
          <div className="qf-success-icon"><CheckCircle2 aria-hidden="true" /></div>
          <h2>Message received!</h2>
          <p>We&apos;ll review your project details and get back to you within 24 hours.</p>
        </div>
      ) : (
        <form className="qf-form" onSubmit={handleSubmit}>
          <h2>{heading}</h2>

          <div className="qf-field-row">
            <div className="qf-field">
              <label>Your name *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Alex Johnson" required />
            </div>
            <div className="qf-field">
              <label>Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@company.com" required />
            </div>
          </div>

          <div className="qf-field-row">
            <div className="qf-field">
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" />
            </div>
            <div className="qf-field">
              <label>Company</label>
              <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
            </div>
          </div>

          <div className="qf-field">
            <label>What are you building?</label>
            <div className="qf-chips">
              {serviceChips.map(s => (
                <button
                  type="button"
                  key={s}
                  className={`qf-chip ${selectedServices.includes(s) ? 'selected' : ''}`}
                  onClick={() => toggleService(s)}
                >{s}</button>
              ))}
            </div>
          </div>

          <div className="qf-field">
            <label>Budget range — <strong>{budgetLabels[budgetIndex]}</strong></label>
            <input
              type="range"
              min={0}
              max={3}
              step={1}
              value={budgetIndex}
              onChange={e => setBudgetIndex(Number(e.target.value))}
              className="qf-slider"
            />
            <div className="qf-slider-labels">
              {budgetLabels.map(l => <span key={l}>{l}</span>)}
            </div>
          </div>

          <div className="qf-field">
            <label>Timeline</label>
            <select name="timeline" value={form.timeline} onChange={handleChange}>
              <option value="">Select timeline…</option>
              {timelines.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="qf-field">
            <label>Project brief</label>
            <textarea
              name="brief"
              value={form.brief}
              onChange={handleChange}
              rows={5}
              placeholder="Describe your idea, goals, and any specific requirements…"
            />
          </div>

          <button type="submit" className="qf-submit" disabled={submitting}>
            {submitting ? 'Sending…' : <>{submitLabel} <ArrowRight size={16} aria-hidden="true" /></>}
          </button>

          {error && <p className="qf-error">{error}</p>}
          <p className="qf-disclaimer">No spam, no obligations. We reply within 24 hours.</p>
        </form>
      )}
    </div>
  )
}
