import retailImg from '../../assets/images/retail.jpg'
import financialImg from '../../assets/images/financial.jpg'
import manufacturingImg from '../../assets/images/manufacture.jpg'
import healthImg from '../../assets/images/health.jpg'
import d2cImg from '../../assets/images/industry-d2c.jpg'
import fashionImg from '../../assets/images/industry-fashion.jpg'
import exportImg from '../../assets/images/industry-export.jpg'
import hospitalityImg from '../../assets/images/industry-hospitality.jpg'
import './Industries.css'

const industries = [
  // These 4 already have their title + gradient composited into the source image
  { image: retailImg,       name: 'Retail & Consumer Goods', hasBakedInLabel: true },
  { image: financialImg,    name: 'Financial Services',      hasBakedInLabel: true },
  { image: manufacturingImg, name: 'Manufacturing',           hasBakedInLabel: true },
  { image: healthImg,       name: 'Healthcare',               hasBakedInLabel: true },
  // These are plain photos — label is rendered as an overlay
  { image: d2cImg,          name: 'D2C & Ecommerce',    hasBakedInLabel: false },
  { image: fashionImg,      name: 'Fashion & Apparel',  hasBakedInLabel: false },
  { image: exportImg,       name: 'Export Businesses',  hasBakedInLabel: false },
  { image: hospitalityImg,  name: 'Hospitality',        hasBakedInLabel: false },
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
            <img
              src={i.image}
              alt={i.name}
              className={`ind-card-img${i.hasBakedInLabel ? '' : ' ind-card-img-center'}`}
              loading="lazy"
            />
            {!i.hasBakedInLabel && (
              <div className="ind-card-overlay">
                <span className="ind-card-name">{i.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
