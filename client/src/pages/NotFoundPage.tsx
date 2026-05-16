import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="nf-page">
      <div className="nf-content">
        <span className="nf-code">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or has been moved.<br />Let's get you back on track.</p>
        <div className="nf-actions">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/contact" className="btn-ghost">Contact Us</Link>
        </div>
        <Link to="/services" className="nf-services-link">Browse our services →</Link>
      </div>
    </div>
  )
}
