// Quick test to check auth endpoints
import { authService } from './services/modules/auth';

console.log('Testing auth service...');

// Test if token exists
console.log('Token exists:', authService.isAuthenticated());

// Test get current user
if (authService.isAuthenticated()) {
  authService.getCurrentUser()
    .then(response => {
      console.log('Current user response:', response);
    })
    .catch(error => {
      console.error('Get current user error:', error);
    });
}
