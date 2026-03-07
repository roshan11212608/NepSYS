export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    ME: '/api/auth/me',
    REFRESH: '/api/auth/refresh',
    LOGOUT: '/api/auth/logout',
    VERIFY_EMAIL: '/api/auth/verify-email',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
  },
  
  // User endpoints
  USERS: {
    GET_ALL: '/users',
    GET_BY_ID: '/users/:id',
    CREATE: '/users',
    UPDATE: '/users/:id',
    DELETE: '/users/:id',
    UPDATE_PROFILE: '/users/profile',
    CHANGE_PASSWORD: '/users/change-password',
  },
  
  // Product endpoints
  PRODUCTS: {
    GET_ALL: '/products',
    GET_BY_ID: '/products/:id',
    CREATE: '/products',
    UPDATE: '/products/:id',
    DELETE: '/products/:id',
    SEARCH: '/products/search',
  },
  
  // Client endpoints
  CLIENTS: {
    GET_ALL: '/clients',
    GET_BY_ID: '/clients/:id',
    CREATE: '/clients',
    UPDATE: '/clients/:id',
    DELETE: '/clients/:id',
  },
  
  // Project endpoints
  PROJECTS: {
    GET_ALL: '/projects',
    GET_BY_ID: '/projects/:id',
    CREATE: '/projects',
    UPDATE: '/projects/:id',
    DELETE: '/projects/:id',
    ASSIGN_CLIENT: '/projects/:id/assign-client',
  },
  
  // Billing endpoints
  BILLING: {
    GET_ALL: '/billing',
    GET_BY_ID: '/billing/:id',
    CREATE: '/billing',
    UPDATE: '/billing/:id',
    DELETE: '/billing/:id',
    GENERATE_INVOICE: '/billing/generate-invoice',
  },
  
  // Analytics endpoints
  ANALYTICS: {
    GET_DASHBOARD: '/analytics/dashboard',
    GET_REVENUE: '/analytics/revenue',
    GET_USER_METRICS: '/analytics/users',
    GET_PROJECT_METRICS: '/analytics/projects',
  },
  
  // Inbox endpoints
  INBOX: {
    GET_ALL: '/inbox',
    GET_BY_ID: '/inbox/:id',
    MARK_READ: '/inbox/:id/read',
    DELETE: '/inbox/:id',
  },
  
  // API Keys endpoints
  API_KEYS: {
    GET_ALL: '/api-keys',
    GET_BY_ID: '/api-keys/:id',
    CREATE: '/api-keys',
    UPDATE: '/api-keys/:id',
    DELETE: '/api-keys/:id',
    REGENERATE: '/api-keys/:id/regenerate',
  },
  
  // Company endpoints
  COMPANY: {
    GET_INFO: '/company',
    UPDATE_INFO: '/company',
    GET_SETTINGS: '/company/settings',
    UPDATE_SETTINGS: '/company/settings',
  },
};
