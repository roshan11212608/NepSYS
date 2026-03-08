import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Users.module.css';

const UsersManagement = () => {
  return (
    <div className={styles.usersContainer}>
      <Sidebar />
      <main className={styles.usersMain}>
        <div className={styles.usersContent}>
          <h1 className={styles.usersTitle}>
            Users
          </h1>
          <p className={styles.usersSubtitle}>
            Manage user accounts and permissions
          </p>
        </div>
      </main>
    </div>
  );
};

export default UsersManagement;
