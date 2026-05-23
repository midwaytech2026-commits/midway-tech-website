import {
  Globe, Smartphone, ShoppingCart, Bot, RefreshCw, Rocket, Wrench,
  LayoutDashboard, Search, Target, PenTool, Share2, Mail, Users,
  Megaphone, TrendingUp, Zap, Building2, Store, Laptop, Package
} from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './ServicesPage.css'

const devServices = [
  {
    Icon: Globe,
    title: 'Web Development',
    desc: 'Fast, conversion-optimised websites built to last and perform.',
    bullets: ['Responsive & mobile-first', 'Performance optimised', 'CMS integration', 'SEO-ready structure', 'Conversion focused'],
  },
  {
    Icon: LayoutDashboard,
    title: 'Web App Development',
    desc: 'Complex applications made simple for the people who use them.',
    bullets: ['Custom SaaS platforms', 'Dashboard & admin tools', 'API integrations', 'Authentication & security', 'Scalable architecture'],
  },
  {
    Icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'iOS and Android apps — built for the users you actually have.',
    bullets: ['iOS (Swift / SwiftUI)', 'Android (Kotlin)', 'React Native / Flutter', 'App Store submission', 'Push notifications'],
  },
  {
    Icon: ShoppingCart,
    title: 'Ecommerce Development',
    desc: 'Stores built to sell, not just to showcase.',
    bullets: ['Shopify & WooCommerce', 'Custom checkout flows', 'Payment integration', 'Inventory management', 'Conversion optimisation'],
  },
  {
    Icon: Bot,
    title: 'AI Integrations',
    desc: 'Practical AI that saves your team time and creates a real edge over competitors.',
    bullets: ['Chatbots & support AI', 'LLM integrations (OpenAI, Anthropic)', 'Document processing', 'Recommendation engines', 'AI workflow automation'],
  },
  {
    Icon: RefreshCw,
    title: 'Website Revamps',
    desc: 'Modernise your existing site without unnecessary full rebuilds.',
    bullets: ['Design refresh', 'Performance audit & fix', 'CMS migration', 'Mobile optimisation', 'SEO preservation'],
  },
  {
    Icon: Rocket,
    title: 'Startup MVP Development',
    desc: 'Launch lean. Validate fast. Build what matters first.',
    bullets: ['Scope workshop included', 'Design + dev in one team', 'Investor-ready output', 'Backend API included', 'Post-launch review'],
  },
  {
    Icon: Wrench,
    title: 'Maintenance & Scaling',
    desc: 'We stay involved after launch. Your product grows with your business.',
    bullets: ['Bug fixes & updates', 'Performance monitoring', 'Feature additions', 'Security patches', 'Hosting & infrastructure'],
  },
]

const marketingServices = [
  {
    Icon: Search,
    title: 'SEO',
    desc: 'Organic visibility that compounds month on month. Traffic that converts.',
    bullets: ['Technical SEO audit', 'On-page optimisation', 'Content strategy', 'Link building', 'Monthly reporting'],
  },
  {
    Icon: Target,
    title: 'PPC & Paid Advertising',
    desc: 'Every pound or dollar of ad spend tracked and accountable to real returns.',
    bullets: ['Google Ads management', 'Meta (Facebook/Instagram) Ads', 'Landing page optimisation', 'A/B testing', 'ROAS tracking'],
  },
  {
    Icon: PenTool,
    title: 'Content Marketing',
    desc: 'Content that builds genuine authority and drives real business decisions.',
    bullets: ['Content strategy', 'Blog & article writing', 'Lead magnets', 'Case study creation', 'Distribution planning'],
  },
  {
    Icon: Share2,
    title: 'Social Media Marketing',
    desc: 'A social presence that means something to your actual audience.',
    bullets: ['Platform strategy', 'Content creation', 'Community management', 'Paid social', 'Analytics reporting'],
  },
  {
    Icon: Mail,
    title: 'Email Marketing',
    desc: 'The highest-ROI channel available when treated as a strategy.',
    bullets: ['List building strategy', 'Campaign design & copy', 'Automation flows', 'Segmentation', 'A/B testing'],
  },
  {
    Icon: Users,
    title: 'Influencer Marketing',
    desc: 'The right voices, reaching the right audiences, for your product.',
    bullets: ['Influencer sourcing', 'Campaign brief creation', 'Contract & delivery', 'Performance tracking', 'ROI reporting'],
  },
  {
    Icon: Megaphone,
    title: 'PR & Brand Visibility',
    desc: 'Be known in the right rooms. Build credibility before your competitors do.',
    bullets: ['Press release writing', 'Media outreach', 'Publication placement', 'Brand positioning', 'Crisis communication'],
  },
  {
    Icon: TrendingUp,
    title: 'Growth Marketing',
    desc: 'Systematic, data-led growth across every relevant channel.',
    bullets: ['Full-funnel strategy', 'Channel mix planning', 'Experiment framework', 'CRO (conversion rate)', 'Growth analytics'],
  },
]

