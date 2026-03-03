// Register Page - User registration
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { validateEmail, validatePassword } from '../../../utils/helpers';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const { register, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({ isValid: true, errors: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update password validation when password changes
    if (name === 'password') {
      const validation = validatePassword(value);
      setPasswordValidation(validation);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setLoading(true);

    // Validate form
    if (!validateEmail(formData.email)) {
      setLoading(false);
      return;
    }

    const validation = validatePassword(formData.password);
    setPasswordValidation(validation);
    if (!validation.isValid) {
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      return;
    }

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      console.error('Registration failed:', error);
    }
  };

  useEffect(() => {
    // Clear form on mount
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    clearError();
  }, [clearError]);

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <div className={styles.registerHeader}>
          <h1 className={styles.registerTitle}>Create Account</h1>
          <p className={styles.registerSubtitle}>Join us to get started</p>
        </div>

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <Input
              type="text"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className={styles.formRow}>
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>

          <Input
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            error={error === 'Email already exists' ? 'An account with this email already exists' : ''}
          />

          <Input
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            error={passwordValidation.errors.length > 0 ? passwordValidation.errors[0] : ''}
          />

          <Input
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            error={formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''}
          />

          <Button
            type="submit"
            variant="primary"
            size="large"
            loading={loading}
            disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword}
            className={styles.registerButton}
          >
            Create Account
          </Button>
        </form>

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
