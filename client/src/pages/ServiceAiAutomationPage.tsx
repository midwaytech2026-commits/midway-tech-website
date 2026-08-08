import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquareText,
  Filter,
  Workflow,
  Database,
  FileText,
  Bot,
  Inbox,
  BrainCircuit,
  BellRing,
  ArrowRight,
} from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceHubPage.css'

const categories = [
  'AI Chatbots',
  'Lead Qualification',
  'Workflow Automation',
  'CRM Automation',
  'AI Content Systems',
  'Internal Assistants',
]

const services = [
  {
    Icon: MessageSquareText,
    title: 'AI Sales Assistant',
    desc: 'AI-assisted chat and enquiry flows that help answer questions, qualify leads, and route conversations.',
    tags: ['Chatbot', 'Lead Capture', 'Qualification', 'Routing'],
  },
  {
    Icon: Filter,
    title: 'Lead Qualification Workflow',
    desc: 'Systems that score enquiries, organize information, and help your team focus on the right opportunities.',
    tags: ['Lead Scoring', 'CRM', 'Forms', 'Notifications'],
  },
  {
    Icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Automations that connect repetitive tasks across tools so teams spend less time copying, pasting, and chasing updates.',
    tags: ['Zapier', 'Make', 'APIs', 'Operations'],
  },
  {
    Icon: Database,
    title: 'CRM Automation',
    desc: 'Cleaner lead pipelines, follow-up reminders, status updates, and internal visibility across your sales process.',
    tags: ['CRM', 'Pipeline', 'Follow-Up', 'Reporting'],
  },
  {
    Icon: FileText,
    title: 'AI Content System',
    desc: 'Structured AI-assisted workflows for briefs, drafts, repurposing, and publishing support.',
    tags: ['Content Ops', 'Briefs', 'Drafts', 'Repurposing'],
  },
  {
    Icon: Bot,
    title: 'Internal AI Assistant',
    desc: 'Private knowledge assistants and support tools trained around your processes, documents, and team workflows.',
    tags: ['Knowledge Base', 'Support', 'Search', 'Internal Tools'],
  },
]

const workflow = [
  { Icon: Inbox,        label: 'Input' },
  { Icon: BrainCircuit, label: 'AI Processing' },
  { Icon: Database,     label: 'CRM Update' },
  { Icon: BellRing,     label: 'Team Notification' },
]

export default function ServiceAiAutomationPage() {
  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <p className="hub-breadcrumb">
            <Link to="/">Home</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <span className="hub-breadcrumb-current">AI &amp; Automation</span>
          </p>
          <span className="section-eyebrow">AI &amp; Automation</span>
          <h1>AI &amp; Automation Systems</h1>
          <p>AI assistants, workflows, CRM automation, and internal systems that reduce manual work and help teams move faster.</p>
          <div className="hub-hero-actions">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/contact" className="btn-ghost">Ask About AI Automation</Link>
          </div>
        </div>
      </section>

      <div className="hub-chips-row">
        {categories.map(c => <span key={c} className="hub-chip">{c}</span>)}
      </div>

      <section className="hub-cards-section">
        <div className="hub-grid">
          {services.map(s => (
            <div key={s.title} className="hub-card">
              <div className="hub-card-icon-wrap">
                <s.Icon className="hub-card-icon" aria-hidden="true" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="hub-card-tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hub-workflow-section" aria-hidden="true">
        <span className="section-eyebrow">How It Works</span>
        <h2>A Typical AI Automation Flow</h2>
        <div className="hub-workflow-row">
          {workflow.map((step, i) => (
            <Fragment key={step.label}>
              <div className="hub-workflow-step">
                <span className="hub-workflow-icon-wrap">
                  <step.Icon className="hub-workflow-icon" />
                </span>
                <span className="hub-workflow-label">{step.label}</span>
              </div>
              {i < workflow.length - 1 && (
                <ArrowRight className="hub-workflow-arrow" />
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Want to automate a manual workflow?"
        subtitle="Tell us what's slow or repetitive. We'll help you see what's worth automating."
        primaryBtn={{ label: 'Get a Free Quote', to: '/contact' }}
      />
    </div>
  )
}
