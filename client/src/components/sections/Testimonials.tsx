import './Testimonials.css'

const testimonials = [
  {
    text: "I'd worked with two agencies before Midway Tech. Both times I ended up paying more than agreed and getting less than promised. With Nilesh's team it was the opposite — they flagged things I hadn't even thought of, the product came in on budget, and then they helped us market it properly from day one.",
    initials: 'JR',
    name: 'James R.',
    role: 'Founder, SaaS Startup · United Kingdom',
  },
  {
    text: "What I appreciated most was the honesty. They told me upfront which features weren't necessary yet and which marketing channels to ignore for now. That early advice alone saved us a significant amount. Six months later, we're scaling the right way.",
    initials: 'SM',
    name: 'Sophie M.',
    role: 'Co-founder, D2C Brand · Netherlands',
  },
  {
    text: "The daily updates were something I didn't expect to matter so much — but they did. Not just on the build, but on the SEO work too. I always knew exactly where we were. No chasing. No wondering. Clear, consistent communication from start to finish.",
    initials: 'AP',
    name: 'Arjun P.',
    role: 'CEO, Logistics Platform · United States',
  },
  {
    text: "We came to Midway Tech needing both a revamped website and a marketing strategy to support it. They handled everything as one project, which meant the copy, design, and SEO were all aligned from the start. Our organic traffic doubled within four months.",
    initials: 'DK',
    name: 'David K.',
    role: 'Managing Director, Export Business · Germany',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <p className="section-eyebrow">Client Reviews</p>
      <h2 className="section-title">Don't take our word for it.</h2>
      <p className="section-sub">Real feedback from founders and business owners across the EU, US & UK.</p>

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
