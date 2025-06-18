import React, { useState } from 'react';
import './Login.css';
import logo from '../../Assets/hachlogo.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    mobile: ''
  });
  const [message, setMessage] = useState('');
const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleVerify = async (e) => {
  e.preventDefault();

  if (!form.email) {
    setMessage("Please enter a valid email.");
    setMessageType("error");
    return;
  }

  try {
    const response = await fetch(
      `https://api.hachtechnologies.com/api/v1/user/send-otp?email=${form.email}`,
      { method: 'POST' }
    );

    const resultText = await response.text(); // ✅ use text, not json

    if (!response.ok) {
      setMessage(resultText || 'Failed to send OTP');
      setMessageType('error');
      return;
    }

    setMessage(resultText);
    setMessageType('success');

    // Save to localStorage
    localStorage.setItem('userName', form.userName);
    localStorage.setItem('email', form.email);
    localStorage.setItem('mobile', form.mobile);

    setTimeout(() => {
      navigate('/otpverification');
    }, 2000);

  } catch (error) {
    console.error('OTP error:', error);
    setMessage('Something went wrong. Please try again.');
    setMessageType('error');
  }
};

  
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className='login-top'>
            <img src={logo} alt="Hach Logo" className="register-logo" />
            <h2>Register to explore more opportunities</h2>
          </div>

          <form onSubmit={handleVerify} className="register-form">
            <label>Full Name*</label>
            <input type="text" name="userName" value={form.userName} onChange={handleChange} placeholder="Enter your name" required />

            <label>Email Id*</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />

            <label>Mobile Number*</label>
            <div className="mobile-input">
              <span className="country-code">+91</span>
              <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter your mobile number" required />
            </div>
{message && (
  <div className={`login-message ${messageType}`}>
    {message}
  </div>
)}

            <button type="submit" className="login-btn">Verify</button>
          </form>

          <p className="login-link">
            Already have an account? <a href="/login">Click here to Login</a>
          </p>
        </div>

        <div className="login-right">
       <div className="overlay">
            <h3>Connecting Talent with Opportunity in <strong>USA</strong></h3>
            <p>Step Into Your Future — One Click Away</p>
            <p> # Discover Jobs That Match Your Skills</p>
            <p> # Your Next Job is Waiting for You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
