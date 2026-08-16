import { Link } from 'react-router-dom'
import {
  Sparkles, UserPlus, BrainCircuit, Database, Send, ArrowRight,
  Headset, Workflow, FileText, Users,
} from 'lucide-react'
import './AiSolutions.css'

const workflow = [
  { Icon: UserPlus,     label: 'Lead arrives via website' },
  { Icon: BrainCircuit, label: 'AI qualifies & scores lead' },
  { Icon: Database,     label: 'Routes to CRM + notifies team' },
  { Icon: Send,         label: 'Follow-up email sent' },
]

const aiCards = [
  { Icon: Headset,   title: 'AI Sales Assistant',   desc: 'Qualifies leads, answers questions, books calls — 24/7.' },
  { Icon: Workflow,  title: 'Workflow Automation',  desc: 'Connect tools, eliminate manual steps, reduce errors.' },
  { Icon: FileText,  title: 'AI Content Engine',    desc: 'Brief, draft, repurpose, publish — content at scale.' },
  { Icon: Users,     title: 'CRM Automation',       desc: 'Leads scored, routed, followed up — automatically.' },
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
            From qualifying leads at midnight to generating content at scale — we build AI systems that give
            your business the operating leverage of a team twice its size.
          </p>

          <Link to="/services/ai-automation" className="btn-primary ai-cta">
            Explore AI Solutions
            <ArrowRight className="ai-cta-icon" aria-hidden="true" />
          </Link>
        </div>

        <div className="ai-workflow" aria-hidden="true">
          {workflow.map((step, i) => {
            const Icon = step.Icon
            const isFirst = i === 0
            const isSecond = i === 1
            const isThird = i === 2
            const isLast = i === workflow.length - 1
            return (
              <div key={step.label} className="ai-workflow-step">
                {i < workflow.length - 1 && <span className="ai-workflow-connector" />}
                <span className="ai-workflow-icon-wrap">
                  <Icon className="ai-workflow-icon" />
                </span>
                <span className="ai-workflow-label">{step.label}</span>
                {(isFirst || isSecond || isThird || isLast) && (
                  <span className={`ai-workflow-status${isSecond ? ' ai-workflow-status-orange' : ''}${isThird ? ' ai-workflow-status-blue' : ''}`}>
                    {isFirst ? 'Trigger' : isSecond ? 'AI' : isThird ? 'Auto' : 'Done'}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="ai-cards">
        {aiCards.map(c => {
          const Icon = c.Icon
          return (
            <div key={c.title} className="ai-card">
              <div className="ai-card-icon-wrap">
                <Icon className="ai-card-icon" aria-hidden="true" />
              </div>
              <div className="ai-card-t">{c.title}</div>
              <div className="ai-card-d">{c.desc}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
