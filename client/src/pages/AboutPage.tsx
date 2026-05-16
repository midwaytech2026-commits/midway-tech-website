import CtaStrip from '../components/common/CtaStrip'
import './AboutPage.css'

const stats = [
  { value: '40+',  label: 'Apps Shipped' },
  { value: '12+',  label: 'Industries Served' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '3',    label: 'Global Markets' },
]

const values = [
  { icon: '🎯', title: 'Outcome-first', desc: 'We measure success by what your users do, not the code we ship. Every decision traces back to your business goals.' },
  { icon: '🔍', title: 'Transparent', desc: 'Weekly updates, shared boards, honest timelines. No surprises. You always know exactly where your project stands.' },
  { icon: '⚡', title: 'Move fast', desc: "MVPs in 8 weeks. Demos every Friday. Decisions same day. We've built our process around speed without shortcuts." },
  { icon: '🤝', title: 'Long-term partners', desc: "68% of our revenue is from returning clients. We're not project vendors — we're your product team." },
]

const team = [
  { name: 'Arjun Mehta', role: 'Founder & iOS Lead', emoji: '👨‍💻', bio: '10 years building iOS apps. Previously at Swiggy and Zomato.' },
  { name: 'Priya Sharma', role: 'Head of Design', emoji: '👩‍🎨', bio: 'Ex-Flipkart design lead. Obsessed with interaction design and conversion.' },
  { name: 'Rahul Verma', role: 'Android & RN Lead', emoji: '👨‍💻', bio: 'Google Developer Expert. Built apps with 10M+ downloads.' },
  { name: 'Sneha Patel', role: 'Project Lead', emoji: '👩‍💼', bio: 'Certified Scrum Master. Keeps projects on time and clients happy.' },
  { name: 'Karan Singh', role: 'Backend Lead', emoji: '👨‍💻', bio: 'Node.js + cloud infrastructure. Designed APIs handling 100k req/s.' },
]

const principles = [
  { num: '01', title: 'Discovery before delivery', desc: "Every project starts with a scope workshop. We don't write a line of code until we agree on what success looks like." },
  { num: '02', title: 'Weekly demos, not month-end reports', desc: 'You see the app every Friday. Feedback goes in next sprint. No big bang reveals.' },
  { num: '03', title: 'One point of contact', desc: 'Your PM is your single point of contact. No inbox chaos from 5 different people.' },
  { num: '04', title: 'You own everything', desc: 'Code, IP, App Store account — it all belongs to you from day one, always.' },
  { num: '05', title: "We don't disappear at launch", desc: '3-month post-launch support is included in every project. Most bugs show up in week 1.' },
  { num: '06', title: 'Honest estimates', desc: "We'd rather tell you the real budget upfront than come back for more money halfway through." },
]

const milestones = [
  { year: '2018', event: 'Founded in Bangalore with a team of 3' },
  { year: '2019', event: 'First US client — a NYC-based health startup' },
  { year: '2020', event: 'Grew to 12-person team through COVID; fully remote first' },
  { year: '2021', event: 'First app hits 1M downloads' },
  { year: '2023', event: 'Expanded to Flutter and React Native practices' },
  { year: '2024', event: '40+ apps shipped across 12 countries' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="ap-hero">
        <div className="ap-hero-inner">
          <span className="section-eyebrow">About Midway Tech</span>
          <h1>We build mobile apps<br />for <em>startups that ship</em></h1>
          <p>A 15-person product studio based in Bangalore, India. We've spent 6 years helping founders from the US, UK, and Australia turn ideas into products.</p>
        </div>
        <div className="ap-hero-stats">
          {stats.map(s => (
            <div key={s.label} className="ap-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-story">
        <div className="ap-container">
          <div className="ap-story-inner">
            <div className="ap-story-text">
              <span className="section-eyebrow">Our Story</span>
              <h2>Started as a two-person shop.<br />Still feel like one.</h2>
              <p>Midway Tech started in 2018 when our founder Arjun left a senior iOS role at Swiggy to build apps for founders who couldn't afford big agency rates but needed big agency quality.</p>
              <p>We've stayed small on purpose. Every project gets senior attention, not junior handoffs. Our team of 15 includes iOS, Android, React Native, Flutter, design, and backend — everything you need to ship, under one roof.</p>
              <p>We call ourselves "midway" because we sit at the intersection of product thinking and technical execution. We're not just coders — we'll push back on a feature if it won't help your users.</p>
            </div>
            <div className="ap-story-aside">
              <div className="ap-aside-card">
                <h4>Based in</h4>
                <p>Bangalore, India</p>
              </div>
              <div className="ap-aside-card">
                <h4>Clients in</h4>
                <p>US, UK, Australia, Canada, Singapore</p>
              </div>
              <div className="ap-aside-card">
                <h4>Time zone overlap</h4>
                <p>US EST mornings<br />UK afternoons</p>
              </div>
              <div className="ap-aside-card">
                <h4>Team size</h4>
                <p>15 (intentionally small)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-values">
        <div className="ap-container">
          <span className="section-eyebrow">Our Values</span>
          <h2>How we think about work</h2>
          <div className="ap-values-grid">
            {values.map(v => (
              <div key={v.title} className="ap-value-card">
                <div className="ap-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-team">
        <div className="ap-container">
          <span className="section-eyebrow">The Team</span>
          <h2>People who will actually work on your project</h2>
          <div className="ap-team-grid">
            {team.map(t => (
              <div key={t.name} className="ap-team-card">
                <div className="ap-team-avatar">{t.emoji}</div>
                <h3>{t.name}</h3>
                <div className="ap-team-role">{t.role}</div>
                <p>{t.bio}</p>
              </div>
            ))}
            <div className="ap-team-card ap-hiring">
              <div className="ap-team-avatar">+</div>
              <h3>We're hiring</h3>
              <div className="ap-team-role">iOS · Android · Design</div>
              <p>Want to build apps for ambitious startups? We'd love to hear from you.</p>
              <a href="mailto:careers@midwaytech.co" className="ap-hiring-link">Send your CV →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-how">
        <div className="ap-container">
          <span className="section-eyebrow">How We Work</span>
          <h2>Principles that make projects go smoothly</h2>
          <div className="ap-how-grid">
            {principles.map(p => (
              <div key={p.num} className="ap-how-item">
                <div className="ap-how-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-milestones">
        <div className="ap-container">
          <span className="section-eyebrow">Milestones</span>
          <h2>6 years of shipping</h2>
          <div className="ap-timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`ap-milestone ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="ap-milestone-year">{m.year}</div>
                <div className="ap-milestone-dot" />
                <div className="ap-milestone-event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Let's build something together"
        subtitle="We have capacity for 2 new projects this quarter. Discovery calls are free."
        primaryBtn={{ label: 'Book a Call', to: '/contact' }}
        secondaryBtn={{ label: 'See Our Work', to: '/portfolio' }}
      />
    </div>
  )
}
