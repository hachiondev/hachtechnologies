import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.hachtechnologies.com/api/v1/user/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.status) {
        navigate('/dashboard');
      } else {
        setErrorMsg(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setErrorMsg('Server error. Please try again later.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h5 className="text-center mb-4">Hach Technologies - Admin Login</h5>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMsg && <div className="text-danger mb-3 text-center">{errorMsg}</div>}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
        <p className="text-center text-muted mt-4 mb-0" style={{ fontSize: '12px' }}>
          Copyright © Hach Technologies 2025
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
