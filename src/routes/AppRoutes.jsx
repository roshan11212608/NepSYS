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
import DashboardHome from '../pages/dashboard/Home/Home';
import Profile from '../pages/dashboard/Profile/Profile';
import Settings from '../pages/dashboard/Settings/Settings';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

// Public Route Component (redirect authenticated users)
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

// Layout Wrapper
const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

// Dashboard Layout (without header/footer for dashboard)
const DashboardLayout = ({ children }) => (
  <main className="dashboard-main">{children}</main>
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

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout>
            <DashboardHome />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/profile" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Profile />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/settings" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
