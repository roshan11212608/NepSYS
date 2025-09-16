import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ icon, title, description }) => (
  <div className={styles.card}>
    {icon && <div className={styles.icon}>{icon}</div>}
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default ServiceCard;
