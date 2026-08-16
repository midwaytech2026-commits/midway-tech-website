import { Link } from 'react-router-dom'
import { ServiceDetail, scrollToServiceSection } from '../components/common/ServiceDetail'
import type { ServiceDetailData } from '../components/common/ServiceDetail'
import imgChatbot from '../assets/images/sample-ai-chatbot.jpeg'
import imgSupport from '../assets/images/sample-ai-support.jpeg'
import imgWorkflow from '../assets/images/sample-ai-workflow.jpeg'
import imgCrm from '../assets/images/sample-ai-crm.jpeg'
import imgContent from '../assets/images/sample-ai-content.jpeg'
import imgAssistants from '../assets/images/sample-ai-assistants.jpeg'
import imgBpa from '../assets/images/sample-ai-bpa.jpeg'
import imgLeadq from '../assets/images/sample-ai-leadqua.jpeg'
import './ServiceHubPage.css'

const details: ServiceDetailData[] = [
  {
    id: 'ai-chatbot',
    anchorLabel: 'AI Chatbots',
    eyebrow: 'AI Chatbots',
    image: imgChatbot,
    imageAlt: 'AI Chatbot',
    title: 'Chatbots That Understand Your Business, Not Just Keywords',
    paragraphs: [
      'We build AI-powered chatbots that go beyond FAQ scripts — they understand intent, handle multi-turn conversations, and take actions (book meetings, update CRMs, send emails) without human intervention. We build on top of GPT-4 / Claude APIs with a Retrieval-Augmented Generation (RAG) architecture, meaning the chatbot answers from your actual business knowledge — product docs, FAQs, pricing pages — not from general AI training.',
      "We've built chatbots for dental clinics (appointment booking and triage), ecommerce brands (product recommendation and order tracking), and B2B agencies (lead qualification and calendar booking). Every chatbot we build is branded, tested extensively against edge cases, and deployed with a human escalation path — it knows when to pass to a person.",
    ],
    features: [
      'GPT-4 / Claude API with RAG on your business data',
      'Embedded on website, WhatsApp, or Instagram DMs',
      'Takes actions: books meetings, updates CRM, sends emails',
      'Human escalation path built in — knows its limits',
    ],
    techChips: ['OpenAI GPT-4', 'Claude API', 'LangChain', 'Pinecone', 'WhatsApp Business API', 'Voiceflow'],
    ctaLabel: 'Build Your AI Chatbot',
  },
  {
    id: 'ai-support',
    anchorLabel: 'AI Customer Support',
    eyebrow: 'AI Customer Support Systems',
    image: imgSupport,
    imageAlt: 'AI Customer Support',
    title: 'Support That Scales Without Adding Headcount',
    paragraphs: [
      "We build AI-powered customer support systems that handle the large share of tickets that don't need a human — order status, return policies, product questions, account issues — and intelligently route the rest. The system integrates with your existing helpdesk (Gorgias, Zendesk, Freshdesk), your order management system, and your CRM, so it has real-time access to the customer's account data when it's responding.",
      'Response times drop from hours to seconds for the questions it can handle. Customer satisfaction goes up because the common questions get instant, accurate answers. And your support team gets to focus on the complex issues that actually require empathy and judgment.',
    ],
    features: [
      'Integrates with Gorgias, Zendesk & Freshdesk',
      'Real-time order & account data lookup during chat',
      'Smart routing: AI handles tier-1, humans get tier-2',
      'CSAT tracking and continuous improvement loop',
    ],
    techChips: ['Gorgias AI', 'OpenAI', 'Zendesk', 'Shopify API', 'Freshdesk'],
    ctaLabel: 'Build Your AI Support System',
  },
  {
    id: 'ai-workflow',
    anchorLabel: 'Workflow Automation',
    eyebrow: 'Workflow Automation',
    image: imgWorkflow,
    imageAlt: 'Workflow Automation',
    title: 'Eliminate the Repetitive Work Your Team Does Every Day',
    paragraphs: [
      'Every business has processes that run on manual effort — data entry, report generation, approval chains, file organisation, invoice processing, follow-up reminders. We map these processes, identify where automation can replace human effort without reducing quality, and build the automation using n8n, Make.com, or custom code depending on complexity.',
      'Our automation builds always start with a process audit: we document the current workflow, identify the bottlenecks, calculate the time cost, and design the automated version before building anything. Every automation gets a monitoring dashboard and alerting so you know immediately if something breaks.',
    ],
    features: [
      'Process audit & automation design document',
      'n8n, Make.com or custom Node.js automation',
      'Error handling, retry logic & failure alerts',
      'Monitoring dashboard showing automation health',
    ],
    techChips: ['n8n', 'Make.com', 'Zapier', 'Node.js', 'Python', 'Webhooks'],
    ctaLabel: 'Automate Your Workflows',
  },
  {
    id: 'ai-crm',
    anchorLabel: 'CRM Automation',
    eyebrow: 'CRM Automation',
    image: imgCrm,
    imageAlt: 'CRM Automation',
    title: 'Your CRM Should Update Itself — Not Wait for Your Team',
    paragraphs: [
      'Most CRMs are graveyards of outdated data because nobody has time to update them manually. We automate the entire CRM data lifecycle: leads captured from every source (website form, LinkedIn, WhatsApp, email) are created automatically, scored based on defined criteria, assigned to the right sales rep, and moved through the pipeline based on actions they take — without anyone touching a keyboard.',
      'We work with HubSpot, Pipedrive, Zoho, and custom CRMs. Every automation we build includes logging — so you can see exactly why a lead was assigned a particular score or moved to a particular stage, and override it if needed.',
    ],
    features: [
      'Auto-capture from website, LinkedIn, WhatsApp & email',
      'AI-powered lead scoring with explainable logic',
      'Pipeline stage movement based on lead actions',
      'Automated follow-up sequences with human override',
    ],
    techChips: ['HubSpot', 'Pipedrive', 'Zoho CRM', 'n8n', 'OpenAI', 'WhatsApp API'],
    ctaLabel: 'Automate Your CRM',
  },
  {
    id: 'ai-content',
    anchorLabel: 'AI Content Systems',
    eyebrow: 'AI Content Systems',
    image: imgContent,
    imageAlt: 'AI Content Systems',
    title: 'Content at Scale, in Your Brand Voice',
    paragraphs: [
      "We build AI-powered content production systems that let your team produce far more content without a proportional increase in headcount. This isn't about replacing writers — it's about giving them a system that handles research, first drafts, and formatting so they can focus on editing, strategy, and creative decisions that actually need a human.",
      'We fine-tune the AI on your brand\'s existing content to capture your voice and terminology. The system produces SEO-researched blog posts, product descriptions, email sequences, social posts, and ad copy — all reviewed through an editorial workflow we set up in Notion or your existing CMS.',
    ],
    features: [
      'AI fine-tuned on your brand voice & terminology',
      'SEO-researched briefs generated automatically',
      'Editorial workflow in Notion or your CMS',
      'Covers: blogs, emails, product copy, ads, social',
    ],
    techChips: ['OpenAI API', 'Claude API', 'Notion AI', 'SurferSEO', 'n8n'],
    ctaLabel: 'Build Your Content Engine',
  },
  {
    id: 'ai-assistants',
    anchorLabel: 'AI Assistants',
    eyebrow: 'AI Assistants',
    image: imgAssistants,
    imageAlt: 'AI Assistants',
    title: 'Custom Internal AI Tools for Your Team',
    paragraphs: [
      'We build custom AI assistants for internal use — tools your team uses daily to do their jobs faster. This includes: sales assistants that research prospects and draft outreach, HR assistants that answer policy questions from your employee handbook, operations assistants that pull reports and summarise data on demand, and customer success tools that surface account health signals before problems escalate.',
      'These are private, secure, and trained on your company\'s data — not public knowledge. They sit inside Slack, Microsoft Teams, or a custom internal interface, depending on where your team already works.',
    ],
    features: [
      'Trained on your internal docs, data & processes',
      'Deployed in Slack, Teams or custom interface',
      'Private & secure — data never leaves your environment',
      'Sales, HR, ops & customer success variants',
    ],
    techChips: ['OpenAI API', 'LangChain', 'Pinecone', 'Slack API', 'Microsoft Graph API'],
    ctaLabel: 'Build Your AI Assistant',
  },
  {
    id: 'ai-bpa',
    anchorLabel: 'Business Process AI',
    eyebrow: 'Business Process Automation',
    image: imgBpa,
    imageAlt: 'Business Process Automation',
    title: 'Replace Manual Processes With Systems That Never Sleep',
    paragraphs: [
      "Business process automation is broader than workflow automation — it's about redesigning how entire operational functions work with AI embedded at each step. We map your business processes end-to-end, identify where AI can replace judgment calls that are currently manual, and rebuild those processes with automation at the centre.",
      'Examples: an export business where every new trade enquiry triggers a qualification AI, a pricing lookup, a quote draft, and a follow-up schedule — all before the sales team sees the lead. Or a creative agency where every new client brief triggers a research AI, a competitive analysis, a project plan, and a budget estimate — ready for the account manager to review in minutes instead of hours.',
    ],
    features: [
      'End-to-end process mapping & redesign',
      'AI embedded at each decision point in the process',
      'Full audit trail — every automated decision is logged',
      'Human oversight layer at critical decision points',
    ],
    techChips: ['n8n', 'OpenAI', 'Python', 'PostgreSQL', 'Make.com', 'Custom APIs'],
    ctaLabel: 'Redesign Your Business Processes',
  },
  {
    id: 'ai-leadq',
    anchorLabel: 'Lead Qualification AI',
    eyebrow: 'Lead Qualification AI',
    image: imgLeadq,
    imageAlt: 'Lead Qualification AI',
    title: 'Only the Best Leads Reach Your Sales Team',
    paragraphs: [
      "Unqualified leads are expensive — they waste your sales team's time on conversations that were never going to convert. We build AI lead qualification systems that interview every inbound lead (via chatbot or email sequence), score them against your ideal customer profile, and only pass the qualified ones to your sales team — with a full summary of what the lead said, what score they received, and why.",
      'The system can disqualify based on budget, company size, geography, use case fit, or any other criteria that matter to your business. It runs continuously, responds instantly, and is built to never miss a follow-up. Every qualified lead arrives in your CRM with context, so your first human conversation can start from a position of knowledge.',
    ],
    features: [
      'AI chatbot interviews & scores every inbound lead',
      'Custom qualification criteria: budget, fit, geography',
      'CRM delivery with full conversation summary',
      'Instant response — built to never miss a follow-up',
    ],
    techChips: ['OpenAI', 'LangChain', 'HubSpot', 'Pipedrive', 'WhatsApp API', 'n8n'],
    ctaLabel: 'Build Your Lead Qualification System',
  },
]

