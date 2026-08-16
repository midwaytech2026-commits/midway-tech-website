import Hero from '../components/sections/Hero'
import WhyUs from '../components/sections/WhyUs'
import Services from '../components/sections/Services'
import TrustGuarantees from '../components/home/TrustGuarantees'
import AiSolutions from '../components/home/AiSolutions'
import SelectedWork from '../components/home/SelectedWork'
import Industries from '../components/home/Industries'
import Process from '../components/sections/Process'
import Faq from '../components/home/Faq'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <TrustGuarantees />
      <AiSolutions />
      <SelectedWork />
      <Industries />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}
