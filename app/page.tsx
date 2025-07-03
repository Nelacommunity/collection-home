import HeroWithCanvasReveal from "@/components/hero-with-canvas-reveal"
import CapabilitiesSection from "@/components/capabilities-section"
import HowItWorksSection from "@/components/how-it-works-section"
import HistorySection from "@/components/history-section"
import TestimonialsSection from "@/components/testimonials-section"
import StatsSection from "@/components/stats-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import DemoSection from "@/components/demo-section"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroWithCanvasReveal />
      <CapabilitiesSection />
      <HowItWorksSection />
      <DemoSection />
      <HistorySection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
