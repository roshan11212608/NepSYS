import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contact}>
    <h2>Contact Us</h2>
    <form className={styles.form}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required rows={5} />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
