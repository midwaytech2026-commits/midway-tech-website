import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './Faq.css'

const faqs = [
  {
    q: 'Are you a marketing agency or a tech agency?',
    a: 'Neither, and both. MidwayTech is a growth and technology partner. One team handles your website, apps, marketing systems, and AI automation because they are all connected to the same business outcome.',
  },
  {
    q: 'Do you work internationally?',
    a: 'Yes. We can work remotely with businesses across different regions and time zones.',
  },
  {
    q: 'What is the typical engagement structure?',
    a: 'We begin with discovery, define scope, provide a written quote, and then work in milestones with weekly updates.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a free strategy call. We’ll understand your business, goals, and current systems, then recommend the right next step.',
  },
  {
    q: 'How much does a typical project cost?',
    a: 'Pricing depends on scope, features, timeline, and integrations. After a discovery call, we provide a written quote so you know exactly what is included before work begins.',
  },
  {
    q: 'What is the typical project timeline?',
    a: 'Small websites or focused automation systems can move faster, while custom apps and platforms need more planning, design, development, and testing. We define the timeline clearly before starting and share progress every week.',
  },
  {
    q: 'Who owns the code, design, and final product?',
    a: 'After final payment, the agreed source code, design files, and final deliverables belong to you. We also prefer working in your repository from the start so ownership stays clear.',
  },
  {
    q: 'How do payments work for international clients?',
    a: 'Payment structure depends on the project scope. For most engagements, we work with milestone-based payments so both sides know what is being delivered before the next stage begins.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

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
                    {isOpen
                      ? <ChevronUp className="faq-toggle-icon" aria-hidden="true" />
                      : <ChevronDown className="faq-toggle-icon" aria-hidden="true" />
                    }
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
