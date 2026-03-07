import axiosClient from '../../core/axiosClient';
import { API_ENDPOINTS } from '../../core/endpoints';

export const authService = {
  // Login user
  login: async (credentials) => {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  },

  // Register new user
  register: async (userData) => {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return response.data;
  },

  // Get current user info
  getCurrentUser: async () => {
    const response = await axiosClient.get(API_ENDPOINTS.AUTH.ME);
    return response.data;
  },

  // Refresh access token
  refreshToken: async (refreshToken) => {
    const response = await axiosClient.post(API_ENDPOINTS.AUTH.REFRESH, {
      refreshToken,
    });
    return response.data;
  },

  // Logout user
  logout: async () => {
    try {
      await axiosClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch (error) {
      console.warn('Logout endpoint error:', error);
      // Continue with local logout even if API call fails
    } finally {
      // Clear local storage regardless of API call success
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  },

  // Store tokens in localStorage
  setTokens: (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  },

  // Get stored tokens
  getTokens: () => {
    return {
      accessToken: localStorage.getItem('accessToken'),
      refreshToken: localStorage.getItem('refreshToken'),
    };
  },

  // Clear stored tokens
  clearTokens: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('accessToken');
  },
};

export default authService;
