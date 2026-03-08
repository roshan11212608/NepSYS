import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Analytics.module.css';

const Analytics = () => {
  return (
    <div className={styles.analyticsContainer}>
      <Sidebar />
      <main className={styles.analyticsMain}>
        <div className={styles.analyticsContent}>
          <h1 className={styles.analyticsTitle}>
            Analytics
          </h1>
          <p className={styles.analyticsSubtitle}>
            View detailed analytics and reports
          </p>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
