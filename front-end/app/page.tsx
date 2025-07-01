import { DeviceRepairJourney } from "@/components/device-repair-journey"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <DeviceRepairJourney />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
