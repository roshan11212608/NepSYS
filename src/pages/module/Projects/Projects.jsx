import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <Sidebar />
      <main className={styles.projectsMain}>
        <div className={styles.projectsContent}>
          <h1 className={styles.projectsTitle}>
            Projects
          </h1>
          <p className={styles.projectsSubtitle}>
            Manage your projects and track progress
          </p>
        </div>
      </main>
    </div>
  );
};

export default Projects;
