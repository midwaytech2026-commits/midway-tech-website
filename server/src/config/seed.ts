import 'dotenv/config'
import mongoose from 'mongoose'
import Service from '../models/service.model'

const services = [
  {
    title: 'iOS App Development',
    description: 'Native Swift apps built for performance, Apple HIG compliance, and App Store approval on the first submission.',
    icon: '📱',
    tags: ['Swift', 'SwiftUI', 'Xcode'],
    order: 1,
  },
  {
    title: 'Android App Development',
    description: 'Kotlin-first Android apps optimised for Google Play, covering phones, tablets, and wearables.',
    icon: '🤖',
    tags: ['Kotlin', 'Jetpack', 'Material 3'],
    order: 2,
  },
  {
    title: 'React Native Development',
    description: 'One codebase, both platforms. Ideal for startups that need speed to market without sacrificing quality.',
    icon: '⚛️',
    tags: ['React Native', 'Expo', 'TypeScript'],
    order: 3,
  },
  {
    title: 'Flutter Development',
    description: "Google's UI toolkit for pixel-perfect, natively compiled apps across iOS and Android from a single codebase.",
    icon: '🐦',
    tags: ['Flutter', 'Dart', 'BLoC'],
    order: 4,
  },
  {
    title: 'MVP Development',
    description: 'Validate your idea in 8–12 weeks with a lean, investor-ready MVP. Built to test, iterate, and grow.',
    icon: '🚀',
    tags: ['Rapid build', 'User testing', 'Investor deck'],
    order: 5,
  },
  {
    title: 'UI/UX Design',
    description: 'Wireframes, prototypes, and pixel-perfect Figma designs that feel great and convert users into fans.',
    icon: '🎨',
    tags: ['Figma', 'Prototyping', 'User research'],
    order: 6,
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
