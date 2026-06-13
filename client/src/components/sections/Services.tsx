import './Services.css'

const services = [
  {
    id: '1',
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform iOS and Android apps built for performance, scalability, and App Store approval.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    id: '2',
    icon: '🌐',
    title: 'Website Development',
    description: 'Custom websites and web applications built for speed, SEO, and conversion — from landing pages to full platforms.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: '3',
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Wireframes, prototypes, and pixel-perfect Figma designs that feel intuitive and convert users into loyal customers.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    id: '4',
    icon: '🚀',
    title: 'MVP Development',
    description: 'Validate your idea in 8–12 weeks with a lean, investor-ready MVP — built to test, iterate, and grow fast.',
    tags: ['Rapid Build', 'User Testing', 'Product Strategy'],
  },
  {
    id: '5',
    icon: '🤖',
    title: 'AI Automation',
    description: 'Intelligent workflows, AI integrations, and automation systems that reduce manual work and unlock new capabilities.',
    tags: ['LLM Integration', 'Workflow AI', 'Smart Agents'],
  },
  {
    id: '6',
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Growth-focused SEO, performance ads, and content strategy that brings the right audience to your product.',
    tags: ['SEO', 'Performance Ads', 'Growth Strategy'],
  },
  {
    id: '7',
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Robust APIs, databases, and cloud infrastructure designed for scale, security, and seamless integrations.',
    tags: ['Node.js', 'PostgreSQL', 'AWS / GCP'],
  },
  {
    id: '8',
    icon: '💡',
    title: 'Brand & Product Strategy',
    description: 'Positioning, product roadmaps, and go-to-market planning that align your vision with what the market actually needs.',
    tags: ['Product Roadmap', 'Brand Positioning', 'GTM Planning'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <p className="section-eyebrow">What We Can Do</p>
      <h2 className="section-title">Built for growing<br />businesses.</h2>
      <p className="section-sub">From lean MVPs to full-scale digital products — we bring the strategy, design, and engineering to get you there.</p>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.title}</div>
            <div className="service-desc">{service.description}</div>
            <div className="service-tags">
              {service.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
