// Dashboard Home - Main dashboard page
import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../../components/ui/Button';
import styles from './Home.module.css';

const DashboardHome = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Projects', value: '24', change: '+12%' },
    { label: 'Active Tasks', value: '8', change: '+25%' },
    { label: 'Completed', value: '156', change: '+8%' },
    { label: 'Team Members', value: '12', change: '0%' }
  ];

  const recentProjects = [
    { name: 'E-commerce Platform', status: 'Active', progress: 75 },
    { name: 'School Management', status: 'Completed', progress: 100 },
    { name: 'Mobile App', status: 'In Progress', progress: 45 },
    { name: 'API Integration', status: 'Planning', progress: 10 }
  ];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>
          Welcome back, {user?.firstName || 'User'}!
        </h1>
        <p className={styles.welcomeSubtitle}>
          Here's what's happening with your projects today.
        </p>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <h3 className={styles.statLabel}>{stat.label}</h3>
            <div className={styles.statValue}>
              <span className={styles.statNumber}>{stat.value}</span>
              {stat.change && (
                <span className={`${styles.statChange} ${stat.change.startsWith('+') ? styles.positive : styles.negative}`}>
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent Projects</h2>
          <Button variant="secondary" size="small">
            View All Projects
          </Button>
        </div>

        <div className={styles.projectsGrid}>
          {recentProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <span className={`${styles.projectStatus} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
                  {project.status}
                </span>
              </div>
              <div className={styles.projectProgress}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className={styles.progressText}>{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.quickActions}>
        <h3 className={styles.quickActionsTitle}>Quick Actions</h3>
        <div className={styles.quickActionsGrid}>
          <Button variant="primary" className={styles.actionButton}>
            Create New Project
          </Button>
          <Button variant="secondary" className={styles.actionButton}>
            View Reports
          </Button>
          <Button variant="secondary" className={styles.actionButton}>
            Team Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
