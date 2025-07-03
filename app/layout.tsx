import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Collection - AI Voice Powered Teaching",
  description:
    "An AI Voice Powered AI That Teaches - Experience personalized learning with our advanced voice-enabled AI tutor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
