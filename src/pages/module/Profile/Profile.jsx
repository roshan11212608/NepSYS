// Profile Page - User profile management with welcome dashboard
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/modules/auth';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Profile.module.css';

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Debug logging
  console.log('Profile Debug - User:', user);
  console.log('Profile Debug - Is Authenticated:', isAuthenticated);
  
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    username: user?.username || '',
    role: user?.role || '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // TODO: Implement profile update API call
      console.log('Profile update:', formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Profile update failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        username: user.username || '',
        role: user.role || '',
      });
    }
  }, [user]);

  // Show loading state if not authenticated or no user data
  if (!isAuthenticated || !user) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.loadingState}>
          <h2>Loading user data...</h2>
          <p>Please wait while we fetch your information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <Sidebar />
      <main className={styles.profileMain}>
        <div className={styles.profileContent}>
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

      {/* Profile Edit Form */}
      <div className={styles.profileForm}>
        <h2 className={styles.formTitle}>Edit Profile</h2>
        
        <div className={styles.formGrid}>
          <Input
            type="text"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <Input
            type="text"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <Input
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled // Email should not be easily changeable
          />

          <Input
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <Input
            type="text"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled // Username should not be easily changeable
          />

          <Input
            type="text"
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled // Role is managed by admin
          />
        </div>

        <div className={styles.formActions}>
          <Button
            type="submit"
            variant="primary"
            loading={loading}
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
          
          <Button
            type="button"
            variant="secondary"
            onClick={() => window.location.reload()}
          >
            Cancel
          </Button>
          
          {success && (
            <div className={styles.successMessage}>
              Profile updated successfully!
            </div>
          )}
        </div>
      </div>

      {/* Danger Zone */}
      <div className={styles.dangerZone}>
        <h2 className={styles.sectionTitle}>Danger Zone</h2>
        <div className={styles.dangerActions}>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              if (window.confirm('Are you sure you want to logout?')) {
                logout();
              }
            }}
          >
            Logout
          </Button>
        </div>
      </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
