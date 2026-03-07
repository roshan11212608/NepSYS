// Core services
export { default as axiosClient } from './core/axiosClient';
export { API_ENDPOINTS } from './core/endpoints';
export { default as interceptor } from './core/interceptor';

// Auth module
export { authService, AuthProvider, useAuth } from './modules/auth';
export { useLogin, useRegister, useProtectedRoute } from './modules/auth/authHooks';
