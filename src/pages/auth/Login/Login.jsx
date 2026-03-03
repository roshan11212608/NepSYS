// Login Page - User authentication
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setLoading(true);

    try {
      await login(formData);
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    // Clear form on mount
    setFormData({ email: '', password: '' });
    clearError();
  }, [clearError]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <div className={styles.logoIcon}>🔐</div>
          <h1 className={styles.loginTitle}>Welcome Back</h1>
          <p className={styles.loginSubtitle}>Sign in to your NEXA account</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            error={error === 'Invalid credentials' ? 'Invalid email or password' : ''}
          />

          <Input
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            error={error === 'Invalid credentials' ? 'Invalid email or password' : ''}
          />

          <div className={styles.formOptions}>
            <label className={styles.rememberMe}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkmark}></span>
              Remember me
            </label>
            <Link to="/auth/forgot-password" className={styles.forgotLink}>
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="large"
            loading={loading}
            disabled={!formData.email || !formData.password}
            className={styles.loginButton}
          >
            {loading ? 'Signing In...' : '🚀 Sign In'}
          </Button>
        </form>

        <div className={styles.loginFooter}>
          <p>
            Don't have an account?{' '}
            <Link to="/auth/register" className={styles.link}>
              🎯 Sign up for NEXA
            </Link>
          </p>
        </div>

        <div className={styles.securityNote}>
          <div className={styles.securityItem}>
            <span className={styles.securityIcon}>🔒</span>
            <span className={styles.securityText}>Secure login encrypted</span>
          </div>
          <div className={styles.securityItem}>
            <span className={styles.securityIcon}>✓</span>
            <span className={styles.securityText}>Trusted by 1000+ users</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
