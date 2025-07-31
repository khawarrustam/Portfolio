
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/Projects.module.css';

const categories = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.technologies)))]

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projectsData : projectsData.filter(p => p.technologies.includes(filter));

  return (
    <section
      id="projects"
      className={styles.projectsSection}
    >
      <h2 className={styles.glowTitle}>
        Projects
      </h2>
      <div className={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat}
            className={filter === cat ? styles.activeFilter : styles.filterBtn}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className={styles.projectsGrid}>
        {filtered.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={styles.projectCard}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImg}
            />
            <h3 className={styles.projectTitle}>
              {project.title}
            </h3>
            <p className={styles.projectDescription}>
              {project.description}
            </p>
            <div className={styles.techTags}>
              {project.technologies.map(tech => (
                <span
                  className={styles.techTag}
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
