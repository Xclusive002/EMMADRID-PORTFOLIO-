"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Cpu, Code2, User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function AboutSection() {
  const { language } = useLanguage()

  const technologies = [
    "Software Architecture",
    "Scalable Systems",
    "PostgreSQL",
    "Go",
    "Node.js",
    "TypeScript",
    "Next.js",
    "React",
    "Docker",
    "CI/CD",
    "System Design",
    "Cloud Computing",
  ]

  return (
    <section id="about" className="py-32 px-4 relative bg-background tech-grid">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            <User size={16} />
            <span>{t('about.identity', language)}</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
            {t('about.title', language)}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="p-10 border border-white/5 bg-card/10 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
              <h3 className="text-3xl font-bold text-white mb-6 font-mono tracking-tighter">EMMANUEL_ABIODUN_OLADIPO</h3>
              <div className="space-y-6 text-muted-foreground font-mono text-sm leading-relaxed">
                <p>
                  Known in the global tech space as <span className="text-primary">EMMADRID</span>, I am a software engineer dedicated to building high-performance, scalable systems. My expertise lies at the intersection of technical architecture and intuitive user engineering.
                </p>
                <p>
                  As an undergraduate Computer Science student, I leverage strong academic fundamentals in algorithms, data structures, and system design to architect solutions that stand the test of global traffic and security standards.
                </p>
                <p>
                  My goal is to bridge the gap between complex business logic and seamless digital execution, ensuring that every deployment is a stable, high-performance asset for my clients.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 border border-white/5 bg-card/10">
                <div className="text-primary mb-4"><BookOpen size={24} /></div>
                <h4 className="text-white font-bold font-mono text-sm mb-2 uppercase">Academic_Background</h4>
                <p className="text-muted-foreground text-xs font-mono leading-relaxed">
                  B.Sc. Computer Science Candidate. Focused on distributed systems and software development lifecycle.
                </p>
              </div>
              <div className="p-8 border border-white/5 bg-card/10">
                <div className="text-primary mb-4"><Target size={24} /></div>
                <h4 className="text-white font-bold font-mono text-sm mb-2 uppercase">Mission_Statement</h4>
                <p className="text-muted-foreground text-xs font-mono leading-relaxed">
                  To engineer robust digital infrastructures that empower global businesses and drive technological innovation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Panels */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 border border-white/5 bg-card/10">
              <h3 className="text-lg font-bold text-white mb-6 font-mono tracking-tighter uppercase border-b border-white/5 pb-4">Tech_Stack</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] font-mono text-primary uppercase tracking-widest hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-white/5 bg-card/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 -skew-y-12 translate-y-12" />
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-white font-mono">50+</p>
                  <p className="text-[10px] text-primary font-mono uppercase tracking-widest mt-1">Systems_Built</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white font-mono">100%</p>
                  <p className="text-[10px] text-primary font-mono uppercase tracking-widest mt-1">Uptime_Commit</p>
                </div>
                <div className="col-span-2 pt-4 border-t border-white/5">
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed italic">
                    "Engineering is not just about writing code; it's about solving problems with mathematical precision and creative foresight."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


