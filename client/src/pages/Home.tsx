import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import MvpOffer from '../components/home/MvpOffer'
import DeliveryFramework from '../components/home/DeliveryFramework'
import Process from '../components/sections/Process'
import Technologies from '../components/sections/Technologies'
import Testimonials from '../components/sections/Testimonials'
import Faq from '../components/home/Faq'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <WhyUs />
      <MvpOffer />
      <DeliveryFramework />
      <Process />
      <Technologies />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
