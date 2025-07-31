
import React from 'react';
import { FaArrowUp, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.neonLine} />
    <div className={styles.footerContent}>
      <div className={styles.socials}>
        <a 
          href="https://www.linkedin.com/in/khawarrustam" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
          className={styles.socialLink}
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/khawarrustam" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub"
          className={styles.socialLink}
        >
          <FaGithub />
        </a>
      </div>
      <div className={styles.copyright}>
        All rights reserved © {new Date().getFullYear()} Rana Khawar Ali
      </div>
    </div>
    <button
      className={styles.scrollTopBtn}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Scroll to top"
    >
      <FaArrowUp className={styles.scrollIcon} />
    </button>
  </footer>
);

export default Footer;
