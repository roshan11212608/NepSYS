import React from 'react';
import styles from './Portfolio.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Portfolio = () => (
  <>
  <Header/>
  <div className={styles.portfolio}>
    <h2>Portfolio</h2>
    <p>Showcase of our delivered digital solutions: enterprise software, cloud platforms, and automated systems.</p>
  </div>
  <Footer/>
  </>
  
);

export default Portfolio;
