// Settings Page - User settings management
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { USER_ROLES, PERMISSIONS } from '../../../utils/constants';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import styles from './Settings.module.css';

const Settings = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState({
    notifications: true,
    emailAlerts: true,
    twoFactorAuth: false,
    language: 'en',
    theme: 'dark'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? value : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setLoading(false);
      console.error('Settings update failed:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        logout();
      } catch (error) {
        setLoading(false);
        console.error('Account deletion failed:', error);
      }
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsHeader}>
        <h1 className={styles.settingsTitle}>Settings</h1>
        <p className={styles.settingsSubtitle}>Manage your account preferences and security</p>
      </div>

      <div className={styles.settingsForm}>
        <div className={styles.settingsSection}>
          <h2 className={styles.sectionTitle}>Notifications</h2>
          
          <div className={styles.settingItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
              />
              Email Notifications
            </label>
          </div>

          <div className={styles.settingItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="emailAlerts"
                checked={formData.emailAlerts}
                onChange={handleChange}
              />
              Push Notifications
            </label>
          </div>
        </div>

        <div className={styles.settingsSection}>
          <h2 className={styles.sectionTitle}>Security</h2>
          
          <div className={styles.settingItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={formData.twoFactorAuth}
                onChange={handleChange}
              />
              Two-Factor Authentication
            </label>
          </div>
        </div>

        <div className={styles.settingsSection}>
          <h2 className={styles.sectionTitle}>Preferences</h2>
          
          <div className={styles.settingItem}>
            <label className={styles.selectLabel}>
              Language
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="en">English</option>
                <option value="ne">नेपाली</option>
              </select>
            </label>
          </div>

          <div className={styles.settingItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="theme"
                checked={formData.theme === 'dark'}
                onChange={(e) => handleChange({
                  target: {
                    name: 'theme',
                    value: e.target.checked ? 'dark' : 'light',
                    type: 'checkbox'
                  }
                })}
              />
              Dark Theme
            </label>
          </div>
        </div>

        <div className={styles.formActions}>
          <Button
            type="submit"
            variant="primary"
            loading={loading}
            onClick={handleSubmit}
          >
            Save Settings
          </Button>
          
          {success && (
            <div className={styles.successMessage}>
              Settings saved successfully!
            </div>
          )}
        </div>

        <div className={styles.dangerSection}>
          <h2 className={styles.dangerTitle}>Danger Zone</h2>
          <p className={styles.dangerSubtitle}>Irreversible actions</p>
          
          <Button
            variant="danger"
            onClick={handleDeleteAccount}
            className={styles.deleteButton}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
