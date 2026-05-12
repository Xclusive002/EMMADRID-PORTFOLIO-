// Build trigger: Engineering System Update v3.0.2
import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

import { CommandPalette } from "@/components/command-palette"
import { MusicPlayer } from "@/components/music-player"
import { SystemStats } from "@/components/system-stats"

export const metadata: Metadata = {
  title: "EMMADRID // Software Engineering & System Architecture",
  description:
    "Emmanuel Abiodun Oladipo (EMMADRID) - High-performance software engineer and system architect. Specializing in scalable full-stack systems, cloud infrastructure, and technical UI engineering for global clients.",
  keywords: [
    "Software Engineering",
    "System Architecture",
    "Full Stack Developer Nigeria",
    "Cloud Infrastructure",
    "Next.js Expert",
    "EMMADRID",
    "Scalable Web Systems",
    "Technical UI Design",
  ],
  generator: "v0.app",
  authors: [{ name: "Emmanuel Abiodun Oladipo" }],
  creator: "Emmanuel Abiodun Oladipo",
  publisher: "EMMADRID",
  verification: {
    google: "4piheiU6sOKj3y0-htPgB5xIrEQhhq1gn2dsc6vieGs",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://emadrid.vercel.app",
    title: "EMMADRID // Software Engineering & System Architecture",
    description:
      "Architecting robust digital infrastructures and high-performance software systems for a global client base.",
    siteName: "EMMADRID Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMMADRID // Software Systems Architect",
    description: "Engineering scalable solutions for the modern web.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Abiodun Oladipo",
              alternateName: "EMMADRID",
              description:
                "Software Engineer and System Architect specializing in distributed systems and modern web technologies.",
              url: "https://emadrid.vercel.app",
              email: "emmadridwebdeveloper@gmail.com",
              telephone: "+234 901 661 5446",
              jobTitle: "Software Engineer",
              location: {
                "@type": "Place",
                name: "Global / Ilorin, Nigeria",
              },
              sameAs: ["https://x.com/emmadrid_", "https://wa.me/2349016615446"],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}>
        <LanguageProvider>
          <CommandPalette />
          <SystemStats />
          <MusicPlayer />
          <Suspense fallback={null}>{children}</Suspense>
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
