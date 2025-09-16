import React from 'react';
import styles from './Training.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Training = () => (
  <>
  <Header/>
  <div className={styles.training}>
    <h2>Training Programs</h2>
    <ul>
      <li>React Bootcamp: Intensive hands-on React training for beginners.</li>
      <li>Backend with Node.js: Learn to build scalable backends.</li>
    </ul>
  </div>
  <Footer/>
  </>
);

export default Training;
