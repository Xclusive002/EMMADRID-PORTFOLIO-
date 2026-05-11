"use client"

import { motion } from "framer-motion"
import { Cpu, Code2, Database, Globe, Shield, Terminal, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Software Engineering",
    icon: <Code2 size={20} />,
    skills: ["System Architecture", "Scalable Applications", "Clean Code / SOLID", "Design Patterns", "Type Safety"],
  },
  {
    title: "Backend & Systems",
    icon: <Terminal size={20} />,
    skills: ["Node.js / Go / Python", "REST & GraphQL APIs", "Microservices", "Auth Systems", "Server-side Logic"],
  },
  {
    title: "Data Engineering",
    icon: <Database size={20} />,
    skills: ["PostgreSQL / Supabase", "Redis / Caching", "Database Modeling", "SQL Optimization", "Data Integrity"],
  },
  {
    title: "Frontend Engineering",
    icon: <Zap size={20} />,
    skills: ["Next.js / React", "TypeScript", "Performance Optimization", "State Management", "Technical SEO"],
  },
  {
    title: "Infrastructure / DevOps",
    icon: <Cpu size={20} />,
    skills: ["Docker / Containerization", "CI/CD Workflows", "Vercel / AWS", "Security Protocols", "Monitoring"],
  },
  {
    title: "Product Design",
    icon: <Globe size={20} />,
    skills: ["UI Architecture", "Design Systems", "Prototyping", "User Experience", "Figma Integration"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 bg-primary/10 rounded-full text-primary mb-6"
          >
            <Cpu size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 font-mono">
            CORE_<span className="text-primary">COMPETENCIES</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm max-w-2xl">
            A comprehensive technical stack engineered for global scalability and high-performance distribution.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-white/5 bg-card/10 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 text-primary group-hover:bg-primary/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold font-mono tracking-widest text-white/80 group-hover:text-primary">
                  {category.title.toUpperCase()}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-white/60 group-hover:text-white transition-colors">{skill}</span>
                      <span className="text-primary/40 group-hover:text-primary transition-colors uppercase">Validated</span>
                    </div>
                    <div className="h-1 bg-white/5 w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: idx * 0.1 + i * 0.05 }}
                        className="h-full bg-primary/30 group-hover:bg-primary/60 transition-colors"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Global Standards Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {["SYSTEM_STABILITY", "LATENCY_OPTIMIZED", "GLOBAL_SECURE", "HIGH_AVAILABILITY"].map((label) => (
            <div key={label} className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
              <Shield size={12} className="text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

