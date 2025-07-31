

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, FaTimes, FaHome, FaUser, FaCode, 
  FaLaptopCode, FaTrophy, FaCertificate, FaEnvelope 
} from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const navLinks = [
  { to: 'home', label: 'Home', icon: <FaHome /> },
  { to: 'about', label: 'About', icon: <FaUser /> },
  { to: 'skills', label: 'Skills', icon: <FaCode /> },
  { to: 'projects', label: 'Projects', icon: <FaLaptopCode /> },
  { to: 'achievements', label: 'Achievements', icon: <FaTrophy /> },
  { to: 'certificates', label: 'Certificates', icon: <FaCertificate /> },
  { to: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) && 
        menuBtnRef.current && 
        !menuBtnRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [menuOpen]);

  // Focus trap for sidebar
  useEffect(() => {
    if (!menuOpen) return;
    
    const sidebar = sidebarRef.current;
    const focusableElements = sidebar.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    sidebar.addEventListener('keydown', handleTabKey);
    return () => sidebar.removeEventListener('keydown', handleTabKey);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.logoContainer}>
          <div className={styles.logoImageWrapper}>
            <img 
              src="/assets/ranaKhawarAli.jpg" 
              alt="Rana Khawar Ali" 
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logoText}>Rana Khawar Ali</div>
        </div>
        
        <div className={styles.desktopLinks}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass={styles.activeLink}
                className={styles.link}
              >
                <span className={styles.linkText}>{link.label}</span>
                <span className={styles.linkUnderline}></span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.button 
          className={`${styles.menuBtn} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          ref={menuBtnRef}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className={styles.hamburgerIcon}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </motion.button>
      </motion.nav>

      {/* Sidebar for mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.aside 
              className={styles.sidebar}
              ref={sidebarRef}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className={styles.sidebarHeader}>
                <div className={styles.sidebarTitle}>Menu</div>
                <motion.button 
                  className={styles.closeBtn}
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </motion.button>
              </div>

              <div className={styles.sidebarProfile}>
                <div className={styles.profileImageWrapper}>
                  <img 
                    src="/assets/ranaKhawarAli.jpg" 
                    alt="Rana Khawar Ali" 
                    className={styles.profileImage} 
                  />
                </div>
                <div className={styles.profileName}>Rana Khawar Ali</div>
                <div className={styles.profileTitle}>Software Developer</div>
              </div>

              <nav className={styles.sidebarNav}>
                <ul className={styles.sidebarMenu}>
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.to}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.07, duration: 0.3 }}
                      className={styles.sidebarMenuItem}
                    >
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        activeClass={styles.activeSidebarLink}
                        className={styles.sidebarLink}
                        onClick={toggleMenu}
                      >
                        <span className={styles.linkIcon}>{link.icon}</span>
                        <span className={styles.linkLabel}>{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
