"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function MarketingPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsAnimating(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/2349016615446?text=Hi%20Emmanuel!%20I%20need%20a%20developer%20for%20my%20business%20website.",
      "_blank",
    )
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 border border-blue-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-500 ${
          isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
        style={{
          boxShadow: "0 0 50px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-pulse" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l1.5 1.5L5 6l1.5 1.5L5 9l1.5 1.5L5 12l1.5 1.5L5 15l1.5 1.5L5 18l1.5 1.5L5 21M19 3l-1.5 1.5L19 6l-1.5 1.5L19 9l-1.5 1.5L19 12l-1.5 1.5L19 15l-1.5 1.5L19 18l-1.5 1.5L19 21"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Need a Developer?
          </h2>

          {/* Subtext */}
          <p className="text-gray-300 text-center mb-6 leading-relaxed">
            Looking to build a <span className="text-blue-400 font-semibold">stunning business website</span> or
            <span className="text-blue-400 font-semibold"> online store</span> that converts visitors into customers?
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-300">
              <svg
                className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Lightning-fast, responsive websites</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <svg
                className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3l1.5 1.5L5 6l1.5 1.5L5 9l1.5 1.5L5 12l1.5 1.5L5 15l1.5 1.5L5 18l1.5 1.5L5 21M19 3l-1.5 1.5L19 6l-1.5 1.5L19 9l-1.5 1.5L19 12l-1.5 1.5L19 15l-1.5 1.5L19 18l-1.5 1.5L19 21"
                />
              </svg>
              <span>Modern design that stands out</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <svg
                className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>24/7 support & maintenance</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Let's Build Your Website!
          </Button>

          {/* Trust indicator */}
          <p className="text-xs text-gray-500 text-center mt-4">✨ Free consultation • Quick response guaranteed</p>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-float-slow" />
        </div>
      </div>
    </div>
  )
}
