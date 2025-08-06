'use client'

import { motion } from 'motion/react'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    Shop: ['All Products', 'New Arrivals', 'Best Sellers', 'Sale'],
    About: ['Our Story', 'Manifesto', 'Community', 'Sustainability'],
    Support: ['Size Guide', 'Shipping', 'Returns', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookies']
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-2xl mb-4 tracking-widest"
                style={{ fontWeight: 600 }}
              >
                NOX
              </h3>
              <p 
                className="text-gray-400 mb-6 leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                We are not here to dress you.<br />
                We are here to reflect you.<br />
                This is THE PERSONAL.
              </p>
              <p 
                className="text-white text-lg tracking-widest"
                style={{ fontWeight: 600 }}
              >
                #WearYourTruth
              </p>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-white mb-4 tracking-wide"
                style={{ fontWeight: 500 }}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      style={{ fontWeight: 300 }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-gray-800 pt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto text-center">
            <h4 
              className="text-xl mb-4 tracking-wide"
              style={{ fontWeight: 500 }}
            >
              Stay Connected
            </h4>
            <p 
              className="text-gray-400 mb-6"
              style={{ fontWeight: 300 }}
            >
              Get updates on new releases and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300 tracking-wide" style={{ fontWeight: 500 }}>
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p 
            className="text-gray-400 mb-4 md:mb-0"
            style={{ fontWeight: 300 }}
          >
            © 2025 NOX. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}