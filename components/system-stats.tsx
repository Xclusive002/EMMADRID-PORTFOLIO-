"use client"

import { motion } from "framer-motion"
import { Activity, Shield, Zap, Globe } from "lucide-react"

export function SystemStats() {
  const stats = [
    { label: "Stability", value: "99.99%", icon: <Shield size={12} /> },
    { label: "Architecture", value: "Scalable", icon: <Zap size={12} /> },
    { label: "Uptime", value: "24/7", icon: <Activity size={12} /> },
    { label: "Network", value: "Global", icon: <Globe size={12} /> },
  ]

  return (
    <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40">
      <div className="flex flex-row md:flex-col gap-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-sm hover:border-primary/20 transition-colors"
          >
            <div className="text-primary/60">{stat.icon}</div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] leading-none mb-1 hidden sm:block">
                {stat.label}
              </span>
              <span className="text-[10px] font-mono text-white font-bold leading-none">
                {stat.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
