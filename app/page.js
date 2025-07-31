import HeroSection from "./components/home/HeroSection"
import QuickInfoPanels from "./components/home/QuickInfoPanels"
import AboutSnapshot from "./components/home/AboutSnapshot"
import NoticesSection from "./components/home/NoticesSection"
import PrincipalMessage from "./components/home/PrincipalMessage"
import QuickLinks from "./components/home/QuickLinks"
import PhotoGallery from "./components/home/PhotoGallery"
import Testimonials from "./components/home/Testimonials"
import ContactMap from "./components/home/ContactMap"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickInfoPanels />
      <AboutSnapshot />
      <NoticesSection />
      <PrincipalMessage />
      <QuickLinks />
      <PhotoGallery />
      <Testimonials />
      <ContactMap />
    </div>
  )
}
