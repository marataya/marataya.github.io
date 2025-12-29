'use client';

import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-lg p-6 border border-slate-700"
    >
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <motion.div
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 text-slate-100 px-4 py-2 rounded-lg text-sm font-medium border border-primary/30 hover:border-primary/60 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
