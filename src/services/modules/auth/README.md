# Auth Module

This module provides authentication functionality for the NEXA frontend application.

## Files

- **authService.js** - Core API service for authentication endpoints
- **authContext.js** - React context provider for auth state management
- **authHooks.js** - Custom hooks for login, register, and protected routes
- **index.js** - Module exports

## Usage

### Setting up the AuthProvider

Wrap your application with the AuthProvider in your main App component:

```jsx
import { AuthProvider } from './services/modules/auth';

function App() {
  return (
    <AuthProvider>
      <YourApp />
    </AuthProvider>
  );
}
```

### Using the auth hooks

#### Login Hook

```jsx
import { useLogin } from './services/modules/auth';

function LoginForm() {
  const { formData, handleChange, handleSubmit, isLoading, error } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
```

#### Register Hook

```jsx
import { useRegister } from './services/modules/auth';

function RegisterForm() {
  const { formData, handleChange, handleSubmit, isLoading, error } = useRegister();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number (optional)"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
```

#### Using Auth Context

```jsx
import { useAuth } from './services/modules/auth';

function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>Role: {user.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

#### Protected Routes

```jsx
import { useProtectedRoute } from './services/modules/auth';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useProtectedRoute();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
```

## API Integration

The auth module integrates with the backend endpoints:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

## Token Management

- Access tokens are stored in localStorage
- Tokens are automatically included in API requests via axios interceptors
- Token refresh is handled automatically when tokens expire
- Tokens are cleared on logout
