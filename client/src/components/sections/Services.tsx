import { useApi } from '../../hooks/useApi'
import { api } from '../../services/api'
import type { Service } from '../../types'
import './Services.css'

export default function Services() {
  const { data, loading, error } = useApi<{ success: boolean; data: Service[] }>(api.getServices)

  const services = data?.data ?? []

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="section-badge dark">What We Offer</span>
        <h2>Our End-to-End Services</h2>
        <p>Comprehensive digital solutions tailored to your business needs</p>
      </div>

      {loading && (
        <div className="services-status">Loading services...</div>
      )}

      {error && (
        <div className="services-status services-error">
          Failed to load services. Please try again later.
        </div>
      )}

      {!loading && !error && (
        <div className="services-grid">
          {services.map(service => (
            <div key={service._id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
