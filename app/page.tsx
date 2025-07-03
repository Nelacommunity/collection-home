import { Metadata } from "next";
import HeroWithCanvasReveal from "@/components/hero-with-canvas-reveal";
import CapabilitiesSection from "@/components/capabilities-section";
import HowItWorksSection from "@/components/how-it-works-section";
import HistorySection from "@/components/history-section";
import TestimonialsSection from "@/components/testimonials-section";
import StatsSection from "@/components/stats-section";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import DemoSection from "@/components/demo-section";

export const metadata: Metadata = {
  title: "Collection - AI-Powered Voice Learning Platform",
  description:
    "Revolutionary AI-powered voice interaction platform for personalized learning. Learn with natural voice conversations, adaptive curriculum, and 24/7 AI tutors.",
  keywords: [
    "AI learning",
    "voice technology",
    "personalized education",
    "artificial intelligence",
    "online courses",
    "voice recognition",
    "adaptive learning",
  ],
  openGraph: {
    title: "Collection - AI-Powered Voice Learning Platform",
    description:
      "Revolutionary AI-powered voice interaction platform for personalized learning. Learn with natural voice conversations, adaptive curriculum, and 24/7 AI tutors.",
    type: "website",
    url: "https://student.acyrx.com",
    siteName: "Collection",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Collection AI Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collection - AI-Powered Voice Learning Platform",
    description:
      "Revolutionary AI-powered voice interaction platform for personalized learning.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
  );
}
