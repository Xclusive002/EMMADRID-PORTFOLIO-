import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development & Design Pricing | Affordable Packages by EMMADRID",
  description:
    "Transparent pricing for web development, e-commerce, SaaS, and UI/UX design services. Starting from ₦300K. Negotiable rates for custom projects.",
  keywords: [
    "web development pricing",
    "web design pricing",
    "e-commerce pricing",
    "SaaS development cost",
    "UI/UX design pricing Nigeria",
    "affordable web development",
  ],
  alternates: {
    canonical: "https://emadrid.vercel.app/pricing",
  },
}

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
