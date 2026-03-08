import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Integrations.module.css';

const Integrations = () => {
  return (
    <div className={styles.integrationsContainer}>
      <Sidebar />
      <main className={styles.integrationsMain}>
        <div className={styles.integrationsContent}>
          <h1 className={styles.integrationsTitle}>
            Integrations
          </h1>
          <p className={styles.integrationsSubtitle}>
            Connect with third-party services and APIs
          </p>
        </div>
      </main>
    </div>
  );
};

export default Integrations;
