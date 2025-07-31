

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'; // used below
import ParticlesBG from './ParticlesBG';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Neon Particles Background */}
      <ParticlesBG />
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.avatarWrap}>
          <img src="/assets/ranaKhawarAli.jpg" alt="Rana Khawar Ali" className={styles.avatarImg} />
        </div>
        <h1 className={styles.glowTitle}>Rana Khawar Ali</h1>
        <h2 className={styles.typewriter}>
          <span>
            <Typewriter
              words={['MERN Stack Developer', 'AI Engineer', 'Student']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className={styles.btnRow}>
          <a href="#contact" className={styles.neonBtn}>Hire Me</a>
          <a href="https://drive.google.com/file/d/14EITs8xwco2iVfWeciCOAcw97sUHLajl/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.neonBtn}>View Resume</a>
        </div>
        <div className={styles.socialRow}>
          <a href="https://www.linkedin.com/in/khawarrustam" target="_blank" rel="noopener noreferrer" className={styles.neonBtn}>LinkedIn</a>
          <a href="https://github.com/khawarrustam" target="_blank" rel="noopener noreferrer" className={styles.neonBtn}>GitHub</a>
        </div>
        {/* Scroll Down Arrow */}
        <a href="#about" className={styles.scrollArrow}>
          <span className={styles.arrowIcon}></span>
          <span className={styles.arrowText}>Scroll</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
