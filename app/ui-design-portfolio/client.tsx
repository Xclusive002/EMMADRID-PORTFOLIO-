"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

const uiProjects = [
  {
    id: 1,
    name: "Nigeria FinTech Mobile App",
    description:
      "A modern financial services mobile application with secure transactions, intuitive user interface, and seamless payment flows.",
    category: "Mobile App UI Design",
    features: [
      "User authentication flows",
      "Transaction management",
      "Wallet dashboard",
      "Money transfer interface",
      "Bill payments",
      "History & analytics",
    ],
    images: [
      "/images/fintech-onboarding.jpeg",
      "/images/fintech-send-money.jpeg",
      "/images/fintech-dashboard.jpeg",
      "/images/fintech-history.jpeg",
      "/images/fintech-airtime-topup.jpeg",
      "/images/fintech-identity-signup.jpeg",
    ],
  },
  {
    id: 2,
    name: "Wellness & Mental Health App",
    description:
      "A comprehensive wellness platform featuring meditation guides, mood tracking, and personalized mental health resources for daily wellness.",
    category: "Mobile App UI Design",
    features: [
      "Daily reflections",
      "Guided meditations",
      "Mood tracking",
      "Resource library",
      "Progress insights",
      "Personal safe space",
    ],
    images: [
      "/images/wellness-daily-reflection.jpeg",
      "/images/wellness-mindful-breathing.jpeg",
      "/images/wellness-mood-insights.jpeg",
      "/images/wellness-safe-space.jpeg",
      "/images/wellness-library.jpeg",
    ],
  },
]

export function UIDesignPortfolioClient() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const currentProject = uiProjects[selectedProject]

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary text-balance">UI/UX Portfolio</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Explore my collection of modern, user-centered UI/UX designs for mobile and web applications.
            </p>
          </div>

          {/* Project Selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {uiProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedProject(index)
                  setSelectedImageIndex(0)
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedProject === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-primary/20 text-foreground hover:border-primary/40"
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="order-2 md:order-1">
              <div className="relative mb-6">
                <img
                  src={currentProject.images[selectedImageIndex] || "/placeholder.svg"}
                  alt={`${currentProject.name} - Screen ${selectedImageIndex + 1}`}
                  className="w-full rounded-lg border border-primary/20 shadow-2xl"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {currentProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-primary shadow-lg"
                        : "border-primary/20 opacity-50 hover:opacity-75"
                    }`}
                  >
                    <img src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="order-1 md:order-2">
              <div className="mb-6">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {currentProject.category}
                </span>
              </div>

              <h2 className="text-4xl font-bold text-primary mb-4">{currentProject.name}</h2>
              <p className="text-lg text-muted-foreground mb-8">{currentProject.description}</p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Key Features:</h3>
                <ul className="space-y-3">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Interested in a similar design?</p>
                <p className="font-semibold text-foreground">Get in touch to discuss your project requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
