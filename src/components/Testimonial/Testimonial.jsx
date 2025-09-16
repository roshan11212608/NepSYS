import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = ({ name, text, company, image }) => (
  <div className={styles.testimonial}>
    {image && <img src={image} alt={name} className={styles.image} />}
    <div className={styles.content}>
      <p className={styles.text}>&ldquo;{text}&rdquo;</p>
      <div className={styles.meta}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{company}</span>
      </div>
    </div>
  </div>
);

export default Testimonial;
