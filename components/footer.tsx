"use client"

import { motion } from "framer-motion"
import { Shield, Github, Twitter, Linkedin, Terminal } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"
import Link from "next/link"

export function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <Github size={18} />, link: "https://github.com/Xclusive002" },
    { icon: <Twitter size={18} />, link: "https://x.com/emmadrid" },
    { icon: <Linkedin size={18} />, link: "https://linkedin.com/in/emmadrid" },
  ]

  return (
    <footer className="py-20 px-4 md:px-8 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <div>
              <div className="text-2xl font-mono font-bold text-primary tracking-tighter mb-2">
                EMMADRID.DEV
              </div>
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                Software_Engineering // Full_Stack_Systems
              </p>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-white/5 bg-card/10 text-white/40 hover:text-primary hover:border-primary/30 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-primary/40 uppercase">
                <Shield size={12} />
                <span>Encrypted_Connection_Active</span>
              </div>
              <div className="text-[10px] font-mono text-white/20 uppercase">
                {t('footer.copyright', language)}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-8">
            <div className="text-right">
              <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-4">Core_Directives</p>
              <div className="flex flex-wrap justify-end gap-x-8 gap-y-2">
                {["HERO", "ABOUT", "SERVICES", "SKILLS", "PROJECTS", "CONTACT"].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                    className="text-xs font-mono text-white/40 hover:text-primary transition-colors tracking-widest"
                  >
                    {t(`nav.${item.toLowerCase()}`, language) || item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-4 border border-white/5 bg-card/10 flex items-center gap-4">
              <div className="p-2 bg-primary/10 text-primary">
                <Terminal size={14} />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-white/60">VERSION_STABLE</p>
                <p className="text-[10px] font-mono text-primary/40 uppercase tracking-tighter">v3.0.1_PROD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
