import 'dotenv/config'
import mongoose from 'mongoose'
import Service from '../models/service.model'

const services = [
  {
    title: 'Website Development',
    description: 'High-performance, SEO-optimized websites built with modern frameworks to engage your audience and drive conversions.',
    icon: '🌐',
    order: 1,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.',
    icon: '📱',
    order: 2,
  },
  {
    title: 'E-Commerce Development',
    description: 'Plan, build, and launch your e-commerce brand with high-performance online stores using Shopify, Magento, and custom solutions.',
    icon: '🛒',
    order: 3,
  },
  {
    title: 'AI & ML Solutions',
    description: 'Intelligent automation, predictive analytics, and AI-powered features to give your business a competitive edge.',
    icon: '🤖',
    order: 4,
  },
  {
    title: 'CRM Development',
    description: 'Custom CRM systems tailored to your business workflows to manage customer relationships effectively.',
    icon: '📊',
    order: 5,
  },
  {
    title: 'IoT Development',
    description: 'End-to-end IoT solutions connecting physical devices to digital platforms for smarter operations.',
    icon: '🔗',
    order: 6,
  },
  {
    title: 'Software Development',
    description: 'Bespoke software solutions designed to solve your unique business challenges at scale.',
    icon: '💻',
    order: 7,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices to accelerate your delivery.',
    icon: '☁️',
    order: 8,
  },
]

async function seed() {
  const uri = process.env.MONGO_URI
  if (!uri) throw new Error('MONGO_URI not set in .env')

  await mongoose.connect(uri)
  console.log('Connected to MongoDB')

  await Service.deleteMany({})
  await Service.insertMany(services)
  console.log(`Seeded ${services.length} services`)

  await mongoose.disconnect()
  console.log('Done')
}

seed().catch(err => {
  console.error(err)
  process.exit(1)
})
