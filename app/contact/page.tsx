import type { Metadata } from "next"
import { ContactPageClient } from "./client"

export const metadata: Metadata = {
  title: "Contact EMMADRID - Web Developer & Designer in Nigeria",
  description:
    "Get in touch with Emmanuel Abiodun Oladipo (EMMADRID) for web development, design, and consulting services. Available via WhatsApp, email, and contact form.",
  keywords: [
    "contact web developer Nigeria",
    "hire web developer",
    "contact EMMADRID",
    "web design inquiry",
    "development services inquiry",
  ],
  alternates: {
    canonical: "https://emadrid.vercel.app/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
