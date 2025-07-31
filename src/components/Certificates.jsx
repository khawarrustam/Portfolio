import React, { useState } from 'react';
import styles from '../styles/Certificates.module.css';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Dean's Honour List – Fall 2023 (University of Lahore)",
    image: "/assets/Dean's Honour List Fall'23.jpeg",
    description: "Awarded to Rana Khawar Ali for outstanding academic achievement in Fall 2023."
  },
  {
    title: "Beam 9.0 – Bug Finder Shield (UOL)",
    image: "/assets/Beam 9.0.jpeg",
    description: "Presented to Rana Khawar Ali for exceptional debugging skills at Beam 9.0, IEEE UOL."
  },
  {
    title: "Foundations of User Experience (UX) Design – Coursera/Google",
    image: "/assets/Coursera VAHUG5HZNTQB_page-0001.jpg",
    description: "Certificate of completion awarded to Rana Khawar Ali by Coursera & Google."
  },
  {
    title: "Databases and SQL for Data Science with Python",
    image: "/assets/Coursera OUBSLIAUMY42_page-0001.jpg",
    description: "Certificate of completion awarded to Rana Khawar Ali for Databases and SQL for Data Science with Python."
  },
  {
    title: "Python for Data Science, AI & Development",
    image: "/assets/Coursera YR26BTLF7WKR_page-0001.jpg",
    description: "Certificate of completion awarded to Rana Khawar Ali for Python for Data Science, AI & Development."
  },
  {
    title: "Tools for Data Science",
    image: "/assets/Coursera UI7QQ0URC002_page-0001.jpg",
    description: "Certificate of completion awarded to Rana Khawar Ali for Tools for Data Science."
  }
];

const Certificates = () => {
  const [modal, setModal] = useState(null);
  return (
    <section className={styles.certSection} id="certificates">
      <h2 className={styles.glowTitle}>Certificates & Achievements</h2>
      <div style={{textAlign: 'center', marginBottom: '2rem'}}>
        <a
          href="https://drive.google.com/file/d/14EITs8xwco2iVfWeciCOAcw97sUHLajl/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadBtn}
        >
          Download Resume
        </a>
      </div>
      <div className={styles.certGrid}>
        {certificates.map((cert, idx) => (
          <motion.div
            className={styles.certCard}
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setModal(cert)}
          >
            <img src={cert.image} alt={cert.title} className={styles.certImg} />
            <h3 className={styles.certTitle}>{cert.title}</h3>
            <p className={styles.certDesc}>{cert.description}</p>
          </motion.div>
        ))}
      </div>
      {modal && (
        <div className={styles.modalOverlay} onClick={() => setModal(null)}>
          <motion.div 
            className={styles.modalContent} 
            initial={{ scale: 0.7 }} 
            animate={{ scale: 1 }} 
            onClick={e => e.stopPropagation()}
          >
            <img src={modal.image} alt={modal.title} className={styles.modalImg} />
            <h3 className={styles.certTitle} style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{modal.title}</h3>
            <p className={styles.certDesc} style={{fontSize: '1.1rem'}}>{modal.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
