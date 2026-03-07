import { useState } from 'react';
import { useAuth } from './authContext';

// Custom hook for login
export const useLogin = () => {
  const { login, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    clearError,
  };
};

// Custom hook for registration
export const useRegister = () => {
  const { register, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    clearError,
  };
};

// Custom hook for protected routes
export const useProtectedRoute = () => {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  return {
    isAuthenticated,
    isLoading,
    user,
  };
};
