import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Benefits from "@/components/Benefits"
import HowItWorks from "@/components/HowItWorks"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Services />
      <Gallery />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

