"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code2, ShieldCheck, Rocket, RefreshCw } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

const steps = [
  {
    id: "01",
    title: "Discovery & Analysis",
    icon: <Search size={24} />,
    description: "Deep dive into system requirements, business logic, and scalability needs. We define the technical architecture before a single line of code is written.",
    details: ["Requirement Spec", "Tech Stack Audit", "Risk Assessment"]
  },
  {
    id: "02",
    title: "Architecture Design",
    icon: <PenTool size={24} />,
    description: "Mapping out data flows, API schemas, and infrastructure models. Creating a blueprint for a robust, maintainable system.",
    details: ["Schema Design", "System Blueprint", "UX Engineering"]
  },
  {
    id: "03",
    title: "Agile Development",
    icon: <Code2 size={24} />,
    description: "Precision engineering with clean, typed code. Implementing features in iterative sprints with continuous feedback loops.",
    details: ["Sprint Execution", "Code Reviews", "Unit Testing"]
  },
  {
    id: "04",
    title: "Security & QA",
    icon: <ShieldCheck size={24} />,
    description: "Rigorous testing protocols. Stress testing for high traffic and hardening security layers to protect sensitive data.",
    details: ["Load Testing", "Security Audit", "UX Validation"]
  },
  {
    id: "05",
    title: "Deployment & Scale",
    icon: <Rocket size={24} />,
    description: "Launching on high-availability cloud infrastructure. Implementing CI/CD pipelines for seamless, zero-downtime updates.",
    details: ["Cloud Provisioning", "CI/CD Setup", "Launch Monitoring"]
  },
  {
    id: "06",
    title: "Monitoring & Opt",
    icon: <RefreshCw size={24} />,
    description: "Post-launch surveillance and performance tuning. Ensuring the system evolves with user needs and technological shifts.",
    details: ["Log Analysis", "Performance Tuning", "System Scaling"]
  }
]

export function ProcessSection() {
  const { language } = useLanguage()

  return (
    <section id="process" className="py-32 px-4 relative bg-background overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            <RefreshCw size={16} className="animate-spin-slow" />
            <span>Workflow // SDLC_Protocol</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase">
            Engineering <span className="text-primary/60">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
            A standardized, precision-driven methodology for delivering enterprise-grade software solutions.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-12 lg:space-y-0 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className={`flex-1 text-center space-y-4 ${idx % 2 === 1 ? "lg:text-right" : "lg:text-left"}`}>
                <div className={`flex items-center gap-4 justify-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  <span className="text-5xl font-mono font-bold text-primary/20">{step.id}</span>
                  <div className="h-px flex-1 bg-white/5 hidden lg:block" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mono tracking-tighter uppercase">{step.title}</h3>
                <p className={`text-muted-foreground text-sm leading-relaxed max-w-md mx-auto ${idx % 2 === 1 ? "lg:ml-auto lg:mr-0" : "lg:ml-0 lg:mr-auto"}`}>
                  {step.description}
                </p>
                <div className={`flex flex-wrap gap-2 justify-center ${idx % 2 === 1 ? "lg:justify-end" : "lg:justify-start"}`}>
                  {step.details.map((detail, i) => (
                    <span key={i} className="text-[10px] font-mono text-primary/40 uppercase tracking-widest border border-white/5 px-2 py-1">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              {/* Icon / Center Node */}
              <div className="relative">
                <div className="w-20 h-20 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center text-primary relative z-10 group-hover:border-primary transition-colors shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                  {step.icon}
                </div>
                {/* Connecting lines for mobile */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-12 bg-primary/20 lg:hidden" />
                )}
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>

        {/* Closing Tag */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-6 border border-white/5 bg-card/10">
            <p className="text-xs font-mono text-white/40 tracking-[0.3em] uppercase">
              // Protocol_Standard_v2.4 // Compliant_with_ISO/IEC_27001
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
