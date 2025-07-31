

import React from 'react';
import { motion } from 'framer-motion';
import timeline from '../data/timeline.json';
import skillsData from '../data/skills.json';
import styles from '../styles/About.module.css';
import timelineStyles from '../styles/Timeline.module.css';


const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      {/* Slide-in glassmorphism card */}
      <motion.div
        className={styles.aboutCard}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.avatarWrap}>
          <img src="/assets/ranaKhawarAli.jpg" alt="Rana Khawar Ali" className={styles.avatar} />
        </div>
        <div className={styles.aboutContent}>
          <h2 className={styles.glowTitle}>About Me</h2>
          <p className={styles.aboutText}>
            Hi, I’m Khawar — a <strong>Computer Science student</strong> at the <strong>University of Lahore</strong> with a <strong>CGPA of 3.89/4.00</strong>.<br/>
            I love building clean, fast, and engaging web experiences. Currently a Software Engineering Intern at Tiers Ltd.
          </p>
          {/* Glowing horizontal skill icons */}
          <div className={timelineStyles.skillsRow}>
            {skillsData[0].skills.map(skill => (
              <span key={skill} className={timelineStyles.skillTag}>{skill}</span>
            ))}
          </div>
          {/* Timeline */}
          <div className={timelineStyles.timelineContainer}>
            <h3 className={timelineStyles.timelineHeading}>Timeline</h3>
            <ul className={timelineStyles.timelineList}>
              {timeline.map((item) => (
                <li key={item.title} className={timelineStyles.timelineItem}>
                  <img src={item.icon} alt={item.type} className={timelineStyles.timelineIcon} />
                  <div className={timelineStyles.timelineContent}>
                    <div className={timelineStyles.timelineItemTitle}>{item.title}</div>
                    <div className={timelineStyles.timelineItemCompany}>
                      {item.company} <span className={timelineStyles.timelineItemDate}>({item.date})</span>
                    </div>
                    <ul className={timelineStyles.timelineDetails}>
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
