import { Sparkles, UserPlus, BrainCircuit, Database, Send, ArrowRight } from 'lucide-react'
import './AiSolutions.css'

const workflow = [
  { Icon: UserPlus,     label: 'Lead Arrives' },
  { Icon: BrainCircuit, label: 'AI Qualifies' },
  { Icon: Database,     label: 'CRM Updates' },
  { Icon: Send,         label: 'Follow-Up Sent' },
]

export default function AiSolutions() {
  return (
    <section className="ai-section">
      <div className="ai-layout">
        <div className="ai-text">
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
        </div>

        <div className="ai-workflow" aria-hidden="true">
          {workflow.map((step, i) => {
            const Icon = step.Icon
            const isFirst = i === 0
            const isLast = i === workflow.length - 1
            return (
              <div key={step.label} className="ai-workflow-step">
                {i < workflow.length - 1 && <span className="ai-workflow-connector" />}
                <span className="ai-workflow-icon-wrap">
                  <Icon className="ai-workflow-icon" />
                </span>
                <span className="ai-workflow-label">{step.label}</span>
                {(isFirst || isLast) && (
                  <span className="ai-workflow-status">{isFirst ? 'Trigger' : 'Done'}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
