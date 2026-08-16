import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { Mail, MapPin, Clock3, CheckCircle2 } from 'lucide-react'
import { api } from '../services/api'
import './ContactPage.css'

interface ContactFormState {
  name: string
  company: string
  email: string
  subject: string
  message: string
}

const initialForm: ContactFormState = { name: '', company: '', email: '', subject: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
        message: `Company: ${form.company || 'N/A'} | Subject: ${form.subject} | Message: ${form.message}`,
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
          <h1>Get in Touch</h1>
          <p>Whether you have a project in mind, a question about our services, or just want to find out if MidwayTech is the right fit — we&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="cp-body">
        <div className="cp-body-inner">
          <div className="cp-info">
            <p className="cp-info-eyebrow">Contact Details</p>
            <h2>We Respond Within 24 Hours. Always.</h2>
            <p className="cp-info-intro">
              Fill out the form and we&apos;ll reply the same business day with a confirmation and any
              clarifying questions. If you&apos;d prefer email directly, use the address below.
            </p>

            <div className="cp-contact-rows">
              <a href="mailto:hello@midwaytech.co" className="cp-contact-row">
                <span className="cp-contact-icon"><Mail size={15} aria-hidden="true" /></span>
                hello@midwaytech.co
              </a>
              <div className="cp-contact-row">
                <span className="cp-contact-icon"><MapPin size={15} aria-hidden="true" /></span>
                Jaipur, Rajasthan, India
              </div>
              <div className="cp-contact-row">
                <span className="cp-contact-icon cp-contact-icon-green"><Clock3 size={15} aria-hidden="true" /></span>
                Response within 1 business day
              </div>
            </div>
          </div>

          <div className="cp-form-box">
            {submitted ? (
              <div className="cp-success">
                <CheckCircle2 aria-hidden="true" />
                <h3>Message sent!</h3>
                <p>We&apos;ll get back to you within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="cp-form-title">Send Us a Message</p>
                <div className="cp-form-grid">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Company / Business" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="cp-full" required />
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="cp-full" required />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to discuss..."
                    className="cp-full"
                    required
                  />
                  <button type="submit" className="cp-submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message →'}
                  </button>
                </div>
                {error && <p className="cp-error">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
