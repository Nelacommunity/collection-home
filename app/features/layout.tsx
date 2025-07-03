import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - AI Voice Learning Platform | Collection",
  description:
    "Discover Collection's powerful features: voice recognition, interactive conversations, adaptive curriculum, progress tracking, and multi-language support.",
  keywords: [
    "AI features",
    "voice recognition",
    "interactive learning",
    "adaptive curriculum",
    "progress tracking",
    "multi-language support",
  ],
  openGraph: {
    title: "Features - AI Voice Learning Platform | Collection",
    description:
      "Discover Collection's powerful features for voice-powered AI learning.",
    type: "website",
    url: "https://student.acyrx.com/features",
    siteName: "Collection",
    images: [
      {
        url: "/features-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Collection Features - AI Voice Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - AI Voice Learning Platform",
    description:
      "Discover Collection's powerful features for voice-powered AI learning.",
    images: ["/features-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
