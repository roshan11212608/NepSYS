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
      <li><strong>Modern Web Development:</strong> Full-stack development with cutting-edge frameworks.</li>
      <li><strong>Cloud Architecture:</strong> Design and deploy scalable cloud solutions.</li>
      <li><strong>DevOps & Automation:</strong> Build efficient CI/CD pipelines and automated workflows.</li>
    </ul>
  </div>
  <Footer/>
  </>
);

export default Training;
