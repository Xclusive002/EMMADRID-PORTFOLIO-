import type { Metadata } from "next"
import { ServicesPageClient } from "./client"

export const metadata: Metadata = {
  title: "Web Development & Design Services | EMMADRID - Nigeria's Top Developer",
  description:
    "Professional web development services including web design, frontend, backend, e-commerce, SaaS development, and UI/UX design. Affordable packages starting from ₦350K. Get your business website built today.",
  keywords: [
    "web development services",
    "web design services",
    "e-commerce development",
    "SaaS development",
    "UI/UX design services",
    "business website development",
    "web developer services Nigeria",
  ],
  alternates: {
    canonical: "https://emadrid.vercel.app/services",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
