import { useState } from 'react'
import type { ChangeEvent } from 'react'
import {
  Mail,
  MessageCircle,
  Link2,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ClipboardCheck,
  ReceiptText,
  LockKeyhole,
  CalendarCheck,
} from 'lucide-react'
import { api } from '../services/api'
import ComingSoonModal from '../components/common/ComingSoonModal'
import './ContactPage.css'

const trustItems = [
  { Icon: ShieldCheck, label: 'NDA-friendly discovery' },
  { Icon: ClipboardCheck, label: 'Clear scope before work starts' },
  { Icon: ReceiptText, label: 'No surprise fees' },
  { Icon: LockKeyhole, label: 'Ownership stays clear' },
  { Icon: CalendarCheck, label: 'Weekly updates during execution' },
]

const serviceChips = ['iOS App', 'Android App', 'React Native', 'Flutter', 'MVP Build', 'UI/UX Design']
const budgetLabels = ['< $5k', '$5k–$15k', '$15k–$50k', '$50k+']
const timelines = ['ASAP', '1–3 months', '3–6 months', '6+ months']

const faqItems = [
  {
    q: 'How long does it take to build an app?',
    a: 'A typical MVP takes 8–14 weeks. Full-featured apps take 3–6 months. We provide a detailed timeline after our discovery call.'
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, absolutely. We sign NDAs before any project discussion and take IP protection seriously.'
  },
  {
    q: 'What information do I need to get started?',
    a: 'Just a basic idea of what you want to build. We help you structure the scope, define features, and plan the build.'
  },
  {
    q: 'Do you work with US/UK/Australian clients?',
    a: 'Yes — most of our clients are in the US, UK, and Australia. We overlap with US EST mornings and UK afternoons.'
  },
  {
    q: 'What happens after the app is launched?',
    a: 'We offer 3-month post-launch support on all projects, plus optional retainer packages for ongoing feature work.'
  },
]

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  brief: string
  timeline: string
}

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [budgetIndex, setBudgetIndex] = useState(1)
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', company: '', brief: '', timeline: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [comingSoon, setComingSoon] = useState<string | null>(null)

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
    <div className="contact-page">
      <ComingSoonModal
        open={Boolean(comingSoon)}
        message={`${comingSoon} is being prepared and will be available soon.`}
        onClose={() => setComingSoon(null)}
      />
      <section className="cp-hero">
        <div className="cp-hero-inner">
          <span className="section-eyebrow">Get a Free Quote</span>
          <h1>Tell Us What You&apos;re Building</h1>
          <p>Share your project goals, timeline, and the type of support you need. We&apos;ll review it and suggest the right next step.</p>
          <p className="cp-hero-microcopy">Response within 24 hours. No obligation.</p>
        </div>
      </section>

      <section className="cp-body">
        <div className="cp-body-inner">
          <div className="cp-info">
            <div className="cp-info-block">
              <h3>What happens next?</h3>
              <ol className="cp-steps">
                <li><span>1</span><div><strong>We review your project details</strong><p>We read what you&apos;ve shared and understand what you&apos;re trying to build.</p></div></li>
                <li><span>2</span><div><strong>We reply with the right next step</strong><p>You&apos;ll hear from us within 24 hours with clear next steps or questions.</p></div></li>
                <li><span>3</span><div><strong>If it makes sense, we scope the work clearly</strong><p>If we&apos;re a fit, we outline scope, timeline, and cost before anything starts.</p></div></li>
              </ol>
            </div>

            <div className="cp-trust-block">
              <h3>What You Can Expect</h3>
              <ul className="cp-trust-list">
                {trustItems.map(t => (
                  <li key={t.label}>
                    <t.Icon aria-hidden="true" />
                    {t.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cp-contact-links">
              <a href="mailto:hello@midwaytech.co" className="cp-contact-item">
                <div className="cp-contact-icon"><Mail size={18} aria-hidden="true" /></div>
                <div><strong>Email us</strong><span>hello@midwaytech.co</span></div>
              </a>
              <button type="button" className="cp-contact-item" onClick={() => setComingSoon('WhatsApp')}>
                <div className="cp-contact-icon"><MessageCircle size={18} aria-hidden="true" /></div>
                <div><strong>WhatsApp</strong><span>Quick questions welcome</span></div>
              </button>
              <button type="button" className="cp-contact-item" onClick={() => setComingSoon('LinkedIn')}>
                <div className="cp-contact-icon"><Link2 size={18} aria-hidden="true" /></div>
                <div><strong>LinkedIn</strong><span>Connect with our team</span></div>
              </button>
            </div>

            <div className="cp-faq">
              <h3>Quick Answers</h3>
              {faqItems.map((item, i) => (
                <div key={i} className={`cp-faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="cp-faq-answer"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="cp-form-wrap">
            {submitted ? (
              <div className="cp-success">
                <div className="cp-success-icon"><CheckCircle2 aria-hidden="true" /></div>
                <h2>Message received!</h2>
                <p>We'll review your project details and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit}>
                <h2>Tell us about your project</h2>

                <div className="cp-field-row">
                  <div className="cp-field">
                    <label>Your name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Alex Johnson" required />
                  </div>
                  <div className="cp-field">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@company.com" required />
                  </div>
                </div>

                <div className="cp-field-row">
                  <div className="cp-field">
                    <label>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" />
                  </div>
                  <div className="cp-field">
                    <label>Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
                  </div>
                </div>

                <div className="cp-field">
                  <label>What are you building?</label>
                  <div className="cp-chips">
                    {serviceChips.map(s => (
                      <button
                        type="button"
                        key={s}
                        className={`cp-chip ${selectedServices.includes(s) ? 'selected' : ''}`}
                        onClick={() => toggleService(s)}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                <div className="cp-field">
                  <label>Budget range — <strong>{budgetLabels[budgetIndex]}</strong></label>
                  <input
                    type="range"
                    min={0}
                    max={3}
                    step={1}
                    value={budgetIndex}
                    onChange={e => setBudgetIndex(Number(e.target.value))}
                    className="cp-slider"
                  />
                  <div className="cp-slider-labels">
                    {budgetLabels.map(l => <span key={l}>{l}</span>)}
                  </div>
                </div>

                <div className="cp-field">
                  <label>Timeline</label>
                  <select name="timeline" value={form.timeline} onChange={handleChange}>
                    <option value="">Select timeline…</option>
                    {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="cp-field">
                  <label>Project brief</label>
                  <textarea
                    name="brief"
                    value={form.brief}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your idea, goals, and any specific requirements…"
                  />
                </div>

                <button type="submit" className="cp-submit" disabled={submitting}>
                  {submitting ? 'Sending…' : <>Get a Free Quote <ArrowRight size={16} aria-hidden="true" /></>}
                </button>

                {error && <p className="cp-error">{error}</p>}
                <p className="cp-disclaimer">No spam, no obligations. We reply within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
