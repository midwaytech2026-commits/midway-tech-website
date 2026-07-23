import {
  ShoppingCart,
  Shirt,
  Gem,
  Hotel,
  Package,
  Ship,
  Rocket,
  Briefcase,
} from 'lucide-react'
import './Industries.css'

const industries = [
  { Icon: ShoppingCart, name: 'D2C & Ecommerce' },
  { Icon: Shirt,        name: 'Fashion & Apparel' },
  { Icon: Gem,          name: 'Jewellery Brands' },
  { Icon: Hotel,        name: 'Hospitality' },
  { Icon: Package,      name: 'FMCG Brands' },
  { Icon: Ship,         name: 'Export Businesses' },
  { Icon: Rocket,       name: 'SaaS Startups' },
  { Icon: Briefcase,    name: 'Service Businesses' },
]

export default function Industries() {
  return (
    <section className="ind-section">
      <p className="ind-eyebrow">Industries We Understand</p>
      <h2 className="ind-title">We Work With Businesses That Want to Scale.</h2>

      <div className="ind-grid">
        {industries.map(i => {
          const Icon = i.Icon
          return (
            <div key={i.name} className="ind-card">
              <Icon className="ind-icon" aria-hidden="true" />
              <span>{i.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
