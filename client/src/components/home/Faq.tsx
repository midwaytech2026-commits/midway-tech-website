import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import './Faq.css'

const faqs = [
  {
    q: 'Can you really deliver an MVP in 15 days?',
    a: 'Yes, when requirements, content, accounts, assets, and approvals are finalized before the sprint begins.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. MidwayTech works remotely with startups and businesses across different regions and time zones.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern technologies including React Native, React, Node.js, PostgreSQL, Firebase, AWS, AI workflows, and scalable backend systems depending on project requirements.',
  },
  {
    q: 'Do you provide UI/UX design?',
    a: 'Yes. Product strategy and UI/UX design are included in our delivery process where required.',
  },
  {
    q: 'Do you help after launch?',
    a: 'Yes. Ongoing improvements, maintenance, and feature expansion can be discussed based on project needs.',
  },
  {
    q: 'How is pricing decided?',
    a: 'Final pricing depends on scope, integrations, AI workflows, backend complexity, number of screens, and delivery requirements.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq-section">
      <div className="faq-container">
        <p className="section-eyebrow">FAQ</p>
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`faq-item${isOpen ? ' faq-item-open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {isOpen
                    ? <Minus className="faq-toggle-icon" aria-hidden="true" />
                    : <Plus className="faq-toggle-icon" aria-hidden="true" />
                  }
                </button>
                <div className="faq-body" aria-hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
