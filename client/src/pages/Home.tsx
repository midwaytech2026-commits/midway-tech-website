import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import MvpOffer from '../components/home/MvpOffer'
import Process from '../components/sections/Process'
import Technologies from '../components/sections/Technologies'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <WhyUs />
      <MvpOffer />
      <Process />
      <Technologies />
      <Testimonials />
      <Contact />
    </>
  )
}
