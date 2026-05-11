"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, Layers } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

const projects = [
  {
    id: 1,
    title: "ProfitPilot // SaaS Startup",
    description:
      "A high-performance business management and inventory engine. Engineered to provide real-time analytics, automated stock tracking, and profit optimization for global entrepreneurs.",
    image: "/profit-pilot.png",
    link: "/projects/profit-pilot",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Real-time Analytics"],
    category: "Personal Startup",
    isInternal: true,
  },
  {
    id: 2,
    title: "Jad Extension",
    description:
      "Full-scale e-commerce architecture for a premium UK hair store. Integrated complex shipping logic, international payment bridges, and a high-conversion retail UI.",
    image: "/jad-extension.png",
    link: "https://www.jadextension.com/",
    technologies: ["WordPress", "WooCommerce", "Global Payments", "SEO Architecture"],
    category: "E-Commerce System",
  },
  {
    id: 3,
    title: "Toshat Oil & Investment",
    description:
      "Corporate platform for a multi-national energy firm (Nigeria/USA). Built for high reliability and secure enterprise communication across different regions.",
    image: "/toshat-oil.png",
    link: "https://xyceneclone0358.live-website.com/",
    technologies: ["WordPress", "Enterprise Security", "Multi-Region Deployment"],
    category: "Corporate Infrastructure",
  },
  {
    id: 4,
    title: "The SISI Empowerment Foundation",
    description:
      "A large-scale NGO platform built for impact. Engineered with a custom donation engine, volunteer management system, and real-time impact tracking.",
    image: "/sisi-empowerment-foundation.png",
    link: "https://heysissy.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe API"],
    category: "Full-Stack System",
  },
  {
    id: 5,
    title: "Mannalink Health Platform",
    description:
      "A comprehensive Health-as-a-Service (HaaS) platform. Integrated real-time scheduling, secure medical record storage, and a robust consultation API.",
    image: "/mannalink-health-platform.png",
    link: "https://mannalink.vercel.app",
    technologies: ["Next.js", "Supabase", "WebRTC", "Auth.js"],
    category: "SaaS / HealthTech",
  },
  {
    id: 6,
    title: "Fairysoil Nigeria Limited",
    description:
      "Enterprise tax consulting platform. Developed a complex compliance engine and automated reporting system to streamline tax management for corporate clients across Nigeria.",
    image: "/fairysoil-nigeria-limited.png",
    link: "https://fairysoil.com.ng",
    technologies: ["React", "Next.js", "Tailwind CSS", "Enterprise Architecture"],
    category: "FinTech Solution",
  },
  {
    id: 7,
    title: "BC & RC NIG. LTD",
    description:
      "Construction management and portfolio system. Engineered for high performance with optimized asset delivery and a robust content management system for project tracking.",
    image: "/bc-rc-nig-construction.png",
    link: "https://www.brcnigltd.com/",
    technologies: ["Next.js", "Framer Motion", "Cloudinary", "SEO Architecture"],
    category: "Industrial Platform",
  },
  {
    id: 8,
    title: "My CapCut Pro",
    description:
      "E-commerce automation for digital subscription services. Built a custom automated license delivery system and integrated secure Nigerian payment gateways.",
    image: "/my-capcut-pro.png",
    link: "https://www.mycapcutpro.com.ng/",
    technologies: ["Next.js", "Automated Workflows", "Paystack", "Redis"],
    category: "E-Commerce Automation",
  },
]

export function ProjectsSection() {
  const { language } = useLanguage()

  return (
    <section id="projects" className="py-32 px-4 md:px-8 relative bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4"
            >
              <Layers size={16} />
              <span>Project_Portfolio // v2.0</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              {t('projects.title', language)}
            </h2>
            <p className="text-lg text-muted-foreground mt-6 font-mono">
              {t('projects.tagline', language)}
            </p>
          </div>
          <div className="font-mono text-sm text-primary/40 text-right hidden md:block">
            TOTAL_DEPLOYMENTS: {projects.length} <br />
            STATUS: ACTIVE_DEVELOPMENT
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col border border-white/5 hover:border-primary/30 transition-all duration-500 bg-card/20 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  priority={idx < 2}
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-primary uppercase tracking-widest">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/5 rounded-sm text-[10px] font-mono text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.isInternal ? (
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-xs font-mono text-primary hover:text-white transition-colors group/link"
                    >
                      <span>{t('projects.viewCase', language)}</span>
                      <Code2 size={14} className="group-hover/link:scale-110 transition-transform" />
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-primary hover:text-white transition-colors group/link"
                    >
                      <span>{t('projects.viewLive', language)}</span>
                      <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  <div className="w-px h-3 bg-white/10" />
                  <span className="text-[10px] font-mono text-white/20 tracking-widest">BUILD_STABLE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Clients Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 border border-primary/20 bg-primary/5 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20">SYSTEM_GLOBAL_BRIDGE</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">READY FOR GLOBAL SCALE</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-mono text-sm">
            My systems are engineered to handle international traffic, secure global payments, and provide localized experiences across different regions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm hover:scale-105 transition-all"
          >
            START_PROJECT_v3.0
          </a>
        </motion.div>
      </div>
    </section>
  )
}

