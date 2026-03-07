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
  name, // Add name prop
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
        name={name} // Pass name prop to input
        style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          border: '1px solid #D1D5DB',
          borderRadius: '6px',
          fontSize: '0.9rem',
          background: '#FFFFFF',
          color: '#1F2937',
          boxSizing: 'border-box'
        }}
        {...props}
      />
      {error && (
        <span className={styles.errorMessage}>{error}</span>
      )}
    </div>
  );
};

export default Input;
