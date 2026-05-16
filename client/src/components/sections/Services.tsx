import { useApi } from '../../hooks/useApi'
import { api } from '../../services/api'
import type { Service } from '../../types'
import './Services.css'

const fallbackServices: Service[] = [
  { _id: '1', icon: '📱', title: 'iOS App Development', description: 'Native Swift apps built for performance, Apple HIG compliance, and App Store approval on the first submission.', tags: ['Swift', 'SwiftUI', 'Xcode'], order: 1 },
  { _id: '2', icon: '🤖', title: 'Android App Development', description: 'Kotlin-first Android apps optimised for Google Play, covering phones, tablets, and wearables.', tags: ['Kotlin', 'Jetpack', 'Material 3'], order: 2 },
  { _id: '3', icon: '⚛️', title: 'React Native Development', description: 'One codebase, both platforms. Ideal for startups that need speed to market without sacrificing quality.', tags: ['React Native', 'Expo', 'TypeScript'], order: 3 },
  { _id: '4', icon: '🐦', title: 'Flutter Development', description: "Google's UI toolkit for pixel-perfect apps on iOS and Android from a single codebase.", tags: ['Flutter', 'Dart', 'BLoC'], order: 4 },
  { _id: '5', icon: '🚀', title: 'MVP Development', description: 'Validate your idea in 8–12 weeks with a lean, investor-ready MVP. Built to test, iterate, and grow.', tags: ['Rapid build', 'User testing', 'Investor deck'], order: 5 },
  { _id: '6', icon: '🎨', title: 'UI/UX Design', description: 'Wireframes, prototypes, and pixel-perfect Figma designs that feel great and convert users into fans.', tags: ['Figma', 'Prototyping', 'User research'], order: 6 },
]

export default function Services() {
  const { data, loading } = useApi<{ success: boolean; data: Service[] }>(api.getServices)
  const services: Service[] = data?.data?.length ? data.data : fallbackServices

  return (
    <section id="services" className="services-section">
      <p className="section-eyebrow">What we build</p>
      <h2 className="section-title">Every app type.<br />One trusted team.</h2>
      <p className="section-sub">From lean MVPs to full-scale consumer apps — we've got the stack, the team, and the process to get you live.</p>

      {loading ? (
        <div className="services-loading">Loading services...</div>
      ) : (
        <div className="services-grid">
          {services.map(service => (
            <div key={service._id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.title}</div>
              <div className="service-desc">{service.description}</div>
              {service.tags && (
                <div className="service-tags">
                  {service.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
