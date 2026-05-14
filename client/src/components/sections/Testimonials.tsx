import './Testimonials.css'

const testimonials = [
  {
    text: "Midway Tech delivered our MVP in 10 weeks and it looked better than apps from agencies charging 4x more. The weekly demos kept us in control the whole time.",
    initials: 'JK',
    name: 'James K.',
    role: 'Founder, FitTrack App · Austin, TX',
  },
  {
    text: "We'd worked with two other agencies before Midway. Night and day difference — clear communication, no scope creep, and they actually replied on Slack within the hour.",
    initials: 'SR',
    name: 'Sophie R.',
    role: 'CTO, Lumi · London, UK',
  },
  {
    text: "Our React Native app launched on time, passed App Store review first try, and has a 4.8-star rating with 2,000+ downloads in the first month. Incredible team.",
    initials: 'MB',
    name: 'Matt B.',
    role: 'CEO, Parkable · Sydney, AU',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <p className="section-eyebrow">Client reviews</p>
      <h2 className="section-title">Don't take our word for it.</h2>

      <div className="testimonials-grid">
        {testimonials.map(t => (
          <div key={t.name} className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
