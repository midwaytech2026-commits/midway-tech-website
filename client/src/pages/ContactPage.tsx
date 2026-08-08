import { useState } from 'react'
import {
  Mail,
  MessageCircle,
  Link2,
  ShieldCheck,
  ClipboardCheck,
  ReceiptText,
  LockKeyhole,
  CalendarCheck,
} from 'lucide-react'
import ComingSoonModal from '../components/common/ComingSoonModal'
import QuoteForm from '../components/common/QuoteForm'
import './ContactPage.css'

const trustItems = [
  { Icon: ShieldCheck, label: 'NDA-friendly discovery' },
  { Icon: ClipboardCheck, label: 'Clear scope before work starts' },
  { Icon: ReceiptText, label: 'No surprise fees' },
  { Icon: LockKeyhole, label: 'Ownership stays clear' },
  { Icon: CalendarCheck, label: 'Weekly updates during execution' },
]

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

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [comingSoon, setComingSoon] = useState<string | null>(null)

  return (
    <div className="contact-page">
      <ComingSoonModal
        open={Boolean(comingSoon)}
        message={`${comingSoon} is being prepared and will be available soon.`}
        onClose={() => setComingSoon(null)}
      />
      <section className="cp-hero">
        <div className="cp-hero-inner">
          <span className="section-eyebrow">Contact Us</span>
          <h1>Get in Touch</h1>
          <p>Whether you have a project in mind, a question about our services, or just want to find out if MidwayTech is the right fit — we&apos;d love to hear from you.</p>
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

          <QuoteForm heading="Send Us a Message" />
        </div>
      </section>
    </div>
  )
}
