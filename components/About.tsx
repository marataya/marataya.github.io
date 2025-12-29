'use client';

import { motion } from 'framer-motion';
import { Trophy, Rocket, Globe, Zap } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
          style={{
            background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="glass rounded-lg p-8 border border-slate-700 h-full">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack web developer with 5+ years of experience creating dynamic digital experiences. My journey started with curiosity about how websites work, and it has evolved into a career dedicated to building elegant solutions to complex problems.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                When I'm not coding, you can find me contributing to open source projects, writing technical blog posts, or exploring the latest web technologies. I believe in continuous learning and staying at the forefront of web development trends.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {[
              { label: 'Experience', value: '3+ Years', icon: Trophy },
              { label: 'Projects', value: '10+', icon: Rocket },
              { label: 'Clients', value: 'Global', icon: Globe },
              { label: 'Focus', value: 'React & Node', icon: Zap },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-lg p-6 border border-slate-700 text-center"
              >
                <div className="flex justify-center mb-2">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-slate-400 text-sm mb-1">{item.label}</div>
                <div className="text-xl font-bold text-primary">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
