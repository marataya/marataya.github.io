'use client';

import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const contactMethods = [

];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-lighter border-t border-slate-700 py-12 px-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-8">
        <motion.div
          className="space-y-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'marataya@gmail.com',
                link: 'mailto:marataya@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+7 (707) 3009056',
                link: 'tel:+77073009056',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Worldwide',
                link: '#',
              },
              {
                icon: Github,
                label: 'GitHub',
                value: '@marataya',
                link: 'https://github.com/marataya'
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                value: '@marataya',
                link: 'https://www.linkedin.com/in/marataya-demoreal/'
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 glass rounded-lg border border-slate-700 flex items-center justify-center hover:border-primary transition-colors"
                style={{
                  background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
                }}
              >
                <social.icon className="w-6 h-6 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
