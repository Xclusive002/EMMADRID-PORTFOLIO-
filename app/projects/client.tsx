"use client"

import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"

export function ProjectsPageClient() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <div className="pt-24">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
