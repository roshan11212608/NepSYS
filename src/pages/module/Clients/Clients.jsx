import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Clients.module.css';

const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
      <Sidebar />
      <main className={styles.clientsMain}>
        <div className={styles.clientsContent}>
          <h1 className={styles.clientsTitle}>
            Clients
          </h1>
          <p className={styles.clientsSubtitle}>
            Manage your client relationships and projects
          </p>
        </div>
      </main>
    </div>
  );
};

export default Clients;
