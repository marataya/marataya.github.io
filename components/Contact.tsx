"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  } as const;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate async submission
    setTimeout(() => {
      setStatus('success');
      const form = e.currentTarget;
      form.reset();
      setTimeout(() => setStatus('idle'), 2500);
    }, 900);
  };

  const contactMethods = [
    { icon: Mail, label: 'hello@youremail.com' },
    { icon: Phone, label: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Remote / City, Country' },
  ];

  const socials = [
    { icon: Twitter, href: '#' },
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
          style={{
            background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="text-center text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, interesting problems, or freelance opportunities.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row gap-8 items-start justify-center"
        >
          <motion.form onSubmit={handleSubmit} variants={itemVariants} className="flex flex-col gap-4 w-full max-w-md items-stretch">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 focus:border-primary focus:outline-none text-white placeholder-slate-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 focus:border-primary focus:outline-none text-white placeholder-slate-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 focus:border-primary focus:outline-none text-white placeholder-slate-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 focus:border-primary focus:outline-none text-white placeholder-slate-500 resize-none"
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-md transition-all disabled:opacity-60"
              style={{
                background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
              }}
            >
              <Send size={16} />
              {status === 'idle' && 'Send Message'}
              {status === 'loading' && 'Sending...'}
              {status === 'success' && '✓ Sent'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

