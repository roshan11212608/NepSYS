import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <Sidebar />
      <main className={styles.productsMain}>
        <div className={styles.productsContent}>
          <h1 className={styles.productsTitle}>
            Products
          </h1>
          <p className={styles.productsSubtitle}>
            Manage your NEXA products and services
          </p>
        </div>
      </main>
    </div>
  );
};

export default Products;
