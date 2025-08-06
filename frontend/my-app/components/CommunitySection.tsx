'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

interface PostProps {
  id: string
  image: string
  username: string
  likes: number
  comments: number
}

function InstagramPost({ post }: { post: PostProps }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <ImageWithFallback
        src={post.image}
        alt={`Post by ${post.username}`}
        className="w-full h-full object-cover"
      />

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-6"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-2 text-white">
          <Heart className="w-6 h-6" fill="currentColor" />
          <span className="text-lg" style={{ fontWeight: 600 }}>
            {post.likes}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <MessageCircle className="w-6 h-6" />
          <span className="text-lg" style={{ fontWeight: 600 }}>
            {post.comments}
          </span>
        </div>
      </motion.div>

      {/* Username Badge */}
      <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
        @{post.username}
      </div>
    </motion.div>
  )
}

export function CommunitySection() {
  const mockPosts: PostProps[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1593676671930-0ce26bdfc3b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3ZWFyaW5nJTIwYmxhY2slMjBjbG90aGluZyUyMHN0cmVldHxlbnwxfHx8fDE3NTQ0NzMyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      username: 'urban_truth',
      likes: 127,
      comments: 23
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1589351189946-b8eb5e170ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTQzOTI0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      username: 'silent_sharp',
      likes: 89,
      comments: 12
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1691796773910-923291dd6e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMGZhc2hpb24lMjBibGFja3xlbnwxfHx8fDE3NTQ0NzMyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      username: 'nox_wearer',
      likes: 156,
      comments: 31
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1593676671930-0ce26bdfc3b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3ZWFyaW5nJTIwYmxhY2slMjBjbG90aGluZyUyMHN0cmVldHxlbnwxfHx8fDE3NTQ0NzMyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      username: 'truth_seeker',
      likes: 203,
      comments: 45
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1589351189946-b8eb5e170ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTQzOTI0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      username: 'wear_personal',
      likes: 94,
      comments: 18
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1691796773910-923291dd6e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMGZhc2hpb24lMjBibGFja3xlbnwxfHx8fDE3NTQ0NzMyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      username: 'always_watching',
      likes: 178,
      comments: 27
    }
  ]

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Instagram className="w-8 h-8 text-gray-700" />
            <h2 
              className="text-black text-3xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontWeight: 300 }}
            >
              #SeenByNox
            </h2>
          </div>
          <p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontWeight: 300 }}
          >
            Join our community of truth-wearers. Share your authentic moments and connect with others who choose to wear what matters.
          </p>
        </motion.div>

        {/* Instagram-style Gallery */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <InstagramPost post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-6 text-lg tracking-wider"
          >
            Post your truth. Tag #SeenByNox
          </Button>
        </motion.div>
      </div>
    </section>
  )
}