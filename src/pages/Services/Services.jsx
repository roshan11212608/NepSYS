import React from 'react';
import styles from './Services.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Services = () => (
  <>
  <Header/>
  <div className={styles.services}>
    <h2>Our Services</h2>
    <ul>
      <li>School Apps: Custom school management apps for Nepali schools.</li>
      <li>Travel Apps: Travel and tourism platforms for agencies and customers.</li>
      <li>Custom Platforms: Tailored solutions for your unique business needs.</li>
    </ul>
  </div>
  <Footer/>
</>
);

export default Services;
