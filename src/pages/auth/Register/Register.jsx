// Register Page - User registration with NEXA theme
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../services/modules/auth';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value);
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setLoading(true);
    
    try {
      await register(formData);
      setLoading(false);
      setShowSuccessModal(true);
      console.log('Registration successful, showing modal');
      
    } catch (error) {
      setLoading(false);
      console.error('Registration failed:', error);
      
      const errorText = error.response?.data?.message || error.message || 'Registration failed! Please try again.';
      setErrorMessage(errorText);
      setShowErrorModal(true);
    }
  };

  return (
    <div className={styles.registerContainer}>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.successModal}>
            {/* Decorative circles */}
            <div className={`${styles.modalDecoration} ${styles.modalDecorationTopRight}`}></div>
            <div className={`${styles.modalDecoration} ${styles.modalDecorationBottomLeft}`}></div>

            {/* Success Icon */}
            <div className={styles.successIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            {/* Success Message */}
            <h2 className={styles.modalTitle}>
              Account Created Successfully!
            </h2>
            
            <p className={styles.modalMessage}>
              Welcome aboard! Your account has been created successfully.
            </p>

            {/* Only Login Button */}
            <button
              className={styles.modalButton}
              onClick={() => navigate('/auth/login')}
            >
              Go to Login Now
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.successModal} style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(237, 137, 54, 0.1) 100%)',
            borderColor: 'rgba(255, 107, 107, 0.3)'
          }}>
            {/* Decorative circles */}
            <div className={`${styles.modalDecoration} ${styles.modalDecorationTopRight}`}></div>
            <div className={`${styles.modalDecoration} ${styles.modalDecorationBottomLeft}`}></div>

            {/* Error Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #FF6B6B, #ed8936)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 15px 30px rgba(255, 107, 107, 0.4)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>

            {/* Error Message */}
            <h2 className={styles.modalTitle}>
              Registration Failed!
            </h2>
            
            <p className={styles.modalMessage}>
              {errorMessage}
            </p>

            {/* Only Try Again Button */}
            <button
              className={styles.modalButton}
              onClick={() => {
                setShowErrorModal(false);
                const firstInput = document.querySelector('input[name="firstName"]');
                if (firstInput) {
                  firstInput.focus();
                }
              }}
            >
              Try Again Now
            </button>
          </div>
        </div>
      )}

      <div className={styles.registerCard}>
        <div className={styles.registerHeader}>
          <h1 className={styles.registerTitle}>NEXA</h1>
          <p className={styles.registerSubtitle}>Create your account to get started</p>
        </div>

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          {/* Two Column Layout */}
          <div className={styles.horizontalForm}>
            <div className={styles.formColumn}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  First Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                  className={styles.input}
                  autoComplete="given-name"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Username <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  required
                  minLength={3}
                  maxLength={50}
                  className={styles.input}
                  autoComplete="username"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={styles.input}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.formColumn}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Last Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                  className={styles.input}
                  autoComplete="family-name"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Password <span className={styles.required}>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password (at least 6 characters)"
                  required
                  minLength={6}
                  className={styles.input}
                  autoComplete="new-password"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Confirm Password <span className={styles.required}>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  minLength={6}
                  className={styles.input}
                  autoComplete="new-password"
                />
                {formData.password !== formData.confirmPassword && (
                  <div className={styles.errorText}>
                    Passwords do not match
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Phone Number - Full Width */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Phone Number <span className={styles.optional}>(optional)</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={styles.input}
              autoComplete="tel"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={styles.registerButton}
          >
            {loading ? (
              <span>Creating Account...</span>
            ) : (
              <>
                <span>Create Account</span>
                <span style={{fontSize: '1.1rem'}}>→</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className={styles.registerFooter}>
          <p>
            Already have an account?{' '}
            <Link to="/auth/login" className={styles.link}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
