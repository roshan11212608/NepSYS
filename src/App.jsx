import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './services/modules/auth';
import AppRoutes from './routes/AppRoutes';
import './styles/main.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
