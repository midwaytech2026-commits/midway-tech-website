import { MessageSquare, Shield, Link2, Radio, Sprout } from 'lucide-react'
import CtaStrip from '../components/common/CtaStrip'
import './AboutPage.css'

const values = [
  {
    Icon: MessageSquare,
    title: 'Honesty over comfort',
    desc: "We will tell you when a service isn't necessary — whether that's a development feature or a marketing channel. Even when saying yes would be more profitable for us.",
  },
  {
    Icon: Shield,
    title: 'Your budget is not our target',
    desc: "We treat your money like it's ours. Development and marketing both. Because your growth is tied directly to ours.",
  },
  {
    Icon: Link2,
    title: 'Build and market as one',
    desc: 'A product built without a growth strategy is a product nobody finds. A campaign run without understanding the product is money wasted. We refuse to separate the two.',
  },
  {
    Icon: Radio,
    title: 'Communication is not optional',
    desc: "Daily updates aren't a feature we offer. They're just how we work. You should always know exactly where your project — and your marketing — stands.",
  },
  {
    Icon: Sprout,
    title: 'Long-term over transactional',
    desc: "We're not here to close a deal and move on. We grow when our clients grow. That single fact changes how every decision gets made.",
  },
]

const comparison = [
  { them: 'Build OR market — rarely both', us: 'Development and marketing under one roof' },
  { them: 'Junior teams after the pitch', us: 'Founder involved on every project' },
  { them: 'Separate strategies for build and growth', us: 'One brief, one team, one direction' },
  { them: 'Upsell first, optimise later', us: 'Recommend only what\'s needed, always' },
  { them: 'Disappear between milestones', us: 'Daily updates across everything' },
  { them: 'Measure vanity metrics', us: 'Measure what actually grows your business' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="ap-hero">
        <div className="ap-hero-inner">
          <span className="section-eyebrow">About Midway Tech</span>
          <h1>Built by a marketer who got tired of watching agencies fail the businesses he worked inside.</h1>
          <p>7 years. Multiple industries. One recurring problem. Midway Tech is the answer.</p>
        </div>
      </section>

      <section className="ap-story">
        <div className="ap-container">
          <div className="ap-story-inner">
            <div className="ap-story-text">
              <span className="section-eyebrow">Founder Story</span>
              <h2>My name is Nilesh.<br />This is why I built Midway Tech.</h2>
              <p>I spent seven years in marketing — not agency marketing, but the kind that happens inside real businesses with real stakes.</p>
              <p>I worked across industries most tech founders have never stepped inside. Clothing. Jewellery. Exports. Manufacturing. FMCG. Each one taught me something different about how business actually works — how decisions get made, where money quietly disappears, and what companies genuinely need versus what vendors convince them they need.</p>
              <p>Marketing was my world. But the longer I spent inside these businesses, the more I saw how deeply technology and marketing are connected. A bad website loses customers no amount of marketing can recover. A brilliant app nobody knows about grows nothing. The two have to work together — and most agencies treat them as separate problems.</p>
              <p>Then I started looking at the agencies these businesses were hiring. And I kept seeing the same failures repeat. Budgets that kept climbing with no accountability. Projects handed off to junior teams after the pitch. Marketing campaigns with no connection to the actual product.</p>
              <p>I couldn't unsee it. So I stopped waiting for someone else to fix it. I built the agency I kept wishing these businesses had access to — one where development and marketing are treated as one discipline, not two separate invoices. That's Midway Tech.</p>
            </div>
            <div className="ap-story-aside">
              <div className="ap-aside-card">
                <h4>Based in</h4>
                <p>Jaipur, Rajasthan, India</p>
              </div>
              <div className="ap-aside-card">
                <h4>Serving</h4>
                <p>EU · US · UK · Global</p>
              </div>
              <div className="ap-aside-card">
                <h4>Founder background</h4>
                <p>7 years in marketing across clothing, jewellery, exports, manufacturing & FMCG</p>
              </div>
              <div className="ap-aside-card">
                <h4>Contact</h4>
                <p>hello@midwaytech.co</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-values">
        <div className="ap-container">
          <span className="section-eyebrow">Our Values</span>
          <h2>What we believe.</h2>
          <div className="ap-values-grid">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="ap-value-card">
                <div className="ap-value-icon-wrap"><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-comparison">
        <div className="ap-container">
          <span className="section-eyebrow">What Makes Us Different</span>
          <h2>One agency. Two disciplines. Full accountability.</h2>
          <div className="ap-comparison-table">
            <div className="ap-comparison-head">
              <div className="ap-comparison-col ap-comparison-col--them">Most Agencies</div>
              <div className="ap-comparison-col ap-comparison-col--us">Midway Tech</div>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className="ap-comparison-row">
                <div className="ap-comparison-col ap-comparison-col--them">
                  <span className="ap-x">✗</span> {row.them}
                </div>
                <div className="ap-comparison-col ap-comparison-col--us">
                  <span className="ap-check">✓</span> {row.us}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="If you've been burned before, we understand."
        subtitle="Take your time. Ask us hard questions. That's exactly the kind of client relationship we're built for."
        primaryBtn={{ label: 'Book a Free Discovery Call', to: '/contact' }}
        secondaryBtn={{ label: 'See Our Services', to: '/services' }}
      />
    </div>
  )
}
