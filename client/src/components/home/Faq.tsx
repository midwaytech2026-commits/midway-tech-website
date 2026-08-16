import { useState } from 'react'
import { Plus } from 'lucide-react'
import './Faq.css'

const faqs = [
  {
    q: 'Are you a marketing agency or a tech agency?',
    a: "Neither, and both. MidwayTech is a growth and technology partner. One team handles your Shopify store, your ad campaigns, and your AI chatbot — because they're all connected to the same outcome.",
  },
  {
    q: "We're based in the US/UK — do you work internationally?",
    a: 'Yes — all our clients are international. We operate on US/UK/EU time zones and deliver to global standards. Being based in Jaipur, India means better margins for you, not lower quality.',
  },
  {
    q: "What's the typical engagement structure?",
    a: 'Monthly retainers for ongoing marketing and AI services. Project-based for technology builds. No 12-month minimum lock-ins — if we stop delivering value, you should be able to leave.',
  },
  {
    q: 'What makes you different from other agencies?',
    a: "We build your Shopify store, run your email marketing, and deploy your AI chatbot — and because it's one team, they all work together. That integration is the real difference.",
  },
  {
    q: 'How do we get started?',
    a: "Fill out the Get a Quote form. We'll review your situation and reply within 24 hours with a detailed project estimate — no pitch, no obligation.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq-section">
      <div className="faq-container">
        <p className="faq-eyebrow">Common Questions</p>
        <h2 className="faq-title">Honest Answers to Questions Every Founder Asks</h2>

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
                  <span className="faq-toggle-circle">
                    <Plus className="faq-toggle-icon" aria-hidden="true" />
                  </span>
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
