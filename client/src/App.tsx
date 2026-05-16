import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceIosPage from './pages/ServiceIosPage'
import ServiceAndroidPage from './pages/ServiceAndroidPage'
import ServiceReactNativePage from './pages/ServiceReactNativePage'
import ServiceFlutterPage from './pages/ServiceFlutterPage'
import ServiceMvpPage from './pages/ServiceMvpPage'
import ServiceUiUxPage from './pages/ServiceUiUxPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ios" element={<ServiceIosPage />} />
          <Route path="/services/android" element={<ServiceAndroidPage />} />
          <Route path="/services/react-native" element={<ServiceReactNativePage />} />
          <Route path="/services/flutter" element={<ServiceFlutterPage />} />
          <Route path="/services/mvp" element={<ServiceMvpPage />} />
          <Route path="/services/ui-ux" element={<ServiceUiUxPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
