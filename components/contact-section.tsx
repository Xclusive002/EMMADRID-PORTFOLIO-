"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, Send, Globe, Terminal, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function ContactSection() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "PROJECT_QUERY",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    console.log("Transmission initiated:", formData)
  }

  const contactMethods = [
    {
      icon: <MessageSquare size={20} />,
      label: "WHATSAPP_COMMS",
      value: "+234 901 661 5446",
      link: "https://wa.me/2349016615446",
    },
    {
      icon: <Phone size={20} />,
      label: "VOICE_ENCRYPTED",
      value: "+234 901 661 5446",
      link: "tel:+2349016615446",
    },
    {
      icon: <Globe size={20} />,
      label: "GLOBAL_NETWORK",
      value: "@Xclusive002",
      link: "https://github.com/Xclusive002",
    },
  ]

  return (
    <section id="contact" className="py-32 px-4 relative bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            <Shield size={16} />
            <span>Secure_Transmission_Gateway</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
            {t('contact.title', language)}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Transmission Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-10 border border-white/5 bg-card/10 relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20">UPLINK_01</div>
              <h3 className="text-xl font-bold text-white mb-8 font-mono tracking-tighter flex items-center gap-3">
                <Terminal size={18} className="text-primary" />
                COMMS_INTERFACE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Client_Identifier</label>
                    <input
                      type="text"
                      placeholder="NAME_REQUIRED"
                      className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white focus:border-primary/50 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Return_Address</label>
                    <input
                      type="email"
                      placeholder="EMAIL_REQUIRED"
                      className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white focus:border-primary/50 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Subject_Header</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white focus:border-primary/50 outline-none transition-all appearance-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="PROJECT_QUERY">PROJECT_QUERY</option>
                    <option value="TECHNICAL_CONSULTATION">TECHNICAL_CONSULTATION</option>
                    <option value="SYSTEM_MAINTENANCE">SYSTEM_MAINTENANCE</option>
                    <option value="GLOBAL_PARTNERSHIP">GLOBAL_PARTNERSHIP</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Data_Payload</label>
                  <textarea
                    rows={6}
                    placeholder="ENTER_MESSAGE_STAMP..."
                    className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white focus:border-primary/50 outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground p-5 font-mono text-sm font-bold hover:scale-[1.02] transition-all active:scale-[0.98]"
                >
                  <Send size={18} />
                  {t('contact.send', language)}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Comms Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-8 border border-white/5 bg-card/10 hover:border-primary/30 transition-all"
              >
                <div className="p-4 bg-white/5 text-primary group-hover:bg-primary/10 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary/40 uppercase tracking-widest mb-1">{method.label}</p>
                  <p className="text-lg font-bold text-white font-mono group-hover:text-primary transition-colors">{method.value}</p>
                </div>
              </a>
            ))}

            <div className="p-8 border border-primary/20 bg-primary/5">
              <h4 className="text-sm font-bold text-white font-mono mb-4 uppercase tracking-tighter">GLOBAL_AVAILABILITY</h4>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                Operating on UTC+1 (WAT). 
                Average response latency: &lt; 24h. 
                Ready for deployment in any timezone.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">System_Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

