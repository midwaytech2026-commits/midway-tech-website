import { Link } from 'react-router-dom'
import { ServiceDetail, scrollToServiceSection } from '../components/common/ServiceDetail'
import type { ServiceDetailData } from '../components/common/ServiceDetail'
import imgWebsite from '../assets/images/sample-product-website.jpeg'
import imgEcommerce from '../assets/images/sample-product-ecommerce.jpeg'
import imgMobile from '../assets/images/sample-product-mobile.jpeg'
import imgSoftware from '../assets/images/sample-product-software.jpeg'
import imgWebapp from '../assets/images/sample-product-webapp.jpeg'
import imgUiux from '../assets/images/sample-product-uiux.jpeg'
import imgCrm from '../assets/images/sample-product-crm.jpeg'
import imgApi from '../assets/images/sample-product-api.jpeg'
import imgSaas from '../assets/images/sample-product-saas.jpeg'
import './ServiceHubPage.css'

const details: ServiceDetailData[] = [
  {
    id: 'pd-web',
    anchorLabel: 'Website Dev',
    eyebrow: 'Website Development',
    image: imgWebsite,
    imageAlt: 'Website development',
    title: 'Websites That Work Hard, Not Just Look Good',
    paragraphs: [
      'We build high-performance websites using modern frameworks — primarily Next.js and React — deployed on scalable infrastructure like Vercel or AWS. Every site we deliver is mobile-first, SEO-optimised from the ground up, and built with clean, maintainable code that your team can hand off to any developer without confusion. We handle everything: architecture, design system, CMS integration (Sanity, Contentful, or WordPress headless), performance tuning, and post-launch support.',
      'Whether you need a brochure site, a conversion-focused landing page, or a complex multi-locale marketing site, we scope it honestly and build it to outlast the trend it was made in.',
    ],
    features: [
      'Next.js / React with TypeScript',
      'CMS integration — Sanity, Contentful, WordPress',
      'Core Web Vitals optimised (95+ Lighthouse score)',
      'SEO architecture from the first commit',
    ],
    techChips: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Vercel', 'AWS'],
    ctaLabel: 'Get a Quote for Your Website',
  },
  {
    id: 'pd-shopify',
    anchorLabel: 'Ecommerce / Shopify',
    eyebrow: 'Ecommerce / Shopify Development',
    image: imgEcommerce,
    imageAlt: 'Ecommerce Shopify',
    title: 'Shopify Stores Built to Sell, Not Just to Launch',
    paragraphs: [
      "We specialise in Shopify and Shopify Plus development for D2C brands entering international markets. Our builds aren't just storefronts — they're conversion systems. We design every element with purchase intent in mind: product page architecture, trust signals, cart flow, checkout optimisation, and post-purchase upsell sequences built natively in Shopify or via best-in-class apps like Klaviyo, ReCharge, and Gorgias.",
      "For brands that have outgrown standard Shopify themes, we build fully custom Liquid + React storefronts using Shopify's Headless Commerce API — giving you unlimited design flexibility without sacrificing the Shopify checkout's high conversion rates.",
    ],
    features: [
      'Custom Shopify theme development (Liquid)',
      'Headless Shopify with Next.js storefront',
      'Klaviyo, ReCharge, Gorgias integration',
      'Checkout & conversion rate optimisation',
    ],
    techChips: ['Shopify', 'Shopify Plus', 'Liquid', 'Klaviyo', 'ReCharge', 'Next.js'],
    ctaLabel: 'Get a Shopify Quote',
  },
  {
    id: 'pd-mobile',
    anchorLabel: 'Mobile Apps',
    eyebrow: 'Mobile App Development',
    image: imgMobile,
    imageAlt: 'Mobile apps',
    title: 'iOS & Android Apps That Users Actually Keep',
    paragraphs: [
      "We build mobile applications using React Native for cross-platform delivery and Flutter where native performance is non-negotiable. Our approach starts with product thinking — we map user journeys, define the minimum lovable feature set, and build the onboarding flow before writing a single line of production code. The result is apps that retain users, not just acquire them.",
      "We've built apps across the dating, gifting, and SaaS categories — from concept to App Store / Play Store. Every app we ship includes push notification infrastructure, analytics instrumentation (Mixpanel or Amplitude), deep linking, and a backend API built in Node.js or Python/FastAPI depending on your stack requirements.",
    ],
    features: [
      'React Native — single codebase, iOS & Android',
      'Flutter for native performance requirements',
      'App Store & Play Store submission support',
      'Analytics, push notifications, deep linking',
    ],
    techChips: ['React Native', 'Flutter', 'Node.js', 'Firebase', 'Expo', 'Mixpanel'],
    ctaLabel: 'Start Your App Project',
  },
  {
    id: 'pd-software',
    anchorLabel: 'Custom Software',
    eyebrow: 'Custom Software Development',
    image: imgSoftware,
    imageAlt: 'Custom software development',
    title: 'Software That Fits Your Business — Not the Other Way Around',
    paragraphs: [
      'Off-the-shelf tools eventually create constraints. When your operation outgrows what Zapier and a SaaS stack can hold together, we build the custom software layer that plugs the gap. This includes internal tools, admin dashboards, inventory systems, booking engines, and workflow applications — built with a full Node.js / Express or Python / FastAPI backend, PostgreSQL or MongoDB database, and a React frontend.',
      'We follow a spec-first process: before writing code, we document every screen, every user role, every data model, and every edge case. This means fewer surprises, faster builds, and software that your team can actually maintain after handoff.',
    ],
    features: [
      'Full-stack: Node.js / Python backend + React frontend',
      'PostgreSQL / MongoDB — structured or document data',
      'Spec-first development with full documentation',
      'Role-based access, audit logs, admin dashboards',
    ],
    techChips: ['Node.js', 'Express', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'MongoDB'],
    ctaLabel: 'Discuss Your Software Project',
  },
  {
    id: 'pd-webapp',
    anchorLabel: 'Web Applications',
    eyebrow: 'Web Application Development',
    image: imgWebapp,
    imageAlt: 'Web application',
    title: 'Complex Web Apps Built for Scale and Speed',
    paragraphs: [
      'Web applications are not websites. They have state, user sessions, real-time data, permissions systems, and workflows that need to work reliably at scale. We build web applications using React or Next.js on the frontend, with REST or GraphQL APIs on the backend, deployed on AWS or GCP with auto-scaling configured from day one.',
      "We're experienced building multi-tenant SaaS apps, marketplace platforms, CRM-style tools, and customer portals. Our development process includes proper database schema design, API documentation (OpenAPI spec), environment separation (dev/staging/production), and CI/CD pipelines so your team ships without breaking things.",
    ],
    features: [
      'React / Next.js frontend with server-side rendering',
      'REST or GraphQL API with OpenAPI documentation',
      'Auth: JWT, OAuth2, SSO integrations',
      'CI/CD pipeline, staging environment, monitoring',
    ],
    techChips: ['React', 'Next.js', 'GraphQL', 'AWS', 'Docker', 'GitHub Actions'],
    ctaLabel: 'Get a Web App Quote',
  },
  {
    id: 'pd-uiux',
    anchorLabel: 'UI/UX Design',
    eyebrow: 'UI/UX Design',
    image: imgUiux,
    imageAlt: 'UI UX Design',
    title: 'Design That Converts, Not Just Impresses',
    paragraphs: [
      'We design in Figma, starting with user research and information architecture before opening a single artboard. Our process covers user flows, wireframes, component library creation, high-fidelity mockups, and interactive prototypes — all reviewed with you at each stage before anything moves to development. We design systems, not screens — which means every component is reusable, every spacing rule is documented, and your developers can build without guessing.',
      "Our design philosophy: every visual decision should be justifiable by user behaviour or business outcome. We don't design for awards. We design for retention, conversion, and clarity.",
    ],
    features: [
      'User research, personas & journey mapping',
      'Wireframes → hi-fi Figma designs → dev handoff',
      'Full design system: tokens, components, variants',
      'Interactive Figma prototype for stakeholder sign-off',
    ],
    techChips: ['Figma', 'FigJam', 'Framer', 'Maze (testing)', 'Lottie'],
    ctaLabel: 'Start With a Design Sprint',
  },
  {
    id: 'pd-crm',
    anchorLabel: 'CRM Development',
    eyebrow: 'CRM Development',
    image: imgCrm,
    imageAlt: 'CRM Development',
    title: 'Custom CRMs Built Around How Your Team Actually Works',
    paragraphs: [
      "Off-the-shelf CRMs like HubSpot or Salesforce are powerful — until they're not. When your sales process, pipeline stages, or data structure doesn't fit standard templates, we build a custom CRM that does. Our CRM builds sit on top of a relational database (PostgreSQL), have a React-based admin interface, and connect to your existing tools — email, calendar, WhatsApp, payment systems — via API integrations.",
      "We've built CRMs for service businesses, export companies, and agencies. Key features typically include: pipeline kanban views, lead scoring rules, activity logging, automated follow-up sequences, reporting dashboards, and role-based access for different team members.",
    ],
    features: [
      'Custom pipeline, stages & lead scoring logic',
      'Email, WhatsApp & calendar integrations',
      'Reporting dashboards & exportable data',
      'Role-based access: sales reps, managers, admins',
    ],
    techChips: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp API', 'Google Calendar API'],
    ctaLabel: 'Discuss Your CRM Requirements',
  },
  {
    id: 'pd-api',
    anchorLabel: 'API Integrations',
    eyebrow: 'API Integrations',
    image: imgApi,
    imageAlt: 'API integrations',
    title: 'Connect Every Tool in Your Stack — Without Duct Tape',
    paragraphs: [
      "Most businesses run on a dozen or more SaaS tools that don't talk to each other. We build the integration layer that fixes that. Whether it's connecting your Shopify store to your 3PL for automated order fulfillment, syncing your CRM to your email platform, or building a webhook-driven automation that triggers across five tools when a lead converts — we design and build it as a reliable, documented, monitored system.",
      'We work with REST APIs, GraphQL, webhooks, and batch data sync processes. Every integration we build includes error handling, retry logic, alerting for failures, and documentation so any developer can maintain it after handoff.',
    ],
    features: [
      'REST & GraphQL API design and integration',
      'Webhook systems with error handling & retry logic',
      'Shopify, Stripe, HubSpot, Klaviyo, and more',
      'Failure alerting, monitoring & full documentation',
    ],
    techChips: ['Node.js', 'Zapier (complex)', 'n8n', 'Stripe', 'HubSpot API', 'Shopify API'],
    ctaLabel: 'Get an Integration Quote',
  },
  {
    id: 'pd-saas',
    anchorLabel: 'SaaS Development',
    eyebrow: 'SaaS Development',
    image: imgSaas,
    imageAlt: 'SaaS development',
    title: 'From Zero to Paying Customers — Faster Than You Think',
    paragraphs: [
      "We build SaaS products from MVP to production-ready platform. Our SaaS builds include multi-tenancy from the start (no retrofitting), subscription billing via Stripe, onboarding flows, in-app analytics, and a scalable infrastructure setup on AWS or GCP. We've built B2B and B2C SaaS tools — and we understand the difference between building a product that gets initial users and building a product that retains them.",
      "We start with a scoping sprint: competitive analysis, feature prioritisation, architecture decision, and a full Figma prototype — before a single line of production code. This means no wasted engineering time on features that users won't care about.",
    ],
    features: [
      'Multi-tenant architecture from day one',
      'Stripe billing: subscriptions, trials, usage-based',
      'Onboarding flows & in-app analytics instrumentation',
      'Scalable AWS/GCP infra with auto-scaling',
    ],
    techChips: ['Next.js', 'Node.js', 'Stripe', 'AWS', 'PostgreSQL', 'Redis', 'Prisma'],
    ctaLabel: 'Build Your SaaS Product',
  },
]

export default function ServiceProductTechnologyPage() {
  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <p className="hub-breadcrumb">
            <Link to="/">Home</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <span className="hub-breadcrumb-current">Product Development</span>
          </p>
          <span className="section-eyebrow">Product &amp; Technology</span>
          <h1>Product &amp; Technology Development</h1>
          <p>From custom websites to mobile apps, SaaS platforms to Shopify stores — we build digital products that are engineered to scale, not just to launch. Every project is code-reviewed, tested, and deployed to global standards.</p>
          <div className="hub-hero-actions">
            <Link to="/get-quote" className="btn-primary">Get a Free Quote</Link>
            <Link to="/contact" className="btn-ghost">Talk to Us First</Link>
          </div>
        </div>
      </section>

      <nav className="svc-anchor-nav" aria-label="Product & Technology sections">
        <div className="svc-anchor-nav-inner">
          {details.map(d => (
            <button key={d.id} type="button" className="san-link" onClick={() => scrollToServiceSection(d.id)}>
              {d.anchorLabel}
            </button>
          ))}
        </div>
      </nav>

      <div className="svc-container">
        {details.map((d, i) => <ServiceDetail key={d.id} detail={d} reverse={i % 2 === 1} />)}
      </div>
    </div>
  )
}
