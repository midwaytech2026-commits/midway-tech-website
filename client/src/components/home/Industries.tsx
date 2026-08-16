import { ShoppingBag, Shirt, Gem, Building2, Package2, Globe2 } from 'lucide-react'
import './Industries.css'

const industries = [
  { Icon: ShoppingBag, name: 'D2C & Ecommerce', desc: 'Shopify, performance, retention' },
  { Icon: Shirt,        name: 'Fashion & Apparel', desc: 'Brand, content, ecommerce' },
  { Icon: Gem,          name: 'Jewellery Brands', desc: 'Luxury positioning, SEO, Shopify' },
  { Icon: Building2,    name: 'Hospitality', desc: 'Booking systems, CRM, reputation' },
  { Icon: Package2,     name: 'FMCG Brands', desc: 'D2C channels, digital presence' },
  { Icon: Globe2,       name: 'Export Businesses', desc: 'Digital storefronts, LinkedIn, leads' },
]

export default function Industries() {
  return (
    <section className="ind-section">
      <div className="ind-header">
        <div>
          <p className="ind-eyebrow">Industries We Understand</p>
          <h2 className="ind-title">We Don&apos;t Work With Everyone.<br />We Work With Businesses That Want to Scale.</h2>
        </div>
        <p className="ind-sub">
          We&apos;ve built marketing systems, ecommerce stores, and AI automations across these industries
          — and we understand what makes each different.
        </p>
      </div>

      <div className="ind-grid">
        {industries.map(i => (
          <div key={i.name} className="ind-tile">
            <div className="ind-icon-wrap">
              <i.Icon className="ind-icon" aria-hidden="true" />
            </div>
            <div>
              <div className="ind-t">{i.name}</div>
              <div className="ind-s">{i.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
