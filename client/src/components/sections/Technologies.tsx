import {
  Smartphone,
  Code2,
  Atom,
  Layers,
  Flame,
  Cloud,
  Database,
  Server,
  Bot,
  PenTool,
  BarChart3,
  CreditCard,
} from 'lucide-react'
import './Technologies.css'

const technologies = [
  { name: 'Swift',        icon: Smartphone },
  { name: 'Kotlin',       icon: Code2      },
  { name: 'React Native', icon: Atom       },
  { name: 'Flutter',      icon: Layers     },
  { name: 'Firebase',     icon: Flame      },
  { name: 'AWS',          icon: Cloud      },
  { name: 'PostgreSQL',   icon: Database   },
  { name: 'Node.js',      icon: Server     },
  { name: 'Python',       icon: Bot        },
  { name: 'Figma',        icon: PenTool    },
  { name: 'Mixpanel',     icon: BarChart3  },
  { name: 'Stripe',       icon: CreditCard },
]

export default function Technologies() {
  return (
    <section id="tech" className="tech-stack-section">
      <p className="section-eyebrow">Our Stack</p>
      <h2 className="section-title">Modern Tech Stack for Scalable Products</h2>
      <p className="section-sub">We use proven, scalable technologies to build mobile apps, web platforms, AI systems, and backend infrastructure for growing businesses.</p>

      <div className="tech-stack-grid">
        {technologies.map(tech => {
          const Icon = tech.icon
          return (
            <div key={tech.name} className="tech-card">
              <div className="tech-icon-wrap">
                <Icon className="tech-icon" aria-hidden="true" />
              </div>
              <span>{tech.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
