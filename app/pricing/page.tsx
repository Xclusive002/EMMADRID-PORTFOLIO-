"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const EXCHANGE_RATE = 1550 // 1 USD = 1550 NGN (January 2026 rate)

const pricingData = [
  {
    category: "Web Development",
    services: [
      {
        name: "Basic Business Website",
        description: "Professional business website with 5-8 pages, contact form, and basic SEO",
        priceNGN: 350000,
        features: [
          "5-8 Professional Pages",
          "Responsive Design",
          "Contact Form",
          "Basic SEO Optimization",
          "Hosting Setup",
          "SSL Certificate",
          "Performance Optimization",
        ],
      },
      {
        name: "E-Commerce Basic",
        description: "Fully functional online store with product management and payment integration",
        priceNGN: 300000,
        features: [
          "Product Catalog (up to 50 items)",
          "Shopping Cart",
          "Payment Gateway Integration",
          "Order Management",
          "Responsive Mobile Design",
          "Basic Analytics",
          "Email Notifications",
        ],
      },
      {
        name: "E-Commerce Premium",
        description: "Advanced e-commerce platform with extended product capacity and features",
        priceNGN: 600000,
        features: [
          "Product Catalog (Unlimited)",
          "Advanced Shopping Cart",
          "Multiple Payment Methods",
          "Inventory Management System",
          "Advanced Analytics Dashboard",
          "Email Marketing Integration",
          "Mobile App Ready",
          "Customer Reviews System",
        ],
      },
      {
        name: "SaaS MVP Development",
        description: "Minimum viable product for Software-as-a-Service platforms",
        priceNGN: 1500000,
        features: [
          "Custom Features Development",
          "User Authentication System",
          "Dashboard & Analytics",
          "API Integration",
          "Database Design & Setup",
          "Scalability Planning",
          "Security Implementation",
          "3 Months Support",
        ],
        highlight: true,
      },
    ],
  },
  {
    category: "UI/UX Design",
    services: [
      {
        name: "Mobile App UI Design",
        description: "Complete UI design for mobile applications (iOS & Android)",
        priceNGN: 250000,
        features: [
          "10+ Unique Screens",
          "Design System",
          "Prototyping",
          "Animation Guidelines",
          "Developer Handoff",
          "Design Files (Figma)",
          "Revision Rounds (2)",
        ],
      },
      {
        name: "Web Application UI/UX",
        description: "Comprehensive UI/UX design for web applications",
        priceNGN: 400000,
        features: [
          "15+ Unique Screens",
          "Design System Creation",
          "Wireframes & Prototypes",
          "User Research",
          "Usability Testing",
          "Developer Handoff",
          "Revision Rounds (3)",
        ],
      },
      {
        name: "Complete Brand Design",
        description: "Full branding including logo, colors, typography, and UI kit",
        priceNGN: 500000,
        features: [
          "Logo Design (5 concepts)",
          "Color Palette",
          "Typography System",
          "Brand Guidelines",
          "UI Component Library",
          "Marketing Materials",
          "Social Media Templates",
        ],
      },
    ],
  },
]

export default function PricingPage() {
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
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary text-balance">
            Simple & Transparent Pricing
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed mb-8">
            Professional web development and UI/UX design services tailored to your needs. All prices are competitive
            and negotiable based on project scope.
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={selectedCurrency === "NGN" ? "default" : "outline"}
              onClick={() => setSelectedCurrency("NGN")}
              className="px-6"
            >
              NGN (Naira)
            </Button>
            <Button
              variant={selectedCurrency === "USD" ? "default" : "outline"}
              onClick={() => setSelectedCurrency("USD")}
              className="px-6"
            >
              USD (Dollar)
            </Button>
          </div>

          {/* Negotiation Notice */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-16 max-w-2xl mx-auto">
            <p className="text-lg font-bold text-primary">💼 NEGOTIATION IS ALLOWED</p>
            <p className="text-muted-foreground mt-2">
              These are our standard rates. Contact us to discuss custom packages, bulk projects, or long-term
              collaborations. We're flexible and work within your budget!
            </p>
          </div>
        </div>

        {/* Pricing Categories */}
        {pricingData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">{category.category}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className={`relative bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden ${
                    service.highlight ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto border-primary/50 bg-primary/5" : ""
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-primary/20 text-primary font-bold text-center py-2 text-sm">
                      MOST POPULAR
                    </div>
                  )}

                  <CardHeader className={service.highlight ? "pt-12" : ""}>
                    <CardTitle className="text-2xl text-primary">{service.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Starting at</p>
                      <p className="text-4xl font-bold text-primary">{formatPrice(service.priceNGN)}</p>
                      {selectedCurrency === "NGN" && (
                        <p className="text-xs text-muted-foreground mt-2">≈ ${convertToUSD(service.priceNGN)}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-3">
                          <svg
                            className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground text-base py-6">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Custom Project? Let's Talk!</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? Every project is unique. Contact me to discuss your specific
            requirements and get a personalized quote.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8 py-6">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
