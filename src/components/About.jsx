

import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import styles from '../styles/About.module.css';
import timelineStyles from '../styles/Timeline.module.css';

const timelineData = [
  {
    type: "internship",
    title: "Software Engineering Intern",
    company: "Tiers Ltd",
    date: "June 2025 - Present",
    icon: "/assets/TiersLimitedlogo.jpg",
    details: [
      "Learning and working with the MERN stack: MongoDB, Express.js, React.js, Node.js",
      "Developed responsive UI components using React.js",
      "Integrated Firebase services like Firestore and Authentication",
      "Built and tested CRUD operations in real-time apps",
      "Collaborated with senior developers in an Agile team",
      "Used Git & GitHub for version control and team collaboration",
      "Improved UI/UX with custom CSS and clean design practices"
    ]
  },
  {
    type: "award",
    title: "Deans Honor List - Fall 2023",
    company: "University of Lahore",
    date: "Fall 2023",
    icon: "/assets/UniversityofLahorelogo.jpg",
    details: ["Awarded for academic excellence at the University of Lahore."]
  },
  {
    type: "award",
    title: "Bug Finder Winner - Beam 9.0",
    company: "Beam 9.0",
    date: "2023",
    icon: "/assets/UniversityofLahorelogo.jpg",
    details: ["Winner of a debugging competition for exceptional performance in problem-solving."]
  }
];


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
          <motion.div 
            className={timelineStyles.skillsRow}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skillsData[0].skills.map((skill, index) => (
              <motion.span 
                key={skill} 
                className={timelineStyles.skillTag}
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring", 
                  stiffness: 300
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          {/* Timeline */}
          <motion.div 
            className={timelineStyles.timelineContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className={timelineStyles.timelineHeading}>Timeline</h3>
            <ul className={timelineStyles.timelineList}>
              {timelineData.map((item) => (
                <motion.li 
                  key={item.title} 
                  className={`${timelineStyles.timelineItem} ${timelineStyles.mobileTimelineItem}`}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
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
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
