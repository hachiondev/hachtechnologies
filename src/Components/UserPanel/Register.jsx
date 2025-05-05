// Register.jsx
import React, { useState } from 'react';
import './Login.css';
import logo from '../../Assets/hachlogo.png'

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Submit logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
      <div className="login-left">
        <div className='login-top'>
        <img src={logo} alt="Hach Logo" className="register-logo" />
        <h2>Register to start learning</h2>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <label>Full Name*</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />

          <label>Email Id*</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
          <label>Password*</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />

          <label>Mobile Number*</label>
          <div className="mobile-input">
            <span className="country-code">+91</span>
            <input type="number" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter your mobile number" required />
          </div>

          <button type="submit" className="login-btn">Submit</button>
        </form>

        <p className="login-link">
          Do you have an account with Hachion? <a href="/login">Click here to Login</a>
        </p>
      </div>

      <div className="login-right">
      <div className="overlay">
        <h3>We are Leading Online Training Provider in <strong>USA</strong></h3>
        <p>Get started with your immersive learning experience</p>
        <p># 96 Certified Teachers</p>
        <p># 488 Complete Courses</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Register;
