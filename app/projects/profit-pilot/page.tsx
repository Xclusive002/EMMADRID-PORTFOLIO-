"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  BarChart3, 
  Box, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  ArrowLeft, 
  Terminal, 
  Layers, 
  Cpu, 
  Database 
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfitPilotPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft size={16} />
            BACK_TO_SYSTEM
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-6">
                <ShieldCheck size={16} />
                <span>Proprietary_Startup // MVP_v1.0</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8">
                PROFIT<span className="text-primary">PILOT</span>
              </h1>
              <p className="text-xl text-muted-foreground font-mono leading-relaxed mb-10">
                A mission-critical business intelligence and inventory management engine designed for the next generation of global entrepreneurs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://profit-pilot-v1.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-primary-foreground font-mono text-sm font-bold hover:scale-105 transition-all"
                >
                  INITIALIZE_LIVE_STAMP
                </a>
                <div className="px-8 py-4 border border-white/10 bg-white/5 font-mono text-sm text-white/60">
                  BUILD: STABLE_v1.2
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-video border border-primary/20 bg-card/20 overflow-hidden"
            >
              <Image 
                src="/profit-pilot-hero.png" 
                alt="ProfitPilot Dashboard" 
                fill 
                priority
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Specs */}
      <section className="py-32 px-4 bg-card/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/5 bg-card/10 space-y-6">
              <div className="p-4 bg-primary/10 text-primary w-fit"><Database size={24} /></div>
              <h3 className="text-xl font-bold font-mono text-white uppercase">Data Architecture</h3>
              <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                Utilizing PostgreSQL with Prisma ORM for high-integrity data persistence and complex relational mapping of inventory states.
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-card/10 space-y-6">
              <div className="p-4 bg-primary/10 text-primary w-fit"><Cpu size={24} /></div>
              <h3 className="text-xl font-bold font-mono text-white uppercase">Compute Engine</h3>
              <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                Built on Next.js 14 with Server Actions for low-latency state mutations and real-time UI synchronization.
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-card/10 space-y-6">
              <div className="p-4 bg-primary/10 text-primary w-fit"><Layers size={24} /></div>
              <h3 className="text-xl font-bold font-mono text-white uppercase">Global Logic</h3>
              <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                Middleware-driven authentication and multi-region deployment on Vercel Edge for sub-100ms response times globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Feature Set */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
            <div className="flex-1">
              <div className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4">// MODULE_01</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tighter">INVENTORY_INTELLIGENCE</h2>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8">
                Automated stock tracking with predictive low-stock alerts and velocity analysis. ProfitPilot monitors every SKU in real-time, ensuring zero-stockout operations.
              </p>
              <ul className="space-y-4 font-mono text-xs text-white/60">
                <li className="flex items-center gap-3"><Box size={14} className="text-primary" /> AUTOMATED_SKU_MANAGEMENT</li>
                <li className="flex items-center gap-3"><Box size={14} className="text-primary" /> REAL_TIME_STOCK_SYNCHRONIZATION</li>
                <li className="flex items-center gap-3"><Box size={14} className="text-primary" /> LOW_STOCK_PREDICTIVE_ALERTS</li>
              </ul>
            </div>
            <div className="flex-1 w-full aspect-square border border-white/5 bg-primary/5 p-4 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Box size={200} />
              </div>
              <div className="relative z-10 w-full h-full border border-primary/20" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="flex-1 text-right md:text-left">
              <div className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4 md:text-right">// MODULE_02</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tighter md:text-right">SALES_VELOCITY_ANALYTICS</h2>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 md:text-right">
                High-fidelity visualization of sales performance, profit margins, and expense ratios. Gain instant clarity on your business health with our custom analytics engine.
              </p>
              <ul className="space-y-4 font-mono text-xs text-white/60 flex flex-col items-end">
                <li className="flex items-center gap-3">PROFIT_MARGIN_CALCULATION <TrendingUp size={14} className="text-primary" /></li>
                <li className="flex items-center gap-3">EXPENSE_RATIO_TRACKING <BarChart3 size={14} className="text-primary" /></li>
                <li className="flex items-center gap-3">TIME_SERIES_PERFORMANCE_METRICS <TrendingUp size={14} className="text-primary" /></li>
              </ul>
            </div>
            <div className="flex-1 w-full aspect-square border border-white/5 bg-primary/5 p-4 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <BarChart3 size={200} />
              </div>
              <div className="relative z-10 w-full h-full border border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="py-32 px-4 bg-card/5 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tighter uppercase">Core_System_Modules</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
              ProfitPilot is architected to handle complex business operations through distinct, high-performance modules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Core */}
            <div className="p-10 border border-white/5 bg-card/10 relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/40 uppercase">V1_CORE</div>
              <h3 className="text-2xl font-bold text-white mb-8 font-mono tracking-tighter">BASE_OPERATIONS</h3>
              <ul className="space-y-6 font-mono text-sm">
                {[
                  { label: "Daily_Sales_Tracking", desc: "Real-time record keeping for every transaction." },
                  { label: "Inventory_Management", desc: "Automated stock level synchronization and reorder logic." },
                  { label: "Profit_Loss_Reporting", desc: "High-fidelity financial health analysis and margin tracking." },
                  { label: "Analytics_Dashboard", desc: "Consolidated view of all critical business metrics." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="text-primary mt-1"><ShieldCheck size={16} /></div>
                    <div>
                      <p className="text-white font-bold uppercase text-xs mb-1">{item.label}</p>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Extension */}
            <div className="p-10 border border-primary/20 bg-primary/5 relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/60 uppercase">V1_PREMIUM</div>
              <h3 className="text-2xl font-bold text-white mb-8 font-mono tracking-tighter">ADVANCED_EXTENSIONS</h3>
              <ul className="space-y-6 font-mono text-sm">
                {[
                  { label: "Custom_Reports_Engine", desc: "High-performance export system for PDF and Excel data." },
                  { label: "Invoice_Generation_System", desc: "Automated digital receipt and billing infrastructure." },
                  { label: "E-Commerce_Bridge", desc: "Seamless integration with global online retail platforms." },
                  { label: "CRM_Infrastructure", desc: "Advanced client data management and relationship tracking." },
                  { label: "Automated_Tax_Logic", desc: "Precision calculation engine for regional tax compliance." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="text-primary mt-1"><TrendingUp size={16} /></div>
                    <div>
                      <p className="text-white font-bold uppercase text-xs mb-1">{item.label}</p>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Summary Footer */}
      <section className="py-32 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-8">
            <Terminal size={18} />
            <span>SYSTEM_SPEC_OVERVIEW</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Frontend</p>
              <p className="text-sm font-mono text-white">React 18 / Next.js</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Backend</p>
              <p className="text-sm font-mono text-white">Node.js / Vercel Functions</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Database</p>
              <p className="text-sm font-mono text-white">PostgreSQL (Supabase)</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Styling</p>
              <p className="text-sm font-mono text-white">Tailwind CSS / Radix UI</p>
            </div>
          </div>
          <div className="mt-20">
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-mono text-sm font-bold hover:bg-primary transition-all"
            >
              REQUEST_DEMO_v1.0
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
