import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './CompanySettings.module.css';

const CompanySettings = () => {
  return (
    <div className={styles.companySettingsContainer}>
      <Sidebar />
      <main className={styles.companySettingsMain}>
        <div className={styles.companySettingsContent}>
          <h1 className={styles.companySettingsTitle}>
            Company Settings
          </h1>
          <p className={styles.companySettingsSubtitle}>
            Configure company-wide settings and preferences
          </p>
        </div>
      </main>
    </div>
  );
};

export default CompanySettings;
