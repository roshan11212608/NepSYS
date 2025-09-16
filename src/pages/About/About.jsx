import React from 'react';
import styles from './About.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const About = () => (
  <>
  <Header/>
  <div className={styles.about}>
    <h2>About NepSYS</h2>
    <p>NepSYS is a leading Nepali software company delivering custom software solutions and training programs. We are committed to quality, innovation, and empowering our clients with technology.</p>
  </div>
  <Footer/>
  </>
);

export default About;
