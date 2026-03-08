// Home Dashboard - User welcome page with details (With Sidebar Layout)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/modules/auth';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Home.module.css';

const Home = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Debug logging
  console.log('Home Debug - User:', user);
  console.log('Home Debug - Is Authenticated:', isAuthenticated);
  console.log('Home Debug - Token in localStorage:', localStorage.getItem('accessToken'));
  console.log('Home Debug - Cached user data:', localStorage.getItem('userData'));

  // Show loading state if not authenticated or no user data
  if (!isAuthenticated || !user) {
    return (
      <div className={styles.loadingState}>
        <h2>Loading user data...</h2>
        <p>Please wait while we fetch your information.</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Not available';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getInitials = () => {
    if (!user?.firstName && !user?.lastName) return user?.username?.charAt(0).toUpperCase() || 'U';
    return `${user?.firstName?.charAt(0) || ''}${user?.lastName?.charAt(0) || ''}`.toUpperCase();
  };

  const getDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user?.username || 'User';
  };

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <main className={styles.mainContent}>
        <div className={styles.homeContainer}>
          {/* Welcome Header */}
          <div className={styles.welcomeHeader}>
            <div className={styles.userAvatar}>
              <span className={styles.avatarText}>{getInitials()}</span>
            </div>
            <div className={styles.welcomeMessage}>
              <h1 className={styles.greeting}>
                {getGreeting()}, {getDisplayName()}! 👋
              </h1>
              <p className={styles.welcomeSubtext}>
                Welcome back to your NEXA dashboard. Here's an overview of your account.
              </p>
            </div>
            <div className={styles.roleBadge}>
              {user?.role || 'USER'}
            </div>
          </div>

          {/* User Details Cards */}
          <div className={styles.detailsGrid}>
            {/* Account Information Card */}
            <div className={styles.detailCard}>
              <div className={styles.cardHeader}>
                <h3>👤 Account Information</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Username:</span>
                  <span className={styles.detailValue}>{user?.username}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Email:</span>
                  <span className={styles.detailValue}>{user?.email}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Full Name:</span>
                  <span className={styles.detailValue}>
                    {user?.firstName && user?.lastName 
                      ? `${user.firstName} ${user.lastName}` 
                      : 'Not set'}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Phone:</span>
                  <span className={styles.detailValue}>{user?.phoneNumber || 'Not set'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Role:</span>
                  <span className={styles.roleTag}>{user?.role || 'USER'}</span>
                </div>
              </div>
            </div>

            {/* Account Status Card */}
            <div className={styles.detailCard}>
              <div className={styles.cardHeader}>
                <h3>📊 Account Status</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Status:</span>
                  <span className={styles.statusActive}>Active</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Member Since:</span>
                  <span className={styles.detailValue}>{formatDate(user?.createdAt)}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Last Updated:</span>
                  <span className={styles.detailValue}>{formatDate(user?.updatedAt)}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>User ID:</span>
                  <span className={styles.detailValue}>#{user?.id}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className={styles.detailCard}>
              <div className={styles.cardHeader}>
                <h3>⚡ Quick Actions</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.quickActions}>
                  <button 
                    className={styles.actionButton}
                    onClick={() => navigate('/dashboard/profile')}
                  >
                    📝 Edit Profile
                  </button>
                  <button 
                    className={styles.actionButton}
                    onClick={() => navigate('/dashboard/inbox')}
                  >
                    🔔 Notifications
                  </button>
                  <button 
                    className={styles.actionButton}
                    onClick={() => navigate('/dashboard/company-settings')}
                  >
                    ⚙️ Settings
                  </button>
                  <button 
                    className={styles.actionButton}
                    onClick={() => navigate('/dashboard/analytics')}
                  >
                    📈 View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Summary */}
          <div className={styles.activitySection}>
            <div className={styles.sectionHeader}>
              <h3>📈 Your Activity Summary</h3>
            </div>
            <div className={styles.activityGrid}>
              <div className={styles.activityCard}>
                <div className={styles.activityIcon}>📁</div>
                <div className={styles.activityInfo}>
                  <h4>Projects</h4>
                  <p>Manage your projects</p>
                </div>
              </div>
              <div 
                className={styles.activityCard}
                onClick={() => navigate('/dashboard/clients')}
              >
                <div className={styles.activityIcon}>👥</div>
                <div className={styles.activityInfo}>
                  <h4>Clients</h4>
                  <p>View your clients</p>
                </div>
              </div>
              <div 
                className={styles.activityCard}
                onClick={() => navigate('/dashboard/billing')}
              >
                <div className={styles.activityIcon}>💰</div>
                <div className={styles.activityInfo}>
                  <h4>Billing</h4>
                  <p>View invoices & payments</p>
                </div>
              </div>
              <div 
                className={styles.activityCard}
                onClick={() => navigate('/dashboard/inbox')}
              >
                <div className={styles.activityIcon}>📧</div>
                <div className={styles.activityInfo}>
                  <h4>Inbox</h4>
                  <p>Check your messages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
