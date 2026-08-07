import { Sparkles, MessageSquareText, Workflow, PenTool, Database, ArrowRight } from 'lucide-react'
import './AiSolutions.css'

const features = [
  { Icon: MessageSquareText, title: 'AI Sales Assistant' },
  { Icon: Workflow,          title: 'Workflow Automation' },
  { Icon: PenTool,           title: 'AI Content Engine' },
  { Icon: Database,          title: 'CRM Automation' },
]

export default function AiSolutions() {
  return (
    <section className="ai-section">
      <span className="ai-badge">
        <Sparkles className="ai-badge-icon" aria-hidden="true" />
        AI Solutions
      </span>

      <h2 className="ai-title">Your Competitors Are Doing Manually What Our Clients Do Automatically.</h2>
      <p className="ai-sub">
        From qualifying leads to generating content at scale — we build AI systems that give your
        business operating leverage.
      </p>

      <a href="#contact" className="btn-primary ai-cta">
        Ask About AI Automation
        <ArrowRight className="ai-cta-icon" aria-hidden="true" />
      </a>

      <div className="ai-grid">
        {features.map(f => {
          const Icon = f.Icon
          return (
            <div key={f.title} className="ai-card">
              <div className="ai-card-icon-wrap">
                <Icon className="ai-card-icon" aria-hidden="true" />
              </div>
              <h3>{f.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
