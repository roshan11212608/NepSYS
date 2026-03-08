import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Billing.module.css';

const Billing = () => {
  return (
    <div className={styles.billingContainer}>
      <Sidebar />
      <main className={styles.billingMain}>
        <div className={styles.billingContent}>
          <h1 className={styles.billingTitle}>
            Billing
          </h1>
          <p className={styles.billingSubtitle}>
            Manage invoices, payments, and subscriptions
          </p>
        </div>
      </main>
    </div>
  );
};

export default Billing;
