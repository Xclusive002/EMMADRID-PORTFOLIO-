"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShieldCheck, Globe, Terminal, Box, Layers, Cpu, Database, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

const uiProjects = [
  {
    id: 1,
    name: "Nigeria FinTech Mobile App",
    description:
      "A high-fidelity financial services mobile interface. Engineered for complex transactional logic and high-security user interactions.",
    category: "System_Interface // Mobile",
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
      "A specialized wellness platform interface. Designed with physiological data visualization and secure medical history layers.",
    category: "Specialized_Module // Wellness",
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
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const currentProject = uiProjects[selectedProject]

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <div className="pt-32 pb-20 px-4 relative overflow-hidden tech-grid">
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-6"
            >
              <Terminal size={16} />
              <span>Technical_UI_Engineering // v3.0</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tighter uppercase">
              UI_Design_Archive
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed mb-12">
              High-fidelity visual systems engineered for intuitive human-computer interaction. Precision-driven aesthetics meeting complex functional requirements.
            </p>
          </div>

          {/* Project Selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {uiProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedProject(index)
                  setSelectedImageIndex(0)
                }}
                className={`px-8 py-4 rounded-none font-mono text-sm transition-all duration-300 border ${
                  selectedProject === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/20 border-white/5 text-muted-foreground hover:border-primary/30"
                }`}
              >
                {project.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Images */}
            <div className="space-y-6">
              <motion.div 
                key={`${selectedProject}-${selectedImageIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[4/3] border border-white/5 bg-card/10 overflow-hidden"
              >
                <Image
                  src={currentProject.images[selectedImageIndex] || "/placeholder.svg"}
                  alt={`${currentProject.name} - Node ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md border border-white/10 font-mono text-[8px] text-primary">
                  NODE_{selectedImageIndex + 1} // ACTIVE
                </div>
              </motion.div>

              {/* Image Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {currentProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 border transition-all relative group ${
                      selectedImageIndex === index
                        ? "border-primary p-1"
                        : "border-white/5 opacity-40 hover:opacity-100"
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <Image 
                        src={image || "/placeholder.svg"} 
                        alt={`Thumbnail ${index + 1}`} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-widest mb-6">
                  <Layers size={14} />
                  <span>{currentProject.category}</span>
                </div>

                <h2 className="text-4xl font-bold text-white font-mono tracking-tighter mb-6">{currentProject.name.toUpperCase()}</h2>
                <p className="text-lg text-muted-foreground font-mono leading-relaxed">{currentProject.description}</p>
              </div>

              <div className="space-y-6 border-t border-white/5 pt-10">
                <h3 className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] mb-4">Core_System_Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <div className="w-1 h-1 bg-primary flex-shrink-0"></div>
                      <span className="text-sm font-mono text-white/60">{feature.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 border border-primary/20 bg-primary/5 space-y-4"
              >
                <div className="flex items-center gap-3 text-primary font-mono text-xs">
                  <ShieldCheck size={16} />
                  <span>UPLINK_AUTHORIZED</span>
                </div>
                <p className="text-sm font-mono text-white/60 leading-relaxed">
                  Interested in deploying a similar visual infrastructure for your system? Contact my engineering team for technical specs and implementation details.
                </p>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-primary font-mono text-xs hover:gap-4 transition-all mt-4">
                  INITIALIZE_CONSULTATION()
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
