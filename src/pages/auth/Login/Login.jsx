// Login Page - User authentication with NEXA theme
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLogin } from '../../../services/modules/auth/authHooks';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, isLoading, error, clearError } = useLogin();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    clearError();
    
    const success = await handleSubmit(e);
    if (success) {
      navigate('/dashboard/home');
    }
  };

  useEffect(() => {
    clearError();
  }, [clearError]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h1 className={styles.loginTitle}>NEXA</h1>
          <p className={styles.loginSubtitle}>Welcome back! Sign in to continue</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleFormSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Username or Email
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username or email"
              className={styles.input}
              required
              autoComplete="username"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={styles.input}
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <button
            type="submit"
            className={styles.loginButton}
            disabled={!formData.username || !formData.password || isLoading}
          >
            {isLoading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In</span>
                <span className={styles.buttonArrow}>→</span>
              </>
            )}
          </button>
        </form>

        <div className={styles.loginFooter}>
          <p>
            Don't have an account?{' '}
            <Link to="/auth/register" className={styles.link}>
              Get Started
            </Link>
          </p>
          <div className={styles.backButtonContainer}>
            <button 
              type="button" 
              className={styles.backButton}
              onClick={() => navigate('/')}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
