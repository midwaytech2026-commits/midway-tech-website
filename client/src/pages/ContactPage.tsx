import { useState, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { api } from '../services/api'
import './ContactPage.css'

const serviceChips = [
  'Web Development', 'Mobile App', 'Ecommerce', 'AI Integrations',
  'Website Revamp', 'MVP Build',
  'SEO', 'PPC / Paid Ads', 'Content Marketing', 'Social Media',
  'Email Marketing', 'Growth Marketing',
]
const budgetLabels = ['< $5k', '$5k–$15k', '$15k–$50k', '$50k+']
const timelines = ['ASAP', '1–3 months', '3–6 months', '6+ months']

const faqItems = [
  {
    q: 'How long does a typical project take?',
    a: 'A simple website: 3–5 weeks. An MVP: 8–14 weeks. A full app: 14–24 weeks. SEO shows meaningful results in 3–6 months; PPC can return results within weeks. We give you a specific timeline in your proposal.',
  },
  {
    q: 'Can you handle both development and marketing?',
    a: 'Yes — and for most clients, this is the recommended approach. When both come from the same team, the results are faster and more consistent. We plan both strategies from the same brief.',
  },
  {
    q: 'Do you work with EU, US and UK clients?',
    a: 'Yes. Most of our clients are in the EU, US, and UK. We are based in Jaipur, India and our offshore model means you get premium quality at a significantly lower cost than a local agency.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, absolutely. We sign NDAs before any project discussion and take IP protection seriously.',
  },
  {
    q: 'What does the discovery call actually involve?',
    a: 'A 45–60 minute conversation where you tell us what you\'re building or where you want to grow. We ask the right questions. No pitch, no pressure — just an honest conversation about whether we\'re the right fit.',
  },
  {
    q: 'What is your minimum engagement size?',
    a: 'Development projects start from $2,500. Marketing retainers from $1,200/month. For a clear quote based on your specific needs, book a discovery call.',
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

function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <div className="calendly-wrap">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/midwaytech/discovery-call?hide_gdpr_banner=1&background_color=0a0a09&text_color=fafaf7&primary_color=ff4d1c"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}

export default function ContactPage() {
  const [tab, setTab] = useState<'calendly' | 'form'>('calendly')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [budgetIndex, setBudgetIndex] = useState(1)
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', company: '', brief: '', timeline: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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
    <div className="contact-page">
      <section className="cp-hero">
        <div className="cp-hero-inner">
          <span className="section-eyebrow">Contact Us</span>
          <h1>Let's talk about what<br />you're building — and how to <em>grow it</em></h1>
          <p>No pitch. No hard sell. Just an honest conversation about your business and whether we're the right team to help — with development, marketing, or both.</p>
        </div>
      </section>

      <section className="cp-body">
        <div className="cp-body-inner">
          <div className="cp-info">
            <div className="cp-info-block">
              <h3>What happens next?</h3>
              <ol className="cp-steps">
                <li><span>1</span><div><strong>Discovery call</strong><p>45–60 min. We listen, ask the right questions, and understand your goals — across development, marketing, or both.</p></div></li>
                <li><span>2</span><div><strong>Strategy & Proposal</strong><p>We come back with the right services, an honest timeline, and a clear budget within 2–4 business days.</p></div></li>
                <li><span>3</span><div><strong>Kickoff</strong><p>One team, one brief. Development and marketing planned together from day one.</p></div></li>
              </ol>
            </div>

            <div className="cp-contact-links">
              <a href="mailto:hello@midwaytech.co" className="cp-contact-item">
                <div className="cp-contact-icon">✉</div>
                <div><strong>Email us</strong><span>hello@midwaytech.co</span></div>
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="cp-contact-item">
                <div className="cp-contact-icon">💬</div>
                <div><strong>WhatsApp</strong><span>Quick questions welcome</span></div>
              </a>
              <a href="https://linkedin.com/in/nilesh-midwaytech" target="_blank" rel="noopener noreferrer" className="cp-contact-item">
                <div className="cp-contact-icon">in</div>
                <div><strong>LinkedIn</strong><span>Connect with Nilesh</span></div>
              </a>
            </div>

            <div className="cp-location">
              <div className="cp-location-item">📍 Based in Jaipur, Rajasthan, India</div>
              <div className="cp-location-item">🌍 Serving EU · US · UK · Global</div>
              <div className="cp-location-item">⏱ We respond within 24 hours. Always.</div>
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
            <div className="cp-tabs">
              <button
                className={`cp-tab ${tab === 'calendly' ? 'active' : ''}`}
                onClick={() => setTab('calendly')}
              >
                📅 Book a Call Directly
              </button>
              <button
                className={`cp-tab ${tab === 'form' ? 'active' : ''}`}
                onClick={() => setTab('form')}
              >
                ✉ Send a Message
              </button>
            </div>

            {tab === 'calendly' ? (
              <CalendlyEmbed />
            ) : submitted ? (
              <div className="cp-success">
                <div className="cp-success-icon">✓</div>
                <h2>Message received!</h2>
                <p>We will review your project details and get back to you within 24 hours.</p>
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
                    <label>Company / Project</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
                  </div>
                </div>

                <div className="cp-field">
                  <label>What are you looking for help with?</label>
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
                  <label>Rough timeline</label>
                  <select name="timeline" value={form.timeline} onChange={handleChange}>
                    <option value="">Select timeline…</option>
                    {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="cp-field">
                  <label>Tell us about your project or goal</label>
                  <textarea
                    name="brief"
                    value={form.brief}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your idea, where you want to grow, or what problem you're trying to solve…"
                  />
                </div>

                <button type="submit" className="cp-submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message — We Reply Within 24 Hours →'}
                </button>

                {error && <p className="cp-error">{error}</p>}
                <p className="cp-disclaimer">No spam, no obligations. No pressure to move forward.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
