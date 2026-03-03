// Profile Page - User profile management
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useAuthUtils } from '../../../hooks/useAuth';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import styles from './Profile.module.css';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { getInitials, getDisplayName } = useAuthUtils();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    company: user?.company || '',
    bio: user?.bio || ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
      await updateProfile(formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setLoading(false);
      console.error('Profile update failed:', error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle avatar upload
      console.log('Avatar upload:', file.name);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            <span className={styles.avatarText}>{getInitials()}</span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className={styles.avatarInput}
          />
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>{getDisplayName()}</h1>
          <p className={styles.profileEmail}>{user?.email}</p>
        </div>
      </div>

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
          />

          <Input
            type="tel"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <Input
            type="text"
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formSection}>
          <label className={styles.textareaLabel}>Bio</label>
          <textarea
            className={styles.textarea}
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about yourself..."
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
          
          {success && (
            <div className={styles.successMessage}>
              Profile updated successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
