"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Terminal, Code2, Cpu, Globe } from "lucide-react"

import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Full-Stack Software Engineer",
    "Scalable System Architect",
    "High-Performance Web Solutions",
    "Technical Problem Solver",
  ]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      },
      isDeleting ? 40 : 80,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden tech-grid">
      {/* Abstract Engineering Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-6 text-primary font-mono text-sm tracking-widest uppercase">
            <Terminal size={16} />
            <span>{t('hero.tagline', language)}</span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter leading-tight md:leading-none">
            <span className="text-white block uppercase">Emmanuel</span>
            <span className="text-primary/80 block uppercase text-2xl sm:text-5xl md:text-6xl lg:text-9xl">Abiodun Oladipo</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 h-12 flex items-center justify-center font-mono">
            <span className="text-accent mr-2">{">"}</span>
            <span className="typewriter">{currentText}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {t('hero.description', language)}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg rounded-none font-mono tracking-tighter transition-all hover:scale-105 active:scale-95"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t('hero.cta', language)}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-7 text-lg rounded-none font-mono tracking-tighter transition-all"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t('hero.logs', language)}
            </Button>
          </div>
        </motion.div>

        {/* Engineering Stats / Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5"
        >
          {[
            { icon: <Code2 size={20} />, label: "Clean Code" },
            { icon: <Cpu size={20} />, label: "Optimization" },
            { icon: <Globe size={20} />, label: "Scalability" },
            { icon: <Terminal size={20} />, label: "Deployment" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-default group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/10 transition-all">
                {item.icon}
              </div>
              <span className="text-xs font-mono uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}

