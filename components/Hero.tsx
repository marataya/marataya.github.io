'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Code } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full bg-dark-lighter rounded-full flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(to right, #0ea5e9, #06b6d4, #0ea5e9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Marat Ayaibergenov
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl text-slate-300 mb-4 font-light"
          >
            Software Engineer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I make dope things for the web.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
              style={{
                background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-primary rounded-lg font-bold text-primary hover:bg-primary/10 transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
