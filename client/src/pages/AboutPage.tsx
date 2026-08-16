import { Target, Handshake, Clock3, TrendingUp, Heart, Shirt, Gem, Smile } from 'lucide-react'
import aboutTeam from '../assets/images/sample-about-team.jpeg'
import './AboutPage.css'

const drives = [
  {
    icon: Target,
    accent: 'orange',
    title: 'Solving Real Problems With Real Solutions',
    desc: "We don't sell services for the sake of it. Before we propose anything, we want to understand what's actually broken or missing in your business — and whether what we do is the right fix. If it isn't, we'll tell you.",
  },
  {
    icon: Handshake,
    accent: 'green',
    title: "Let's Build the Future Together",
    desc: 'We treat every client engagement as a partnership, not a transaction. The best outcomes happen when both sides are invested — when you bring domain knowledge and we bring technical depth, and we build the strategy together.',
  },
  {
    icon: Clock3,
    accent: 'orange',
    title: 'Honesty Over Comfort',
    desc: "We'd rather tell you that a timeline is unrealistic in week one than apologise for missing it in week eight. Honest communication is non-negotiable for us — even when it's the harder conversation to have.",
  },
  {
    icon: TrendingUp,
    accent: 'green',
    title: 'Growth Is a System, Not a Campaign',
    desc: "One good ad doesn't scale a business. We build the interconnected systems — marketing, tech, and AI — that compound over time. That's why we ask about your 12-month goals before we talk about last month's metrics.",
  },
]

const clientTypes = [
  {
    icon: Heart,
    title: 'Dating App — Indian Gen Z Market',
    desc: 'Product strategy, UI/UX design, React Native development, and go-to-market planning for a mobile dating app built for the Indian Gen Z market — with safety-first verification as the core differentiator.',
  },
  {
    icon: Shirt,
    title: 'D2C Fashion & Clothing Brand',
    desc: 'Ecommerce build and growth marketing for a D2C clothing brand — Shopify development, performance marketing on Meta and Google, and email automation.',
  },
  {
    icon: Gem,
    title: 'Gifting Brand — Premium Positioning',
    desc: 'Brand positioning, ecommerce website, and social media marketing for a premium gifting brand — focused on gifting occasions, premium product presentation, and repeat-purchase retention.',
  },
  {
    icon: Smile,
    title: 'Dental Clinic — AI Patient Chatbot',
    desc: 'A custom AI chatbot for a dental practice that answers common patient questions, explains treatment options, and checks appointment availability via the website and WhatsApp, with staff handling anything clinical.',
  },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="ap-hero">
        <div className="ap-hero-inner">
          <span className="section-eyebrow">About Us</span>
          <h1>About MidwayTech</h1>
          <p className="ap-hero-sub">
            We&apos;re a growth and technology agency from Jaipur, Rajasthan, India — building for
            international clients in the US, UK, and EU. One team. Marketing, technology, and AI.
            No handoffs between vendors.
          </p>
        </div>
      </section>

      <section className="ap-why">
        <div className="ap-why-inner">
          <div className="ap-why-text">
            <span className="section-eyebrow">Who We Are</span>
            <h2>A Growth &amp; Technology Partner Built for the Modern Internet</h2>
            <p className="ap-why-copy">
              MidwayTech started with a simple observation: growing a business online requires
              marketing that works, technology that doesn&apos;t break, and AI that actually saves
              time — but most agencies only do one of these well. So we built a team that does all
              three, and treats them as connected disciplines rather than separate services.
            </p>
            <p className="ap-why-copy">
              We&apos;re based in Jaipur, Rajasthan, India — a city with a growing technology and
              design community. Our clients are in the US, UK, and EU, and we operate in their time
              zones. Being based in India means better economics for our clients without any
              sacrifice on quality, communication, or speed.
            </p>
            <p className="ap-why-copy">
              We&apos;ve worked across clothing, jewellery, exports, manufacturing, and FMCG — so we
              understand the difference between building for a consumer brand and building for a
              B2B services company, and we adjust accordingly.
            </p>
          </div>
          <div className="ap-why-img">
            <img src={aboutTeam} alt="MidwayTech team at work" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="ap-beliefs">
        <div className="ap-container">
          <span className="section-eyebrow">What Drives Us</span>
          <h2>Four Reasons We Show Up Differently</h2>
          <div className="ap-beliefs-grid">
            {drives.map(d => (
              <div key={d.title} className="ap-belief-card">
                <div className={`ap-belief-icon ap-belief-icon-${d.accent}`}>
                  <d.icon size={18} strokeWidth={1.6} />
                </div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-clients">
        <div className="ap-container">
          <span className="section-eyebrow">Sample Client Types</span>
          <h2>Businesses We&apos;re Built to Work With</h2>
          <p className="ap-clients-intro">
            We work with a small number of clients at a time — intentionally. It means every client
            gets our full attention, not a junior account manager checking in once a month. Here are
            the kinds of businesses our work is built around.
          </p>
          <div className="ap-clients-grid">
            {clientTypes.map(c => (
              <div key={c.title} className="ap-client-card">
                <div className="ap-client-icon">
                  <c.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
