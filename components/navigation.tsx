"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X, Home, User, Cpu, Briefcase, DollarSign, Mail, Layout, Github } from "lucide-react"

import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Navigation() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ["hero", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "hero", label: t('nav.home', language), icon: <Home size={18} />, href: "/" },
    { id: "about", label: t('nav.about', language), icon: <User size={18} />, href: "/" },
    { id: "skills", label: t('nav.skills', language), icon: <Cpu size={18} />, href: "/" },
    { id: "projects", label: t('nav.projects', language), icon: <Briefcase size={18} />, href: "/" },
    { id: "github", label: t('github', language) || 'GitHub', icon: <Github size={18} />, href: "https://github.com/Xclusive002" },
    { id: "pricing", label: t('nav.pricing', language), icon: <DollarSign size={18} />, href: "/pricing" },
    { id: "contact", label: t('nav.contact', language), icon: <Mail size={18} />, href: "/" },
  ]

  return (
    <>
      {/* Desktop Floating Dock */}
      <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-1 px-3 py-2 glass rounded-full pointer-events-auto border border-white/10 shadow-2xl"
        >
          <Link href="/" className="px-4 py-2 text-primary font-mono font-bold tracking-tighter hover:opacity-80 transition-opacity">
            EMMADRID.DEV
          </Link>
          
          <div className="w-px h-6 bg-white/10 mx-2" />

          {navItems.map((item) => (
            <div key={item.id}>
              {item.href === "/" ? (
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.id 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className="hidden lg:inline">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 border border-primary/30 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-full font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  {item.icon}
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              )}
            </div>
          ))}

          <div className="w-px h-6 bg-white/10 mx-2" />
          <LanguageSwitcher />
        </motion.nav>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className={`flex justify-between items-center px-6 py-4 transition-all ${scrolled ? "glass border-b border-white/10" : ""}`}>
          <Link href="/" className="text-lg font-mono font-bold text-primary">
            EMMADRID.DEV
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass border-b border-white/10 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.id}>
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-primary/10 text-foreground transition-all"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {item.icon}
                        </div>
                        <span className="font-mono">{item.label}</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          if (item.href === "/") {
                            scrollToSection(item.id)
                          } else {
                            window.location.href = item.href
                          }
                        }}
                        className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-primary/10 text-foreground transition-all"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {item.icon}
                        </div>
                        <span className="font-mono">{item.label}</span>
                      </button>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

