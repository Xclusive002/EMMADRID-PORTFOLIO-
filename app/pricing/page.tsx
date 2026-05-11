"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShieldCheck, Cpu, Database, Layers, Terminal, DollarSign, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

const EXCHANGE_RATE = 1550 // 1 USD = 1550 NGN

const pricingData = [
  {
    category: "System_Architecture",
    services: [
      {
        name: "Standard_Business_Infrastructure",
        description: "Robust business deployment with 5-8 priority nodes, secure comms, and SEO optimization.",
        priceNGN: 350000,
        features: [
          "5-8 Node Architecture",
          "High-Efficiency Responsive UI",
          "Secure Transmission Gateway",
          "Technical SEO Deployment",
          "Node_Hosting_Setup",
          "SSL_Encryption_Layer",
          "System_Performance_Audit",
        ],
      },
      {
        name: "E-Commerce_Core_v1.0",
        description: "Full-scale online retail engine with inventory logic and global payment bridges.",
        priceNGN: 300000,
        features: [
          "50 SKU Management Capacity",
          "Secure Transaction Pipeline",
          "Global Payment Gateway",
          "Automated Order Logic",
          "Mobile-First Engineering",
          "Real-time Data Analytics",
          "Automated Comms Uplink",
        ],
      },
      {
        name: "Enterprise_Retail_System",
        description: "Advanced e-commerce infrastructure with unlimited scaling and premium modules.",
        priceNGN: 600000,
        features: [
          "Unlimited SKU Expansion",
          "Advanced Checkout Engineering",
          "Multi-Method Payment Bridge",
          "Predictive Inventory Module",
          "High-Fidelity Analytics Matrix",
          "CRM Infrastructure Integration",
          "Mobile Application Pipeline",
          "Automated System Validation",
        ],
      },
      {
        name: "SaaS_MVP_Engineering",
        description: "Mission-critical Minimum Viable Product for scalable software platforms.",
        priceNGN: 1500000,
        features: [
          "Custom Logic Development",
          "Encrypted Auth Protocols",
          "BI Dashboard & Analytics",
          "RESTful API Architecture",
          "PostgreSQL Schema Design",
          "Global Edge Deployment",
          "End-to-End System Security",
          "3 Months Support Lifecycle",
        ],
        highlight: true,
      },
    ],
  },
  {
    category: "Technical_UI_Engineering",
    services: [
      {
        name: "Mobile_System_Interface",
        description: "High-fidelity UI/UX engineering for cross-platform mobile deployments.",
        priceNGN: 250000,
        features: [
          "10+ Technical Blueprints",
          "Unified Design System",
          "Interactive Prototyping",
          "Animation Delta Spec",
          "Engineering Handoff Pack",
          "Source Design Assets",
          "2 System Iteration Cycles",
        ],
      },
      {
        name: "Web_Application_UX_Matrix",
        description: "Comprehensive user experience engineering for complex web systems.",
        priceNGN: 400000,
        features: [
          "15+ High-Logic Blueprints",
          "Design System Documentation",
          "Wireframe Logic Mapping",
          "Technical User Research",
          "Usability Benchmarking",
          "Production-Ready Handoff",
          "3 System Iteration Cycles",
        ],
      },
    ],
  },
]

export default function PricingPage() {
  const { language } = useLanguage()
  const [selectedCurrency, setSelectedCurrency] = useState<"NGN" | "USD">("NGN")

  const convertToUSD = (priceNGN: number): number => {
    return Math.round(priceNGN / EXCHANGE_RATE)
  }

  const formatPrice = (priceNGN: number): string => {
    if (selectedCurrency === "NGN") {
      return `₦${priceNGN.toLocaleString()}`
    }
    return `$${convertToUSD(priceNGN).toLocaleString()}`
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      
      <div className="pt-32 pb-20 relative overflow-hidden tech-grid">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-6"
            >
              <Terminal size={16} />
              <span>Investment_Protocol // v3.0</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tighter uppercase">
              System_Pricing
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed mb-12">
              Scalable engineering solutions priced for global impact. Every deployment is precision-engineered for stability and high performance.
            </p>

            {/* Currency Toggle */}
            <div className="flex justify-center gap-4 mb-12">
              <Button
                variant={selectedCurrency === "NGN" ? "default" : "outline"}
                onClick={() => setSelectedCurrency("NGN")}
                className={`rounded-none font-mono tracking-tighter ${selectedCurrency === "NGN" ? "bg-primary text-primary-foreground" : "border-primary/20 text-primary"}`}
              >
                NGN_CREDITS
              </Button>
              <Button
                variant={selectedCurrency === "USD" ? "default" : "outline"}
                onClick={() => setSelectedCurrency("USD")}
                className={`rounded-none font-mono tracking-tighter ${selectedCurrency === "USD" ? "bg-primary text-primary-foreground" : "border-primary/20 text-primary"}`}
              >
                USD_RESERVES
              </Button>
            </div>

            {/* Negotiation Notice */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-primary/30 bg-primary/5 p-8 max-w-3xl mx-auto relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-primary/30 uppercase tracking-[0.2em]">Negotiation_Permitted</div>
              <p className="text-lg font-bold text-primary font-mono mb-2 uppercase tracking-tighter flex items-center justify-center gap-3">
                <ShieldCheck size={20} />
                Bilateral_Agreement_Authorized
              </p>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Base parameters are listed below. Custom protocol requirements, high-volume deployments, and long-term engineering partnerships are eligible for dynamic pricing adjustments.
              </p>
            </motion.div>
          </div>

          {/* Pricing Categories */}
          {pricingData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-32">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-white font-mono tracking-tighter uppercase">{category.category}</h2>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: serviceIndex * 0.1 }}
                    className={`relative border border-white/5 bg-card/10 hover:border-primary/30 transition-all duration-500 flex flex-col group ${
                      service.highlight ? "md:col-span-2 border-primary/20 bg-primary/5" : ""
                    }`}
                  >
                    {service.highlight && (
                      <div className="absolute -top-px -right-px px-4 py-1 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest">
                        PRIORITY_DEPLOYMENT
                      </div>
                    )}

                    <div className="p-8 border-b border-white/5">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-white font-mono tracking-tighter group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-primary font-mono">{formatPrice(service.priceNGN)}</p>
                          <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">Starting_Threshold</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="p-8 flex-1">
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex gap-3 items-start">
                            <div className="text-primary mt-1"><ShieldCheck size={14} /></div>
                            <span className="text-xs font-mono text-white/60 tracking-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 bg-white/5 border-t border-white/5">
                      <Link href="/#contact" className="block">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none font-mono text-sm py-6 uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all">
                          Initialize_Project()
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border border-white/5 bg-card/10 p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 p-4 font-mono text-[8px] text-white/5 uppercase tracking-[0.4em]">Custom_Uplink_Required</div>
            <h2 className="text-3xl font-bold text-white mb-6 font-mono tracking-tighter uppercase">Undefined_Project_Scope?</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
              For projects requiring non-standard logic, unique hardware integrations, or specialized system architecture, please contact my engineering team for a custom feasibility analysis and quote.
            </p>
            <Link href="/#contact">
              <Button className="border border-primary/50 text-primary hover:bg-primary/10 rounded-none font-mono text-base px-12 py-7 transition-all">
                REQUEST_SYSTEM_CONSULTATION
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
