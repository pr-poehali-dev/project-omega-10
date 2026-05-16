import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { ProcessSection } from "@/components/ProcessSection"
import { CEOSection } from "@/components/CEOSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <CEOSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}