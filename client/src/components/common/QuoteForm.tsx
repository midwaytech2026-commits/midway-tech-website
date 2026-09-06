import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { api } from '../../services/api'
import './QuoteForm.css'

const serviceOptions = [
  'Website Development',
  'Ecommerce / Shopify',
  'Mobile App Development',
  'Custom Software',
  'SaaS Development',
  'UI/UX Design',
  'Performance Marketing (Meta/Google Ads)',
  'SEO',
  'Social Media Marketing',
  'Email Marketing',
  'Branding & Identity',
  'Lead Generation',
  'LinkedIn Marketing',
  'AI Chatbot',
  'Workflow Automation',
  'CRM Automation',
  'AI Lead Qualification',
  'Multiple Services',
]
const budgetOptions = ['Under $2,000', '$2,000 – $5,000', '$5,000 – $10,000', '$10,000 – $25,000', '$25,000+', 'Monthly retainer — discuss']
const timelineOptions = ['Urgent — within 4 weeks', '1–3 months', '3–6 months', '6+ months', 'Ongoing / retainer', 'Flexible']

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  timeline: string
  brief: string
}

interface QuoteFormProps {
  heading: string
  submitLabel?: string
  source?: 'home' | 'contact' | 'get-quote'
}

export default function QuoteForm({ heading, submitLabel = 'Request My Free Quote', source = 'get-quote' }: QuoteFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', company: '', service: '', budget: '', timeline: '', brief: '',
  })
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
        phone: form.phone,
        message: `Service: ${form.service} | Budget: ${form.budget} | Timeline: ${form.timeline} | Company: ${form.company} | Brief: ${form.brief}`,
        source,
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
              <label>Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Alex Johnson" required />
            </div>
            <div className="qf-field">
              <label>Email Address *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@company.com" required />
            </div>
          </div>

          <div className="qf-field-row">
            <div className="qf-field">
              <label>Phone / WhatsApp</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" />
            </div>
            <div className="qf-field">
              <label>Company Name</label>
              <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
            </div>
          </div>

          <div className="qf-field">
            <label>Service Interested In *</label>
            <select name="service" value={form.service} onChange={handleChange} required>
              <option value="">Select a service…</option>
              {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="qf-field-row">
            <div className="qf-field">
              <label>Budget Range</label>
              <select name="budget" value={form.budget} onChange={handleChange}>
                <option value="">Select a range…</option>
                {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div className="qf-field">
              <label>Project Timeline</label>
              <select name="timeline" value={form.timeline} onChange={handleChange}>
                <option value="">Select timeline…</option>
                {timelineOptions.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="qf-field">
            <label>Project Details *</label>
            <textarea
              name="brief"
              value={form.brief}
              onChange={handleChange}
              rows={5}
              placeholder="Describe your project: what you're building, who it's for, what problem it solves, and any specific requirements…"
              required
            />
          </div>

          <button type="submit" className="qf-submit" disabled={submitting}>
            {submitting ? 'Sending…' : <>{submitLabel} <ArrowRight size={16} aria-hidden="true" /></>}
          </button>

          {error && <p className="qf-error">{error}</p>}
          <p className="qf-disclaimer">We respond within 24 hours. No obligation, no spam.</p>
        </form>
      )}
    </div>
  )
}
