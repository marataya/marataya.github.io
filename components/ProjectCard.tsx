'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  link: string;
  github: string;
}

export default function ProjectCard({ title, description, icon: Icon, tags, link, github }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-lg overflow-hidden border border-slate-700 hover:border-primary transition-colors"
    >
      <motion.div
        className="h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <Icon size={80} className="text-white opacity-80" />
      </motion.div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors flex items-center gap-2"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors flex items-center gap-2"
          >
            <span>GitHub</span>
            <Github className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
