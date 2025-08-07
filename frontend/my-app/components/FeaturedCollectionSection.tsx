'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface ProductProps {
  name: string
  frontImage: string
  backImage: string
  hoverText: string
}

function ProductCard({ name, frontImage, backImage, hoverText }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden bg-gray-100 aspect-square rounded-lg">
        {/* Product Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <ImageWithFallback
            src={frontImage}
            alt={`${name} Front`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Back Image (shown on hover) */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ImageWithFallback
            src={backImage}
            alt={`${name} Back`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hover Overlay with Text */}
        <motion.div
          className="absolute inset-0 bg-black/70 flex items-center justify-center"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="text-white text-lg tracking-wider"
            style={{ fontWeight: 300 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {hoverText}
          </motion.p>
        </motion.div>
      </div>

      {/* Product Name */}
      <motion.div className="mt-4 text-center">
        <h3 
          className="text-black text-lg tracking-wide"
          style={{ fontWeight: 400 }}
        >
          {name}
        </h3>
      </motion.div>
    </motion.div>
  )
}

export function FeaturedCollectionSection() {
  const products: ProductProps[] = [
    {
      name: "Signature Logo Tee",
      frontImage: "/assets/mediamodifier-ogmenj2NGho-unsplash.jpg",
      backImage: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMG1vY2t1cCUyMGJhY2t8ZW58MXx8fHwxNzU0NDczMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      hoverText: "Seen by Nox"
    },
    {
      name: "Signature Owl Tee",
      frontImage: "/assets/anomaly-WWesmHEgXDs-unsplash.jpg",
      backImage: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMG1vY2t1cCUyMGJhY2t8ZW58MXx8fHwxNzU0NDczMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      hoverText: "Seen by Nox"
    },
    {
      name: "Signature Hand Tee",
      frontImage: "/assets/john-paul-henry-Da0jti8Ekp8-unsplash.jpg",
      backImage: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMG1vY2t1cCUyMGJhY2t8ZW58MXx8fHwxNzU0NDczMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      hoverText: "Seen by Nox"
    }
  ]

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-black text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4"
            style={{ fontWeight: 300 }}
          >
            Featured Collection
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto"></div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}