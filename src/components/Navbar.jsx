

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css'; // ensure file exists and path is correct

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'certificates', label: 'Certificates' },
  { to: 'contact', label: 'Contact' },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles.logo}>RKA</div>
      <div className={styles.links}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass={styles.activeLink}
            className={styles.link}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass={styles.activeMobileLink}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
