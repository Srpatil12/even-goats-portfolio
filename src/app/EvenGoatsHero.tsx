"use client";

import { motion } from "framer-motion";

export default function EvenGoatsHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Floating Elements */}
      <motion.div
        initial={{ x: -100, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 bg-gray-900/80 text-pink-400 px-4 py-3 rounded-xl shadow-lg"
      >
        ❤️ Total Likes: 63,000
      </motion.div>

      <motion.div
        initial={{ x: 100, y: 50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-24 right-10 bg-gray-900/80 text-pink-400 px-4 py-3 rounded-xl shadow-lg"
      >
        👀 Total Views +500K
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Futuristic Content Production <br /> for Founders & Brands
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8"
      >
        Transform your expertise into a powerful online presence with strategic video content that improves visibility and positions your brand as an industry leader.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        href="#contact"
        className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-lg rounded-xl shadow-lg transition-transform hover:scale-105"
      >
        Book a Call
      </motion.a>
    </section>
  );
}