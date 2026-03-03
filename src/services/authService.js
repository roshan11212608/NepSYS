// Authentication Service - Handle login, register, logout
import ApiService from './api';

class AuthService {
  // User login
  static async login(credentials) {
    try {
      const response = await ApiService.post('/auth/login', credentials);
      
      // Store token and user data
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error) {
      throw new Error('Login failed: ' + error.message);
    }
  }

  // User registration
  static async register(userData) {
    try {
      const response = await ApiService.post('/auth/register', userData);
      
      // Auto-login after successful registration
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error) {
      throw new Error('Registration failed: ' + error.message);
    }
  }

  // User logout
  static logout() {
    // Clear local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // Redirect to login page
    window.location.href = '/auth/login';
  }

  // Check if user is authenticated
  static isAuthenticated() {
    const token = localStorage.getItem('authToken');
    if (!token) return false;
    
    // Basic token validation (you might want to add more sophisticated validation)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } catch (e) {
      return false;
    }
  }

  // Get current user
  static getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Get auth token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Refresh token (if needed)
  static async refreshToken() {
    try {
      const response = await ApiService.post('/auth/refresh', {
        token: this.getToken()
      });
      
      if (response.token) {
        localStorage.setItem('authToken', response.token);
      }
      
      return response.token;
    } catch (error) {
      // Refresh failed, logout user
      this.logout();
      throw error;
    }
  }
}

export default AuthService;