const clients = [
  { Icon: Rocket,    name: 'Startups building their first product', desc: "You have funding, an idea, and need a partner who won't drain your runway." },
  { Icon: Store,     name: 'Ecommerce brands', desc: 'You need a store that performs and marketing that drives consistent, trackable revenue.' },
  { Icon: Laptop,    name: 'SaaS companies', desc: "Product development and growth marketing working together — because in SaaS, they can't be separated." },
  { Icon: Building2, name: 'Local businesses going digital', desc: 'A website and marketing strategy that brings real customers through real doors.' },
  { Icon: RefreshCw, name: 'Businesses with an outdated digital presence', desc: "Your product or site no longer reflects where you're going. We fix that." },
  { Icon: Package,   name: 'Funded startups', desc: 'You have budget and ambition. You need an agency that spends both wisely.' },
]

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="sp-hero">
        <div className="sp-hero-inner">
          <span className="section-eyebrow">Our Services</span>
          <h1>Build it. Launch it.<br /><em>Grow it.</em> All in one place.</h1>
          <p>Technology development and growth marketing services — working together from day one. We'll only recommend what your business actually needs.</p>
        </div>
      </section>

      <section className="sp-services">
        <div className="sp-container">
          <div className="sp-group-header">
            <span className="sp-group-tag sp-group-tag--dev">Development & Product</span>
            <h2>We build products people actually want to use.</h2>
            <p>From your first MVP to a fully scaled platform — we scope exactly what's needed and build it right. No unnecessary complexity.</p>
          </div>
          <div className="sp-services-grid">
            {devServices.map(({ Icon, title, desc, bullets }) => (
              <div key={title} className="sp-service-card">
                <div className="sp-service-icon sp-service-icon--dev"><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>
                  {bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-services sp-services--marketing">
        <div className="sp-container">
          <div className="sp-group-header">
            <span className="sp-group-tag sp-group-tag--marketing">Growth & Marketing</span>
            <h2>We grow the products we build — and the ones you already have.</h2>
            <p>Marketing without understanding your product is guesswork. We don't do guesswork. We market from a position of real understanding.</p>
          </div>
          <div className="sp-services-grid">
            {marketingServices.map(({ Icon, title, desc, bullets }) => (
              <div key={title} className="sp-service-card sp-service-card--marketing">
                <div className="sp-service-icon sp-service-icon--marketing"><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>
                  {bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-clients">
        <div className="sp-container">
          <span className="section-eyebrow">Who We Work With</span>
          <h2>Built for businesses that are serious about growth.</h2>
          <div className="sp-clients-grid">
            {clients.map(({ Icon, name, desc }) => (
              <div key={name} className="sp-client-card">
                <div className="sp-client-icon-wrap"><Icon size={20} strokeWidth={1.5} /></div>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Not sure which services you need? That's what the discovery call is for."
        subtitle="We'll listen to what you're trying to achieve and tell you honestly which combination of services will actually get you there."
        primaryBtn={{ label: 'Book a Free Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'See Our Work', to: '/portfolio' }}
      />
    </div>
  )
}
