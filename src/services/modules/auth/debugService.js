import axios from 'axios';

// Debug service to test API calls directly
export const debugService = {
  // Test login with detailed logging
  testLogin: async (credentials) => {
    console.log('🔍 Debug Login Attempt');
    console.log('Credentials:', credentials);
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('✅ Login Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Login Error:', error);
      console.error('Error Response:', error.response?.data);
      console.error('Error Status:', error.response?.status);
      console.error('Error Headers:', error.response?.headers);
      throw error;
    }
  },

  // Test what users exist in the database
  testUsers: async () => {
    console.log('🔍 Testing user endpoints...');
    
    try {
      const response = await axios.get('http://localhost:8080/api/users', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('✅ Users:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Users Error:', error);
      console.error('Error Response:', error.response?.data);
      throw error;
    }
  },
};

export default debugService;
