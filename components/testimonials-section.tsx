"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "SARAH_JOHNSON",
    role: "CEO_TECHSTART_INC",
    content: "Emmanuel delivered an exceptional e-commerce platform that exceeded our expectations. Technical execution was flawless, especially the global payment bridges.",
    status: "VERIFIED_DEPLOYMENT"
  },
  {
    id: 2,
    name: "MICHAEL_CHEN",
    role: "FOUNDER_DIGITAL_SOLUTIONS",
    content: "Working with Emmanuel was a game-changer. He built a scalable SaaS solution that handled our 3x growth with 99.9% uptime. Professional and reliable.",
    status: "SYSTEM_VALIDATED"
  },
  {
    id: 3,
    name: "EMILY_RODRIGUEZ",
    role: "MARKETING_DIRECTOR_BRANDCO",
    content: "The system architecture Emmanuel created is stunning and performs incredibly well. Our conversion rate increased by 45% due to optimized asset delivery.",
    status: "PERFORMANCE_CERTIFIED"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-32 px-4 relative bg-background overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            <CheckCircle2 size={16} />
            <span>Third_Party_Verification // Protocol_Feedback</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
            SYSTEM <span className="text-primary/60">VALIDATION</span>
          </h2>
        </div>

        <div className="relative p-12 border border-white/5 bg-card/10 backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20">UPLINK_STABLE</div>
          <Quote className="text-primary/20 mb-8" size={40} />
          
          <div className="min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <p className="text-xl md:text-3xl text-white font-mono tracking-tight leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/5">
                  <div>
                    <h4 className="text-lg font-bold text-white font-mono tracking-tighter">{testimonials[currentIndex].name}</h4>
                    <p className="text-xs text-primary font-mono uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 border border-primary/20 bg-primary/5">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{testimonials[currentIndex].status}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background px-6 py-2 border border-white/10">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="text-white/40 hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-primary w-4" : "bg-white/10"}`} 
                />
              ))}
            </div>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="text-white/40 hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

