// API Service - Centralized API calls
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  // Generic GET request
  static async get(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
      }
    });
    return this.handleResponse(response);
  }

  // Generic POST request
  static async post(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      },
      body: JSON.stringify(data)
    });
    return this.handleResponse(response);
  }

  // Generic PUT request
  static async put(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      },
      body: JSON.stringify(data)
    });
    return this.handleResponse(response);
  }

  // Generic DELETE request
  static async delete(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      }
    });
    return this.handleResponse(response);
  }

  // Get auth token from localStorage
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Handle API response
  static async handleResponse(response) {
    if (!response.ok) {
      if (response.status === 401) {
        // Token expired, redirect to login
        localStorage.removeItem('authToken');
        window.location.href = '/auth/login';
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

export default ApiService;
