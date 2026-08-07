import retailImg from '../../assets/images/retail.jpg'
import financialImg from '../../assets/images/financial.jpg'
import manufacturingImg from '../../assets/images/manufacture.jpg'
import healthImg from '../../assets/images/health.jpg'
import './Industries.css'

const industries = [
  { image: retailImg,       name: 'Retail & Consumer Goods' },
  { image: financialImg,    name: 'Financial Services' },
  { image: manufacturingImg, name: 'Manufacturing' },
  { image: healthImg,       name: 'Healthcare' },
]

export default function Industries() {
  return (
    <section className="ind-section">
      <p className="ind-eyebrow">Industries We Understand</p>
      <h2 className="ind-title">We Work With Businesses That Want to Scale.</h2>
      <p className="ind-sub">
        We help growth-focused businesses build better digital products, marketing systems, and
        automation workflows across practical, real-world industries.
      </p>

      <div className="ind-grid">
        {industries.map(i => (
          <div key={i.name} className="ind-card">
            {/* Title + dark gradient overlay are already composited into the source image */}
            <img src={i.image} alt={i.name} className="ind-card-img" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
