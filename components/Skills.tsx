'use client';

import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Typescript', 'React', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'Figma', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-dark-lighter/50">
      <div className="max-w-5xl mx-auto">
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
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <SkillCategory {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
