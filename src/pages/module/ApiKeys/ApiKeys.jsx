import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './ApiKeys.module.css';

const ApiKeys = () => {
  return (
    <div className={styles.apiKeysContainer}>
      <Sidebar />
      <main className={styles.apiKeysMain}>
        <div className={styles.apiKeysContent}>
          <h1 className={styles.apiKeysTitle}>
            API Keys
          </h1>
          <p className={styles.apiKeysSubtitle}>
            Manage API keys and developer access
          </p>
        </div>
      </main>
    </div>
  );
};

export default ApiKeys;