export default function ServiceAiAutomationPage() {
  return (
    <div className="hub-page hub-page--ai">
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <p className="hub-breadcrumb">
            <Link to="/">Home</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <span className="hub-breadcrumb-current">AI Solutions</span>
          </p>
          <span className="section-eyebrow">AI &amp; Automation</span>
          <h1>AI &amp; Automation Solutions</h1>
          <p>We build AI systems that give your business the operating leverage of a team twice its size. Chatbots, workflow automations, content engines, lead qualification — designed, built, and monitored by us.</p>
          <div className="hub-hero-actions">
            <Link to="/get-quote" className="btn-primary hub-cta-green">Get a Free Quote</Link>
            <Link to="/contact" className="btn-ghost">Talk to Us First</Link>
          </div>
        </div>
      </section>

      <nav className="svc-anchor-nav" aria-label="AI & Automation sections">
        <div className="svc-anchor-nav-inner">
          {details.map(d => (
            <button key={d.id} type="button" className="san-link" onClick={() => scrollToServiceSection(d.id)}>
              {d.anchorLabel}
            </button>
          ))}
        </div>
      </nav>

      <div className="svc-container">
        {details.map((d, i) => <ServiceDetail key={d.id} detail={d} accent="green" reverse={i % 2 === 1} />)}
      </div>
    </div>
  )
}
