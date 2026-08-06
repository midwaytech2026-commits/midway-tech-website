import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="nf-page">
      <div className="nf-content">
        <div className="nf-icon-wrap">
          <SearchX className="nf-icon" aria-hidden="true" />
        </div>
        <span className="nf-code">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or has been moved.<br />Let's get you back on track.</p>
        <div className="nf-actions">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/services" className="btn-ghost">View Services</Link>
        </div>
      </div>
    </div>
  )
}
