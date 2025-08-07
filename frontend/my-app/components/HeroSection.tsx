'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'

interface HeroSectionProps {
  onExploreClick: () => void
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video
          className="h-full w-full object-cover"
          src="/assets/VID-20250804-WA0003.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Subtle overlay for texture */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-white text-4xl md:text-6xl lg:text-7xl tracking-wider"
                style={{ fontWeight: 300, lineHeight: 1.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                This is Nox.
              </motion.h1>
              
              <motion.div 
                className="text-white/90 text-xl md:text-2xl lg:text-3xl space-y-2"
                style={{ fontWeight: 300, letterSpacing: '0.1em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              >
                <p>Silent. Sharp. Always watching.</p>
                <p className="text-white">Welcome to <span className="tracking-widest">THE PERSONAL</span>.</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <Button
                onClick={onExploreClick}
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-lg tracking-wider"
              >
                Explore The Collection
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}