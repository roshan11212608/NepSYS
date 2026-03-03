// Mock Authentication Context for Testing
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Mock user data
const MOCK_USERS = [
  {
    email: 'admin@nexa.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin'
  },
  {
    email: 'user@nexa.com', 
    password: 'user123',
    name: 'Test User',
    role: 'user'
  },
  {
    email: 'demo@nexa.com',
    password: 'demo123', 
    name: 'Demo User',
    role: 'demo'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock data
      const foundUser = MOCK_USERS.find(
        u => u.email === credentials.email && u.password === credentials.password
      );
      
      if (foundUser) {
        const userData = {
          id: foundUser.email,
          email: foundUser.email,
          name: foundUser.name,
          role: foundUser.role,
          token: 'mock-jwt-token-' + Date.now()
        };
        setUser(userData);
        localStorage.setItem('nexa_user', JSON.stringify(userData));
        return userData;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nexa_user');
    setError(null);
  };

  const clearError = () => {
    setError(null);
  };

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('nexa_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (err) {
        console.error('Failed to parse saved user data:', err);
        localStorage.removeItem('nexa_user');
      }
    }
  }, []);

  const value = {
    user,
    login,
    logout,
    loading,
    error,
    clearError,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
