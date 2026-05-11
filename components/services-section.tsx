"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Globe, Database, Shield, Zap, Code2, Layers, Terminal } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Full-Stack Software Engineering",
    icon: <Code2 size={24} />,
    description:
      "End-to-end development of complex web applications. I architect robust frontends with React/Next.js and scalable backends with Node.js, Go, or Python. My focus is on clean code, type safety, and maintainable architecture.",
    features: [
      "Microservices Architecture",
      "Real-time Data Processing",
      "API Design & Documentation",
      "State Management Systems",
      "Database Modeling & Optimization",
      "Full-cycle SDLC management",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Cloud Infrastructure & DevOps",
    icon: <Cpu size={24} />,
    description:
      "Designing and managing scalable cloud environments. I implement CI/CD pipelines, containerization with Docker/Kubernetes, and infrastructure-as-code to ensure seamless deployments and 99.9% uptime.",
    features: [
      "AWS / Vercel / GCP Deployment",
      "CI/CD Pipeline Automation",
      "Docker & Kubernetes",
      "Serverless Architecture",
      "Monitoring & Logging",
      "Security Hardening",
    ],
  },
  {
    id: 3,
    title: "System Design & Architecture",
    icon: <Layers size={24} />,
    description:
      "Strategic planning for high-traffic platforms. I design systems that can scale horizontally, ensuring low latency and high reliability for global audiences.",
    features: [
      "Scalability Planning",
      "Load Balancing & Caching",
      "Distributed Systems",
      "System Migrations",
      "Performance Benchmarking",
      "Security Audits",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Systems",
    icon: <Database size={24} />,
    description:
      "Building high-conversion retail platforms. I integrate complex inventory systems, secure payment bridges (Paystack/Stripe), and automated fulfillment workflows.",
    features: [
      "Custom Checkout Engines",
      "Payment Bridge Integration",
      "Inventory Syncing",
      "Customer Analytics",
      "Subscription Management",
      "Fraud Detection",
    ],
  },
  {
    id: 5,
    title: "Technical Consulting",
    icon: <Terminal size={24} />,
    description:
      "Helping businesses bridge the gap between vision and technology. I provide technical leadership, code reviews, and strategy for scaling digital products.",
    features: [
      "Tech Stack Evaluation",
      "Code Review & Quality Assurance",
      "Performance Optimization",
      "Technical Roadmapping",
      "Developer Mentorship",
      "Security Consulting",
    ],
  },
]

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="services" className="py-32 px-4 md:px-8 relative bg-background tech-grid">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            <Zap size={16} />
            <span>Core_Capabilities // Systems_Engineering</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            TECHNICAL <span className="text-primary/60">EXPERTISE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
            World-class engineering services tailored for scalability, performance, and global distribution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative p-8 border border-white/5 bg-card/10 group transition-all duration-500 overflow-hidden ${
                service.featured ? "md:col-span-2 lg:col-span-1 border-primary/20 bg-primary/5" : ""
              }`}
            >
              {/* Scanline Effect */}
              <div className="animate-scan absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-4 bg-white/5 rounded-none border border-white/10 group-hover:border-primary/50 transition-colors ${service.featured ? "text-primary" : "text-white/60 group-hover:text-primary"}`}>
                    {service.icon}
                  </div>
                  {service.featured && (
                    <span className="text-[10px] font-mono font-bold text-primary px-3 py-1 border border-primary/30 rounded-full">
                      TOP_RATED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-mono">
                  {service.title.toUpperCase()}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 h-20 overflow-hidden">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <p className="text-[10px] font-mono text-primary/40 uppercase tracking-widest">Specifications:</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-white/60 font-mono">
                        <div className="w-1 h-1 bg-primary/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredId === service.id ? 1 : 0, x: hoveredId === service.id ? 0 : -10 }}
                  className="mt-8 flex items-center gap-2 text-primary font-mono text-xs"
                >
                  <span>REQUEST_TECHNICAL_SPEC</span>
                  <Terminal size={14} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Philosophy */}
        <div className="mt-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="p-12 border-l border-primary/30">
            <h3 className="text-2xl font-bold text-white mb-6 font-mono tracking-tighter">ENGINEERING_PHILOSOPHY</h3>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              I believe in building systems that are not just functional, but architectural masterpieces. 
              My approach prioritizes:
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "SCALABILITY_BY_DESIGN",
                "SECURITY_FIRST_ARCHITECTURE",
                "PERFORMANCE_AS_A_FEATURE",
                "MAINTAINABLE_CODEBASES",
              ].map((p, i) => (
                <li key={i} className="flex items-center gap-4 text-primary font-mono text-xs">
                  <span className="text-primary/30">0{i+1}</span>
                  <span className="tracking-widest">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square md:aspect-auto h-full flex items-center justify-center">
            <div className="w-64 h-64 border border-primary/20 rounded-full animate-spin-slow flex items-center justify-center">
              <div className="w-48 h-48 border border-accent/20 rounded-full animate-reverse-spin flex items-center justify-center">
                <Shield size={48} className="text-primary/40" />
              </div>
            </div>
            {/* Absolute decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 font-mono text-[8px] overflow-hidden whitespace-nowrap text-primary/40">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="py-1">
                  {"01010110 01100101 01110010 01110011 01101001 01101111 01101110 01011111 00110011 00101110 00110000"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

