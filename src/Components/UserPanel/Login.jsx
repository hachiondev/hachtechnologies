import React, { useState } from 'react';
import logo from '../../Assets/hachlogo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // For eye icons


const initialValues = {
  email: "",
  password: ""
};

const Login = () => {
  const navigate=useNavigate();

const handleLogin=()=>{
  navigate('/');
  
}

  return (
    <>
     <div className="login-page">
  <div className="login-container">
    <div className="login-left">
        <div className="login-top">
      <img src={logo} alt="Logo" className="login-logo" />
      <h2>Welcome back!</h2>
      <p>Login to continue learning</p>
      </div>
      <label>Email ID<span className="star">*</span></label>
      <input type="email" placeholder="Enter your email" />

      <label>Password<span className="star">*</span></label>
      <div className="password-wrapper">
        <input type="password" placeholder="Enter password" />
        
      </div>

      <a href="#" className="forgot-password">Forgot Password?</a>

      <div className="checkbox-wrapper">
        <input type="checkbox" id="not-robot" />
        <label for="not-robot">I'm not a robot</label>
       
      </div>

      <button className="login-btn" onClick={handleLogin}>Login</button>

      <p className="register-link">Don't have an account? <a href="/register">Register</a></p>
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

    </>
  );
}

export default Login;