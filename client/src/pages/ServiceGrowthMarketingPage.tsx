import { Link } from 'react-router-dom'
import { ServiceDetail, scrollToServiceSection } from '../components/common/ServiceDetail'
import type { ServiceDetailData } from '../components/common/ServiceDetail'
import imgPerformance from '../assets/images/sample-marketing-performance.jpeg'
import imgSeo from '../assets/images/sample-marketing-seo.png'
import imgSocial from '../assets/images/sample-marketing-social.jpeg'
import imgContent from '../assets/images/sample-marketing-content.jpeg'
import imgEmail from '../assets/images/sample-marketing-email.jpg'
import imgBranding from '../assets/images/sample-marketing-branding.jpeg'
import imgInfluencer from '../assets/images/sample-marketing-influencer.jpeg'
import imgAutomation from '../assets/images/sample-marketing-automation.jpeg'
import imgLeadgen from '../assets/images/sample-marketing-leadgen.jpeg'
import imgLinkedin from '../assets/images/sample-marketing-linkedin.jpeg'
import './ServiceHubPage.css'

const details: ServiceDetailData[] = [
  {
    id: 'mk-perf',
    anchorLabel: 'Performance Marketing',
    eyebrow: 'Performance Marketing',
    image: imgPerformance,
    imageAlt: 'Performance marketing',
    title: 'Ad Spend That Comes Back With More Than It Left With',
    paragraphs: [
      'We manage Meta Ads (Facebook & Instagram) and Google Ads for D2C brands and B2B businesses targeting US, UK, and EU markets. Our approach starts with attribution — we set up proper conversion tracking (Meta Pixel, CAPI, Google Tag Manager) before spending a single dollar, so every campaign we run is measured against real revenue, not clicks or impressions.',
      'We build full-funnel campaign structures: awareness with interest-based and lookalike audiences, consideration retargeting for website visitors and engaged users, and conversion campaigns with creative testing built into the structure from launch. Every account we manage has a weekly performance review and a monthly strategy session.',
    ],
    features: [
      'Meta Ads: Facebook & Instagram full-funnel',
      'Google Ads: Search, Shopping, Display, YouTube',
      'Proper attribution: Meta CAPI + GA4 + GTM',
      'Weekly reporting with real revenue metrics',
    ],
    techChips: ['Meta Ads', 'Google Ads', 'Meta CAPI', 'GA4', 'Google Tag Manager'],
    ctaLabel: 'Start Your Ad Campaigns',
  },
  {
    id: 'mk-seo',
    anchorLabel: 'SEO',
    eyebrow: 'Search Engine Optimisation',
    image: imgSeo,
    imageAlt: 'SEO',
    title: "SEO That Builds Traffic You Don't Have to Keep Paying For",
    paragraphs: [
      'We run SEO as a long-term compounding asset — not a one-time fix. Our process starts with a full technical audit (crawlability, Core Web Vitals, indexing issues, schema markup), moves through keyword research and content gap analysis against your competitors, and then into on-page optimisation and a structured content plan.',
      "We work with both ecommerce SEO (Shopify category pages, product page optimisation, faceted navigation) and B2B content SEO (pillar pages, topic clusters, link building). All keyword targeting is based on search intent — we don't go after keywords your customers aren't using to buy.",
    ],
    features: [
      'Technical SEO audit — site health, Core Web Vitals',
      'Keyword research & competitor gap analysis',
      'On-page optimisation & structured content plan',
      'White-hat link building & digital PR',
    ],
    techChips: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'Schema.org'],
    ctaLabel: 'Get an SEO Audit',
  },
  {
    id: 'mk-social',
    anchorLabel: 'Social Media',
    eyebrow: 'Social Media Marketing',
    image: imgSocial,
    imageAlt: 'Social media marketing',
    title: 'Content That Builds an Audience That Actually Buys',
    paragraphs: [
      "We manage social media for brands that want measurable growth — not just posting calendars. Our service covers Instagram, Facebook, LinkedIn, and X. We develop a content strategy based on your audience's behaviour data, produce the content (graphics, carousels, short-form video scripts, Reels), schedule it via our content management system, and report on what's driving reach, saves, and website traffic every month.",
      'For D2C brands, we tie social content directly to performance campaigns — organic content that tests creative, paid campaigns that scale what works. For B2B clients, social builds authority and supports the sales team\'s outreach.',
    ],
    features: [
      'Instagram, Facebook, LinkedIn, X content strategy',
      'Content production: graphics, carousels, Reels scripts',
      'Monthly analytics report with growth metrics',
      'Community management & DM response handling',
    ],
    techChips: ['Meta Business Suite', 'Later', 'Canva Pro', 'CapCut', 'Metricool'],
    ctaLabel: 'Grow Your Social Presence',
  },
  {
    id: 'mk-content',
    anchorLabel: 'Content Marketing',
    eyebrow: 'Content Marketing',
    image: imgContent,
    imageAlt: 'Content marketing',
    title: 'Content That Ranks, Educates, and Converts',
    paragraphs: [
      'We build content marketing programmes for B2B companies and D2C brands that want inbound leads — not just blog posts. Every piece we produce starts with keyword research and search intent mapping. We write long-form SEO articles, landing page copy, case studies, whitepapers, and email sequences — all optimised for both search engines and the humans doing the searching.',
      "Our content team writes in your brand voice (we develop a documented tone-of-voice guide if you don't have one), and every article goes through an editorial review for accuracy, readability, and on-page SEO before it's published.",
    ],
    features: [
      'Long-form SEO articles',
      'Tone-of-voice guide & editorial calendar',
      'Case studies, whitepapers & lead magnets',
      'Content repurposing across email, social, and ads',
    ],
    techChips: ['Ahrefs', 'SurferSEO', 'Notion', 'Google Docs', 'Grammarly Business'],
    ctaLabel: 'Start Your Content Programme',
  },
  {
    id: 'mk-email',
    anchorLabel: 'Email Marketing',
    eyebrow: 'Email Marketing',
    image: imgEmail,
    imageAlt: 'Email marketing',
    title: 'Email Flows That Sell While Your Team Sleeps',
    paragraphs: [
      'Email is still the highest-ROI channel for ecommerce and B2B — when it\'s done properly. We set up and manage email marketing in Klaviyo (for ecommerce) and ActiveCampaign or HubSpot (for B2B). This includes account setup, list segmentation, deliverability configuration (SPF, DKIM, DMARC), and the automation flows that drive revenue: welcome series, abandoned cart, post-purchase, win-back, and browse abandonment.',
      'Every flow is designed with split tests built in from launch — subject lines, send times, CTAs — so performance improves progressively without any extra work from your team.',
    ],
    features: [
      'Klaviyo setup, flows & campaign management',
      'Welcome, abandoned cart, post-purchase & win-back flows',
      'List segmentation & deliverability configuration',
      'A/B testing built into every flow from day one',
    ],
    techChips: ['Klaviyo', 'ActiveCampaign', 'HubSpot', 'Mailchimp', 'Litmus'],
    ctaLabel: 'Set Up Your Email Flows',
  },
  {
    id: 'mk-brand',
    anchorLabel: 'Branding',
    eyebrow: 'Branding & Positioning',
    image: imgBranding,
    imageAlt: 'Branding',
    title: "Brands That Own a Position in Your Customer's Mind",
    paragraphs: [
      "We help businesses at two stages: new brands that need to be built from scratch, and existing brands that have outgrown their original identity. Our branding work covers positioning strategy (who you're for, who you're not for, and why you're different from the obvious alternatives), brand naming (if needed), visual identity design in Figma, and a brand guidelines document that your whole team can use.",
      'Every brand project ends with a deliverables package: logo (primary + secondary + icon), colour system, typography system, usage guidelines, social media templates, and a pitch deck template. All delivered as Figma files and production-ready exports.',
    ],
    features: [
      'Positioning strategy & brand narrative',
      'Logo, colour system & typography in Figma',
      'Brand guidelines PDF + editable Figma file',
      'Social templates, email header, pitch deck template',
    ],
    techChips: ['Figma', 'Adobe Illustrator', 'Notion (brand docs)', 'Canva Brand Kit'],
    ctaLabel: 'Start Your Brand Project',
  },
  {
    id: 'mk-influencer',
    anchorLabel: 'Influencer',
    eyebrow: 'Influencer Marketing',
    image: imgInfluencer,
    imageAlt: 'Influencer marketing',
    title: 'Creator Partnerships That Drive Genuine Purchase Intent',
    paragraphs: [
      'We run influencer marketing programmes for D2C brands targeting Indian and international markets — primarily on Instagram and YouTube. Our process starts with audience-fit analysis (we match creators by niche, audience demographics, and engagement quality — not follower count). We handle outreach, rate negotiation, brief creation, content review, and performance tracking.',
      'We focus on micro and mid-tier creators because they typically carry higher engagement rates and more affordable CPMs than celebrity influencers. Every campaign is tracked with UTM links and promo codes so we can attribute revenue directly to each creator.',
    ],
    features: [
      'Creator research by niche, audience fit & engagement',
      'Outreach, negotiation & brief creation',
      'Revenue attribution via UTM links & promo codes',
      'Performance report per creator & per campaign',
    ],
    techChips: ['Instagram', 'YouTube', 'Heepsy', 'Modash', 'UTM Builder'],
    ctaLabel: 'Plan an Influencer Campaign',
  },
  {
    id: 'mk-auto',
    anchorLabel: 'Marketing Automation',
    eyebrow: 'Marketing Automation',
    image: imgAutomation,
    imageAlt: 'Marketing automation',
    title: "Marketing That Runs Without Your Team Running It",
    paragraphs: [
      'Marketing automation is the difference between a team that manually follows up on every lead and a team that wakes up to booked calls in their calendar. We build automation workflows that cover the full marketing funnel: lead capture → qualification → nurture sequence → sales handoff → post-sale retention. Every workflow is mapped visually before it\'s built, tested against real scenarios, and monitored post-launch with failure alerts.',
      "Tools we use: HubSpot and ActiveCampaign for B2B; Klaviyo and n8n for ecommerce and custom workflows. We also build custom automation logic where off-the-shelf tools can't do what you need.",
    ],
    features: [
      'Full-funnel automation: capture → nurture → close',
      'Lead scoring & automatic sales handoff rules',
      'Multi-channel: email, WhatsApp, SMS, in-app',
      'Visual workflow mapping before any build starts',
    ],
    techChips: ['HubSpot', 'ActiveCampaign', 'Klaviyo', 'n8n', 'Make.com', 'WhatsApp Business API'],
    ctaLabel: 'Automate Your Marketing',
  },
  {
    id: 'mk-lead',
    anchorLabel: 'Lead Generation',
    eyebrow: 'Lead Generation',
    image: imgLeadgen,
    imageAlt: 'Lead generation',
    title: 'A Predictable Flow of Qualified Leads — Not Random Enquiries',
    paragraphs: [
      'We build lead generation systems for B2B companies and service businesses that need a consistent, predictable pipeline. This covers inbound (SEO + content + landing pages) and outbound (LinkedIn + cold email) — and we run both as a coordinated system, not separate efforts. Every lead that comes in is tracked from source to outcome, so you always know which channel is producing the best-fit customers.',
      'We build the landing pages, write the copy, set up the forms, configure the CRM integration, and create the initial follow-up sequences. Your team just needs to show up to the calls we book for them.',
    ],
    features: [
      'Inbound: SEO + content + optimised landing pages',
      'Outbound: LinkedIn + personalised cold email',
      'CRM integration & lead source attribution',
      'Follow-up sequences booked directly to your calendar',
    ],
    techChips: ['LinkedIn Sales Navigator', 'Apollo.io', 'Instantly.ai', 'HubSpot', 'Unbounce'],
    ctaLabel: 'Build Your Lead System',
  },
  {
    id: 'mk-linkedin',
    anchorLabel: 'LinkedIn Marketing',
    eyebrow: 'LinkedIn Marketing',
    image: imgLinkedin,
    imageAlt: 'LinkedIn marketing',
    title: 'LinkedIn as a Revenue Channel, Not a CV Platform',
    paragraphs: [
      'LinkedIn is the highest-intent B2B platform if you know how to use it. We run LinkedIn marketing for founders, agencies, and B2B service businesses — covering both organic (profile optimisation, content strategy, thought leadership posting) and paid (LinkedIn Ads: Sponsored Content, Message Ads, Lead Gen Forms). We also run structured outreach programmes using LinkedIn + email sequences to generate qualified meetings for your sales team.',
      'Our LinkedIn content strategy is built around your ICP (ideal customer profile) — every post is written to attract the right buyer, repel the wrong one, and demonstrate expertise that converts connections into conversations.',
    ],
    features: [
      'Profile & company page optimisation for inbound',
      'Thought leadership content strategy & ghostwriting',
      'LinkedIn Ads: Sponsored Content & Lead Gen Forms',
      'Outreach sequences targeting your ICP directly',
    ],
    techChips: ['LinkedIn Sales Navigator', 'LinkedIn Ads Manager', 'Expandi', 'Shield Analytics'],
    ctaLabel: 'Activate LinkedIn for Revenue',
  },
]

export default function ServiceGrowthMarketingPage() {
  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <p className="hub-breadcrumb">
            <Link to="/">Home</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <span className="hub-breadcrumb-current">Marketing</span>
          </p>
          <span className="section-eyebrow">Growth Marketing</span>
          <h1>Growth Marketing Services</h1>
          <p>We run marketing as a revenue system — not a cost centre. Every channel we manage is connected to measurable outcomes: leads generated, revenue attributed, cost per acquisition tracked. No vanity metrics, no vague reports.</p>
          <div className="hub-hero-actions">
            <Link to="/get-quote" className="btn-primary">Get a Free Quote</Link>
            <Link to="/contact" className="btn-ghost">Talk to Us First</Link>
          </div>
        </div>
      </section>

      <nav className="svc-anchor-nav" aria-label="Growth Marketing sections">
        <div className="svc-anchor-nav-inner">
          {details.map(d => (
            <button key={d.id} type="button" className="san-link" onClick={() => scrollToServiceSection(d.id)}>
              {d.anchorLabel}
            </button>
          ))}
        </div>
      </nav>

      <div className="svc-container">
        {details.map((d, i) => <ServiceDetail key={d.id} detail={d} reverse={i % 2 === 1} />)}
      </div>
    </div>
  )
}
