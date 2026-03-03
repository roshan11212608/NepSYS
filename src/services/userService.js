// User Service - Handle user-related operations
import ApiService from './api';

class UserService {
  // Get user profile
  static async getProfile() {
    try {
      const response = await ApiService.get('/user/profile');
      return response;
    } catch (error) {
      throw new Error('Failed to fetch profile: ' + error.message);
    }
  }

  // Update user profile
  static async updateProfile(userData) {
    try {
      const response = await ApiService.put('/user/profile', userData);
      
      // Update local storage with new user data
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error) {
      throw new Error('Failed to update profile: ' + error.message);
    }
  }

  // Change password
  static async changePassword(passwordData) {
    try {
      const response = await ApiService.post('/user/change-password', passwordData);
      return response;
    } catch (error) {
      throw new Error('Failed to change password: ' + error.message);
    }
  }

  // Upload profile picture
  static async uploadProfilePicture(file) {
    try {
      const formData = new FormData();
      formData.append('profilePicture', file);
      
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user/upload-profile-picture`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ApiService.getToken()}`
        },
        body: formData
      });
      
      return await ApiService.handleResponse(response);
    } catch (error) {
      throw new Error('Failed to upload profile picture: ' + error.message);
    }
  }

  // Delete account
  static async deleteAccount() {
    try {
      const response = await ApiService.delete('/user/account');
      
      // Clear local storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      
      return response;
    } catch (error) {
      throw new Error('Failed to delete account: ' + error.message);
    }
  }

  // Get user activity logs
  static async getActivityLogs() {
    try {
      const response = await ApiService.get('/user/activity-logs');
      return response;
    } catch (error) {
      throw new Error('Failed to fetch activity logs: ' + error.message);
    }
  }

  // Update user preferences
  static async updatePreferences(preferences) {
    try {
      const response = await ApiService.put('/user/preferences', preferences);
      return response;
    } catch (error) {
      throw new Error('Failed to update preferences: ' + error.message);
    }
  }
}

export default UserService;
