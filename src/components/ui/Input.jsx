// Input Component - Reusable input with validation
import React from 'react';
import styles from './Input.module.css';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  disabled = false, 
  required = false, 
  className = '',
  ...props 
}) => {
  const inputClass = [
    styles.input,
    error && styles.error,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      />
      {error && (
        <span className={styles.errorMessage}>{error}</span>
      )}
    </div>
  );
};

export default Input;
