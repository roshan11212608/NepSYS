import React, { useState } from 'react';
import { debugService } from '../services/modules/auth/debugService';

const DebugLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleTestLogin = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await debugService.testLogin(credentials);
      setResult({ success: true, data: response });
    } catch (error) {
      setResult({ 
        success: false, 
        error: error.response?.data || error.message 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTestUsers = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await debugService.testUsers();
      setResult({ success: true, data: response });
    } catch (error) {
      setResult({ 
        success: false, 
        error: error.response?.data || error.message 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>🔍 Debug Login</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '8px', 
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '8px', 
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        
        <button
          onClick={handleTestLogin}
          disabled={loading}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Testing...' : 'Test Login'}
        </button>
        
        <button
          onClick={handleTestUsers}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          Test Users Endpoint
        </button>
      </div>

      {result && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: result.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${result.success ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '12px',
          whiteSpace: 'pre-wrap'
        }}>
          <strong>{result.success ? '✅ Success:' : '❌ Error:'}</strong>
          <br />
          {JSON.stringify(result.success ? result.data : result.error, null, 2)}
        </div>
      )}
    </div>
  );
};

export default DebugLogin;
