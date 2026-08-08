import Seo from './components/Seo'
import Navbar from './components/Navbar'
import StickyMobileBar from './components/StickyMobileBar'
import Hero from './sections/Hero'
import Offers from './sections/Offers'
import FeaturedCars from './sections/FeaturedCars'
import EmiCalculator from './sections/EmiCalculator'
import WhyBuy from './sections/WhyBuy'
import DeliveryGallery from './sections/DeliveryGallery'
import LeadCapture from './sections/LeadCapture'
import About from './sections/About'
import Contact from './sections/Contact'
import Faq from './sections/Faq'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedCars />
        <Offers />
        <EmiCalculator />
        <WhyBuy />
        <DeliveryGallery />
        <LeadCapture />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  )
}
