import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "EMMADRID - Full-Stack Software Engineer | Scalable Systems & Architecture",
  description:
    "Emmanuel Abiodun Oladipo (EMMADRID) - World-class software engineer specializing in scalable full-stack systems, cloud architecture, and high-performance web solutions. Partnering with global clients to build the future.",
  alternates: {
    canonical: "https://emadrid.vercel.app",
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      <HeroSection />
      
      <div className="relative z-10 space-y-32 pb-32">
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}

