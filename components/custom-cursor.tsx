"use client"

import { useState, useEffect } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible, cursorX, cursorY])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Central Dot */}
      <motion.div
        className="fixed w-2 h-2 bg-primary rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed w-8 h-8 border border-primary/30 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* Horizontal Line */}
      <motion.div
        className="fixed w-12 h-[1px] bg-primary/10"
        style={{
          x: cursorX.get() - 4,
          y: cursorY.get() + 15,
        }}
      />
      {/* Vertical Line */}
      <motion.div
        className="fixed w-[1px] h-12 bg-primary/10"
        style={{
          x: cursorX.get() + 15,
          y: cursorY.get() - 4,
        }}
      />
    </div>
  )
}
