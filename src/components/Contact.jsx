import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className={styles.contactSection}
    >
      <h2 className={styles.glowTitle}>
        Contact Me
      </h2>
      <motion.form
        className={styles.contactForm}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        <div className={styles.formRow}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${styles.inputField} ${styles.textArea}`}
        />
        <button
          type="submit"
          className={styles.submitBtn}
        >
          Send Message
        </button>
        {sent && (
          <motion.div
            className={styles.successMsg}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
          >
            Thank you! Message sent.
          </motion.div>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
