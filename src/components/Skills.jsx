import React from 'react';
import styles from '../styles/Skills.module.css';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import { FaReact, FaNodeJs, FaPython, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiFirebase, SiMongodb, SiJupyter, SiNetlify, SiVercel, SiPostman, SiCplusplus } from 'react-icons/si';

const iconMap = {
  'React': <FaReact />, 'HTML5': <FaHtml5 />, 'CSS3': <FaCss3Alt />, 'JavaScript': <FaJs />, 'Redux': <SiRedux />,
  'Node.js': <FaNodeJs />, 'Express': <FaNodeJs />, 'MongoDB': <SiMongodb />, 'Firebase': <SiFirebase />,
  'GitHub': <FaGithub />, 'Netlify': <SiNetlify />, 'Vercel': <SiVercel />, 'Postman': <SiPostman />,
  'C++': <SiCplusplus />, 'Python': <FaPython />, 'Jupyter': <SiJupyter />
};

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring", 
      stiffness: 100,
      damping: 12,
      staggerChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
};

const Skills = () => (
  <section className={styles.skillsSection} id="skills">
    <motion.h2 
      className={styles.glowTitle}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Skills
    </motion.h2>
    
    <motion.div 
      className={styles.skillsGrid}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skillsData.map((category, categoryIndex) => (
        <motion.div
          className={styles.skillCategory}
          key={category.category}
          variants={categoryVariants}
          custom={categoryIndex}
        >
          <motion.h3 
            className={styles.categoryTitle}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {category.category}
          </motion.h3>
          
          <motion.div 
            className={styles.skillIcons}
            variants={containerVariants}
          >
            {category.skills.map((skill) => (
              <motion.div 
                className={styles.skillCard} 
                key={skill}
                variants={skillVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.7), 0 0 40px rgba(57, 255, 20, 0.4)' 
                }}
              >
                <span className={styles.icon}>{iconMap[skill] || <FaDatabase />}</span>
                <span className={styles.skillName}>{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
