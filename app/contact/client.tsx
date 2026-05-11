"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { Footer } from "@/components/footer"

export function ContactPageClient() {
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
          text: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitMessage({
          type: "error",
          text: data.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
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
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary text-balance">Get In Touch</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Have a project in mind? Need a web developer or designer? Let's talk about how I can help bring your ideas
              to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/2349016615446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline block"
                >
                  +234 901 661 5446
                </a>
                <p className="text-sm text-muted-foreground mt-2">Quick response on WhatsApp</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:emmadridwebdeveloper@gmail.com"
                  className="text-primary hover:underline block"
                >
                  emmadridwebdeveloper@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">Professional inquiries</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Twitter/X</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://x.com/emmadrid_?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline block"
                >
                  @emmadrid_
                </a>
                <p className="text-sm text-muted-foreground mt-2">Follow for updates</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send me a Message</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project or inquiry subject"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    required
                    rows={6}
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitMessage.type === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground text-base py-6"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
