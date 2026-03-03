// App Routes - Centralized routing configuration
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Layout Components
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';

// Public Pages
import Home from '../pages/public/Home/Home';
import About from '../pages/public/About/About';
import Services from '../pages/public/Services/Services';
import Process from '../pages/public/Process/Process';
import Solutions from '../pages/public/Solutions/Solutions';
import GetStarted from '../pages/public/GetStarted/GetStarted';
import Contact from '../pages/public/Contact/Contact';

// Auth Pages
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';

// Dashboard Pages
import Products from '../pages/dashboard/Products';
import Clients from '../pages/dashboard/Clients';
import Projects from '../pages/dashboard/Projects';
import Billing from '../pages/dashboard/Billing';
import Analytics from '../pages/dashboard/Analytics';
import UsersManagement from '../pages/dashboard/Users';
import Roles from '../pages/dashboard/Roles';
import Integrations from '../pages/dashboard/Integrations';
import ApiKeys from '../pages/dashboard/ApiKeys';
import UserProfile from '../pages/dashboard/Profile';
import CompanySettings from '../pages/dashboard/CompanySettings';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

// Public Route Component (redirect authenticated users)
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Navigate to="/sidebar" replace /> : children;
};

// Layout Wrapper
const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      
      <Route path="/about" element={
        <Layout>
          <About />
        </Layout>
      } />
      
      <Route path="/services" element={
        <Layout>
          <Services />
        </Layout>
      } />
      
      <Route path="/process" element={
        <Layout>
          <Process />
        </Layout>
      } />
      
      <Route path="/solutions" element={
        <Layout>
          <Solutions />
        </Layout>
      } />
      
      <Route path="/get-started" element={
        <Layout>
          <GetStarted />
        </Layout>
      } />
      
      <Route path="/contact" element={
        <Layout>
          <Contact />
        </Layout>
      } />

      {/* Auth Routes */}
      <Route path="/auth/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      
      <Route path="/auth/register" element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />

      {/* Sidebar Route */}
      <Route path="/sidebar" element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      } />

      {/* Dashboard Routes */}
      <Route path="/dashboard/products" element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/clients" element={
        <ProtectedRoute>
          <Clients />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/projects" element={
        <ProtectedRoute>
          <Projects />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/billing" element={
        <ProtectedRoute>
          <Billing />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/analytics" element={
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/users" element={
        <ProtectedRoute>
          <UsersManagement />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/roles" element={
        <ProtectedRoute>
          <Roles />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/integrations" element={
        <ProtectedRoute>
          <Integrations />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/api-keys" element={
        <ProtectedRoute>
          <ApiKeys />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/profile" element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/company-settings" element={
        <ProtectedRoute>
          <CompanySettings />
        </ProtectedRoute>
      } />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
