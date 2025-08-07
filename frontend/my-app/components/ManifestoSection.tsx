'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { Button } from './ui/button'

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const handleReadFullManifesto = () => {
    // This would navigate to a dedicated manifesto page
    console.log('Navigate to full manifesto page')
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      id="manifesto"
    >
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <motion.div 
          className="w-1/2 bg-black"
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="w-1/2 bg-white"
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center flex-1">
        <motion.div
          className="text-center px-8 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <p>
                <span className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed"
                style={{ fontWeight: 300, letterSpacing: '0.02em' }}>
                  We are not her
                </span>
                <span className="text-black text-2xl md:text-3xl lg:text-4xl leading-relaxed"
                style={{ fontWeight: 300, letterSpacing: '0.02em' }}>
                  e to dress you.
                </span>
              </p>
              <p>
                <span className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed"
                style={{ fontWeight: 300, letterSpacing: '0.02em' }}>
                  We are here t
                </span>
                <span className="text-black text-2xl md:text-3xl lg:text-4xl leading-relaxed"
                style={{ fontWeight: 300, letterSpacing: '0.02em' }}>
                  o reflect you.
                </span>
              </p>
              <p 
                style={{ fontWeight: 500, letterSpacing: '0.05em' }}
              >
                <span className="tracking-widest text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed">This is THE </span>
                <span className="tracking-widest text-black text-2xl md:text-3xl lg:text-4xl leading-relaxed">PERSONAL</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ once: true }}
            >
              <p style={{ fontWeight: 600 }}>
                <span className="text-white text-xl md:text-2xl tracking-widest">
                  #WearY
                </span>
                <span className="text-black text-xl md:text-2xl tracking-widest">
                  ourTruth
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Read Full Manifesto Link */}
      <div className="relative z-10 pb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleReadFullManifesto}
            variant="ghost"
            className="text-gray-600 hover:text-black underline-offset-4 hover:underline transition-all duration-300 text-lg tracking-wide"
            style={{ fontWeight: 400 }}
          >
            Read Full Manifesto →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}