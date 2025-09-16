import React from 'react';
import styles from './TrainingCard.module.css';

const TrainingCard = ({ title, description, date, image }) => (
  <div className={styles.card}>
    {image && <img src={image} alt={title} className={styles.image} />}
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {date && <span className={styles.date}>{date}</span>}
    </div>
  </div>
);

export default TrainingCard;
