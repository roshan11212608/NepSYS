// Custom Hook - Authentication utilities
import { useAuth } from './authContext';

// Custom hook for authentication utilities
export const useAuthUtils = () => {
  const { user, isAuthenticated, error } = useAuth();

  // Check if user has specific role
  const hasRole = (role) => {
    return user && user.role === role;
  };

  // Check if user has specific permission
  const hasPermission = (permission) => {
    return user && user.permissions && user.permissions.includes(permission);
  };

  // Get user display name
  const getDisplayName = () => {
    if (!user) return 'Guest';
    return user.firstName && user.lastName 
      ? `${user.firstName} ${user.lastName}`
      : user.email || 'User';
  };

  // Get user initials for avatar
  const getInitials = () => {
    if (!user) return 'G';
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return 'U';
  };

  // Check if profile is complete
  const isProfileComplete = () => {
    return user && 
           user.firstName && 
           user.lastName && 
           user.email && 
           user.phone;
  };

  // Get authentication error message
  const getErrorMessage = () => {
    if (!error) return null;
    
    // Common error messages
    const errorMessages = {
      'Invalid credentials': 'Invalid email or password',
      'User not found': 'No account found with this email',
      'Email already exists': 'An account with this email already exists',
      'Weak password': 'Password does not meet security requirements',
      'Token expired': 'Your session has expired, please login again'
    };

    return errorMessages[error] || error;
  };

  return {
    user,
    isAuthenticated,
    error,
    hasRole,
    hasPermission,
    getDisplayName,
    getInitials,
    isProfileComplete,
    getErrorMessage
  };
};

export default useAuthUtils;
