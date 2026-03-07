import React from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';

const Clients = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0F172A' }}>
      <Sidebar />
      <main style={{ 
        marginLeft: '280px', 
        flex: 1, 
        padding: '2rem',
        color: '#F8FAFC',
        fontFamily: 'Inter, sans-serif'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
          Clients
        </h1>
        <p style={{ color: '#CBD5E1' }}>
          Manage your client relationships and projects
        </p>
      </main>
    </div>
  );
};

export default Clients;
