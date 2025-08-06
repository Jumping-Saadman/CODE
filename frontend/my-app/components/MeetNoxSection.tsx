'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Eye } from 'lucide-react'

export function MeetNoxSection() {
  const handleDiscoverStory = () => {
    console.log('Navigate to Nox story page')
  }

  return (
    <section className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Owl Icon */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-24 h-24 mx-auto">
            {/* Owl Body */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Owl Eyes */}
            <div className="absolute inset-0 flex items-center justify-center space-x-3">
              <motion.div
                animate={{ 
                  scaleY: [1, 0.1, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Eye className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ 
                  scaleY: [1, 0.1, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 0.1
                }}
              >
                <Eye className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Owl Beak */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-white/60"></div>
            </div>
          </div>
        </motion.div>

        {/* Storyline Text */}
        <motion.div
          className="space-y-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <motion.p
              className="text-white/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed"
              style={{ fontWeight: 300, letterSpacing: '0.02em' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Nox doesn't follow trends. Nox follows truth.
            </motion.p>
            
            <motion.p
              className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed"
              style={{ fontWeight: 400, letterSpacing: '0.02em' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              If you wear what matters, you're already one of us.
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleDiscoverStory}
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-lg tracking-wider"
          >
            Discover Nox's Story
          </Button>
        </motion.div>
      </div>
    </section>
  )
}