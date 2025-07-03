import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Collection - Get in Touch | AI Voice Learning Support",
  description:
    "Contact Collection for support, questions, or feedback about our AI-powered voice learning platform. Reach our team via email, phone, or contact form.",
  keywords: [
    "contact collection",
    "AI learning support",
    "voice technology help",
    "customer service",
    "technical support",
  ],
  openGraph: {
    title: "Contact Collection - Get in Touch | AI Voice Learning Support",
    description:
      "Contact Collection for support, questions, or feedback about our AI-powered voice learning platform.",
    type: "website",
    url: "https://student.acyrx.com/contact",
    siteName: "Collection",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Collection - AI Voice Learning Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Collection - Get in Touch",
    description:
      "Contact Collection for support and questions about AI voice learning.",
    images: ["/contact-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
