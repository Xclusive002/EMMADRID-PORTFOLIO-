"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Play, Pause, SkipForward, Volume2 } from "lucide-react"

const PLAYLIST = [
  { title: "Last Last", artist: "Burna Boy", album: "Love, Damini" },
  { title: "Lonely At The Top", artist: "Asake", album: "Work of Art" },
  { title: "Feel", artist: "Davido", album: "Timeless" },
  { title: "Reason", artist: "Olamide", album: "Unruly" },
  { title: "Soweto", artist: "Victony", album: "Outlaw" },
  { title: "Declaraion", artist: "Odumodublvck", album: "EZIOKWU" },
  { title: "Calm Down", artist: "Rema", album: "Rave & Roses" },
  { title: "Essence", artist: "Wizkid", album: "Made in Lagos" },
  { title: "City Boys", artist: "Burna Boy", album: "I Told Them..." },
  { title: "Amapiano", artist: "Asake", album: "Work of Art" },
]

export function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isRotating, setIsRotating] = useState(true)

  useEffect(() => {
    if (!isRotating) return
    const interval = setInterval(() => {
      setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length)
    }, 180000) // Rotate every 3 minutes
    return () => clearInterval(interval)
  }, [isRotating])

  const track = PLAYLIST[currentTrack]

  return (
    <div className="fixed bottom-20 md:bottom-24 left-4 md:left-8 z-40 scale-75 md:scale-100 origin-bottom-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="group relative flex items-center gap-4 p-3 bg-black/90 backdrop-blur-xl border border-white/10 rounded-full hover:border-primary/30 transition-all duration-500 pr-6 shadow-2xl"
      >
        {/* Animated Visualizer */}
        <div className="relative w-12 h-12 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden">
          <div className="flex gap-[2px] items-end h-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  height: [8, 16, 10, 14, 8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="w-1 bg-primary rounded-full"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>

        {/* Track Info */}
        <div className="flex flex-col min-w-[140px]">
          <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-1">
            Now_Listening //
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col"
            >
              <h4 className="text-xs font-bold text-white font-mono truncate max-w-[180px]">
                {track.title.toUpperCase()}
              </h4>
              <p className="text-[10px] text-white/40 font-mono truncate">
                {track.artist} — {track.album}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Spotify Aesthetic Pulse */}
        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <Volume2 size={12} className="text-primary/40" />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
        </div>

        {/* Hover Controls Hint */}
        <div className="absolute -top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-black/90 border border-white/10 px-3 py-1 rounded text-[8px] font-mono text-white/60">
            SYSTEM_AUDIO_SOURCE: AFROBEATS_RAP_UP_NEXT
          </div>
        </div>
      </motion.div>
    </div>
  )
}
