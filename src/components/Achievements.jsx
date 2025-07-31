import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import styles from '../styles/Achievements.module.css';

const stats = [
  { label: 'Repositories', value: 25, icon: <FaStar className={styles.cyanIcon} /> },
  { label: 'Projects', value: 12, icon: <FaMedal className={styles.pinkIcon} /> },
  { label: 'Achievements', value: 7, icon: <FaTrophy className={styles.limeIcon} /> },
];

const badges = [
  { text: "Dean's List", color: styles.cyanBadge },
  { text: 'Competitions', color: styles.pinkBadge },
  { text: 'Internships', color: styles.limeBadge },
];

const Achievements = () => (
  <section className={styles.achievementsSection} id="achievements">
    <h2 className={styles.glowTitle}>Achievements</h2>
    <div className={styles.statsGrid}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={styles.statCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={styles.statIcon}>{stat.icon}</div>
          <div className={styles.statValue}>
            <CountUp end={stat.value} duration={2} />
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
        </motion.div>
      ))}
    </div>
    <div className={styles.badgeContainer}>
      {badges.map(badge => (
        <span key={badge.text} className={`${styles.badge} ${badge.color}`}>
          {badge.text}
        </span>
      ))}
    </div>
    <div className={styles.iconRow}>
      <FaTrophy className={`${styles.decorIcon} ${styles.limeIcon}`} />
      <FaMedal className={`${styles.decorIcon} ${styles.pinkIcon}`} />
      <FaStar className={`${styles.decorIcon} ${styles.cyanIcon}`} />
    </div>
  </section>
);

export default Achievements;
