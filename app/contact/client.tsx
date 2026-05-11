"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Terminal, Mail, Phone, Globe, ShieldCheck, ArrowRight, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function ContactPageClient() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitMessage(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "TRANSMISSION_SUCCESSFUL: MISSION_ACKNOWLEDGED",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitMessage({
          type: "error",
          text: data.error || "TRANSMISSION_FAILURE: RETRY_PROTOCOL_REQUIRED",
        })
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "SYSTEM_ERROR: CONNECTION_UPLINK_FAILED",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <div className="pt-32 pb-20 px-4 relative overflow-hidden tech-grid">
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-6"
            >
              <Terminal size={16} />
              <span>Communication_Portal // v3.0</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tighter uppercase">
              Initialize_Contact
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed mb-12">
              Ready to engineer your next high-performance digital system? Establish a secure uplink below to discuss your technical requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Zap size={20} />, label: "WhatsApp_Uplink", value: "+234 901 661 5446", link: "https://wa.me/2349016615446" },
              { icon: <Mail size={20} />, label: "Email_Protocol", value: "emmadridwebdeveloper@gmail.com", link: "mailto:emmadridwebdeveloper@gmail.com" },
              { icon: <Globe size={20} />, label: "Global_Network", value: "@Xclusive002", link: "https://github.com/Xclusive002" },
            ].map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/5 bg-card/10 hover:border-primary/30 transition-all duration-500 group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{method.icon}</div>
                <p className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em] mb-2">{method.label}</p>
                <p className="text-lg font-mono text-white tracking-tighter break-all">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border border-white/5 bg-card/10 p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/5 uppercase">Secure_Form_V1.0</div>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">User_Identity</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="FULL_NAME"
                      required
                      className="bg-background/50 border-white/10 rounded-none font-mono text-sm focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Return_Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EMAIL@DOMAIN.COM"
                      required
                      className="bg-background/50 border-white/10 rounded-none font-mono text-sm focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Protocol_Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="SYSTEM_INQUIRY_TYPE"
                    required
                    className="bg-background/50 border-white/10 rounded-none font-mono text-sm focus:border-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Message_Payload</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ENTER_TRANSMISSION_DETAILS..."
                    required
                    rows={6}
                    className="bg-background/50 border-white/10 rounded-none font-mono text-sm focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className={`p-4 font-mono text-xs ${
                      submitMessage.type === "success"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none font-mono text-sm py-8 uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isLoading ? "EXECUTING_TRANSMISSION..." : "EXECUTE_UPLINK()"}
                </Button>
              </form>
            </motion.div>

            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-3 px-8 py-4 border border-white/5 bg-card/5 font-mono text-[10px] text-white/40 uppercase tracking-[0.3em]">
                <ShieldCheck size={14} className="text-primary/40" />
                End-to-End Encryption Enabled // Secure Communication Layer
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
