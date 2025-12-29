'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Smartphone, SquareRadical, House } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Rick and Morty Android App',
      description: 'An Android application that allows users to explore characters, episodes, and locations from the Rick and Morty universe with an intuitive and engaging interface.',
      icon: Smartphone,
      tags: ['Kotlin', 'Jetpack Compose', 'Views', 'Nav2', 'Room'],
      link: '#',
      github: '#',
    },
    {
      title: 'Schmathematics',
      description: 'A data visualization web app that presents complex mathematical concepts through interactive charts and graphs, making learning engaging and accessible.',
      icon: SquareRadical,
      tags: ['Next', 'React', 'D3.js', 'Three.js', 'xterm.js'],
      link: '#',
      github: '#',
    },
    {
      title: 'DubaiProperties',
      description: 'A real estate platform that provides users with comprehensive listings, allowing to rate tour and compare various properties in Dubai easily.',
      icon: House,
      tags: ['Go', 'Yandex maps', 'AWS', 'GeoDB'],
      link: '#',
      github: '#',
    },
  ];

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
    <section id="projects" className="py-20 px-4">
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
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
