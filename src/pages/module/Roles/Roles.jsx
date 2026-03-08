import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Roles.module.css';

const Roles = () => {
  return (
    <div className={styles.rolesContainer}>
      <Sidebar />
      <main className={styles.rolesMain}>
        <div className={styles.rolesContent}>
          <h1 className={styles.rolesTitle}>
            Roles & Permissions
          </h1>
          <p className={styles.rolesSubtitle}>
            Configure user roles and access permissions
          </p>
        </div>
      </main>
    </div>
  );
};

export default Roles;
