import React from 'react';
import styles from './Portfolio.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Portfolio = () => (
  <>
  <Header/>
  <div className={styles.portfolio}>
    <h2>Portfolio</h2>
    <p>Showcase of our delivered projects: school apps, travel apps, and more.</p>
  </div>
  <Footer/>
  </>
  
);

export default Portfolio;
