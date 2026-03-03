// Constants - Application-wide constants

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout'
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
    UPLOAD_PICTURE: '/user/upload-profile-picture',
    DELETE_ACCOUNT: '/user/account',
    ACTIVITY_LOGS: '/user/activity-logs',
    PREFERENCES: '/user/preferences'
  },
  SERVICES: {
    LIST: '/services',
    DETAIL: '/services/:id',
    CREATE: '/services',
    UPDATE: '/services/:id',
    DELETE: '/services/:id'
  }
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MANAGER: 'manager',
  DEVELOPER: 'developer'
};

// User Permissions
export const PERMISSIONS = {
  READ_USERS: 'read_users',
  WRITE_USERS: 'write_users',
  DELETE_USERS: 'delete_users',
  READ_SERVICES: 'read_services',
  WRITE_SERVICES: 'write_services',
  DELETE_SERVICES: 'delete_services',
  MANAGE_DASHBOARD: 'manage_dashboard'
};

// Status Codes
export const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  USER_NOT_FOUND: 'User not found.',
  EMAIL_EXISTS: 'Email already exists.',
  WEAK_PASSWORD: 'Password does not meet requirements.',
  TOKEN_EXPIRED: 'Session expired. Please login again.',
  ACCESS_DENIED: 'Access denied. Insufficient permissions.',
  SERVER_ERROR: 'Server error. Please try again later.'
};

// File Upload Limits
export const FILE_LIMITS = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  PROFILE_PICTURE_MAX_SIZE: 2 * 1024 * 1024 // 2MB
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE: 1
};

// Theme Colors
export const COLORS = {
  PRIMARY: '#2F80ED',
  SECONDARY: '#00C2FF',
  SUCCESS: '#28a745',
  WARNING: '#ffc107',
  DANGER: '#dc3545',
  INFO: '#17a2b8',
  LIGHT: '#f8f9fa',
  DARK: '#343a40'
};

// Breakpoints
export const BREAKPOINTS = {
  XS: 480,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200
};

// Animation Durations
export const ANIMATIONS = {
  FAST: '0.15s',
  NORMAL: '0.3s',
  SLOW: '0.5s'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
  PREFERENCES: 'userPreferences'
};

// Regex Patterns
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[1-9][\d]{9,15}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
};

// Time Constants
export const TIME = {
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000
};
