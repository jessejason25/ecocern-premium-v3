import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ecocern Hub - Premium Environmental Consultancy & Supplies",
  description:
    "Leading environmental consultancy and premium supplies provider offering innovative solutions across Kenya, Africa, and worldwide. Expert environmental services and quality industrial supplies.",
  keywords:
    "environmental consultancy, Kenya, Africa, industrial supplies, EIA, environmental planning, sustainability",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
