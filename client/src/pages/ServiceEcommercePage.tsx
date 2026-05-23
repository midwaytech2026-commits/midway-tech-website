import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingBag, CreditCard, Package, Smartphone, Search,
  Zap, BarChart2, Clock, TrendingUp, Target, Globe
} from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './ServiceIosPage.css'

const included = [
  { Icon: ShoppingBag, title: 'Store Design & Build',     desc: 'Custom storefront design built around your brand and your buyer — not a template that looks like every other store.' },
  { Icon: CreditCard,  title: 'Payment Integration',      desc: 'Stripe, PayPal, Buy Now Pay Later, and local payment methods. Every option your buyers need to check out.' },
  { Icon: Package,     title: 'Inventory & Orders',       desc: 'Product management, order tracking, fulfilment workflows, and stock alerts — all configured for how your business operates.' },
  { Icon: Smartphone,  title: 'Mobile-First Commerce',    desc: 'Over 60% of ecommerce purchases happen on mobile. Your store is built mobile-first by default, not as an afterthought.' },
  { Icon: Search,      title: 'SEO-Ready Structure',      desc: 'Product pages, category pages, and site architecture structured for search — so your store gets found without paying for every visit.' },
  { Icon: Zap,         title: 'Performance Optimised',    desc: 'Page speed directly affects conversion. We build stores that load fast — especially on mobile, especially at checkout.' },
  { Icon: BarChart2,   title: 'Analytics & Tracking',     desc: 'GA4, Meta Pixel, and conversion tracking set up so you know exactly where your revenue comes from and where buyers drop off.' },
  { Icon: Clock,       title: 'Post-Launch Support',      desc: '30-day support window. Any issues with the store after launch are resolved at no extra cost.' },
]

const processSteps = [
  { step: '01', title: 'Discovery',                 duration: '1 week',    desc: 'We understand your products, your buyers, your fulfilment setup, and the platforms you are already using.' },
  { step: '02', title: 'Platform & Architecture',   duration: '3–5 days',  desc: 'We recommend the right platform for your needs — Shopify, WooCommerce, or custom — and map the store structure.' },
  { step: '03', title: 'Design',                    duration: '1–2 weeks', desc: 'Custom storefront design. You approve before any development begins.' },
  { step: '04', title: 'Development & Integration', duration: '3–6 weeks', desc: 'Store built, products configured, payments integrated, analytics wired up. Weekly updates throughout.' },
  { step: '05', title: 'Launch & Growth',           duration: 'Ongoing',   desc: 'We handle the technical launch. If you pair with our marketing services, your first campaign goes live on day one.' },
]

const faqItems = [
  {
    q: 'Shopify vs WooCommerce — which do you recommend?',
    a: "It depends on your setup. Shopify is faster to launch and easier to manage for most product businesses. WooCommerce gives more control and is better for complex catalogues or existing WordPress sites. We will give you an honest recommendation after understanding your specific situation.",
  },
  {
    q: 'Can you migrate an existing store to a new platform?',
    a: "Yes. We handle product data migration, order history, customer records, and SEO preservation (redirects, URL structure) so you do not lose rankings or customer data in the move.",
  },
  {
    q: 'Do you set up the marketing as well as the store?',
    a: "Yes — and for most ecommerce clients, this is the right approach. When the store and the marketing strategy come from the same team, the ads point to pages built to convert, the SEO structure is correct from launch, and there are no gaps between teams.",
  },
  {
    q: 'What is the minimum budget for an ecommerce build?',
    a: "A straightforward Shopify store starts from $3,500. A custom-built ecommerce platform with complex requirements starts higher. You get a specific quote after our discovery call.",
  },
  {
    q: 'How long does an ecommerce project take?',
    a: "A standard Shopify or WooCommerce store: 4–8 weeks. A complex custom build: 10–18 weeks. Timeline depends on your catalogue size, integrations, and design complexity.",
  },
]

const relatedServices = [
  { title: 'SEO for Ecommerce', slug: '/services/seo',           Icon: Search },
  { title: 'PPC & Paid Ads',    slug: '/services',               Icon: Target },
  { title: 'Web Development',   slug: '/services/web-development', Icon: Globe },
]

export default function ServiceEcommercePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="ios-page">
      <section className="ios-hero">
        <div className="ios-hero-content">
          <span className="section-eyebrow">Ecommerce Development</span>
          <h1>Online stores built to <em>sell</em> —<br />not just to look good</h1>
          <p>We build ecommerce stores around how your buyers actually behave — with marketing built in from day one, not bolted on after launch.</p>
          <div className="ios-hero-actions">
            <Link to="/contact" className="btn-primary">Start Your Store Project</Link>
            <Link to="/services" className="btn-ghost">See All Services</Link>
          </div>
        </div>
        <div className="ios-hero-panel">
          <div className="ios-snapshot">
            <div className="ios-snapshot-header">Project Snapshot</div>
            <div className="ios-snapshot-row"><span>Standard store</span><strong>4–8 weeks</strong></div>
            <div className="ios-snapshot-row"><span>Starting from</span><strong>$3,500 / £2,800</strong></div>
            <div className="ios-snapshot-row"><span>Platforms</span><strong>Shopify · WooCommerce · Custom</strong></div>
            <div className="ios-snapshot-row"><span>Payment</span><strong>Milestone-based</strong></div>
            <div className="ios-snapshot-row"><span>Markets</span><strong>EU · US · UK</strong></div>
            <Link to="/contact" className="ios-snapshot-cta">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <section className="ios-included">
        <div className="ios-container">
          <span className="section-eyebrow">What's Included</span>
          <h2>Everything your store needs to <em>launch and grow</em></h2>
          <div className="ios-included-grid">
            {included.map(({ Icon, title, desc }) => (
              <div key={title} className="ios-included-card">
                <div className="ios-included-icon-wrap"><Icon size={20} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-process">
        <div className="ios-container">
          <span className="section-eyebrow">Our Process</span>
          <h2>From product catalogue to live store</h2>
          <div className="ios-process-list">
            {processSteps.map(p => (
              <div key={p.step} className="ios-process-item">
                <div className="ios-process-step">{p.step}</div>
                <div className="ios-process-body">
                  <div className="ios-process-meta">
                    <h3>{p.title}</h3>
                    <span>{p.duration}</span>
                  </div>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-faq">
        <div className="ios-container">
          <span className="section-eyebrow">FAQ</span>
          <h2>Common questions</h2>
          <div className="ios-faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className={`ios-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="ios-faq-answer"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-related">
        <div className="ios-container">
          <h3>Related Services</h3>
          <div className="ios-related-grid">
            {relatedServices.map(({ Icon, title, slug }) => (
              <Link key={title} to={slug} className="ios-related-card">
                <Icon size={18} strokeWidth={1.5} />
                <p>{title}</p>
                <span className="ios-related-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to build a store that actually sells?"
        subtitle="Book a free discovery call. We will scope your project, recommend the right platform, and give you an honest quote."
        primaryBtn={{ label: 'Book a Free Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'View All Services', to: '/services' }}
      />
    </div>
  )
}
