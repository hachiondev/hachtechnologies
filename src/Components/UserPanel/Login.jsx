import React, { useState } from 'react';
import logo from '../../Assets/hachlogo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Optional for show/hide password

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [message, setMessage] = useState('');
const [messageType, setMessageType] = useState(''); // 'success' or 'error'


  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!captchaChecked) {
    setMessage('Captcha validation is necessary');
    setMessageType('error');
    return;
  }

  try {
    const response = await fetch('https://api.hachtechnologies.com/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (data.status) {
      // Store userName and email in localStorage
          localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', data.userName);
   
localStorage.setItem('userEmail', data.email);

      setMessage(data.message);
      setMessageType('success');
     


      setTimeout(() => {
        navigate('/userdashboard');
      }, 2000);
    } else {
      setMessage(data.message || 'Invalid email or password');
      setMessageType('error');
    }
  } catch (error) {
    console.error('Login error:', error);
    setMessage('Something went wrong. Please try again.');
    setMessageType('error');
  }
};


  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-top">
            <img src={logo} alt="Logo" className="login-logo" />
            <h2>Welcome back!</h2>
            <p>Login to continue searching</p>
          </div>

          <form onSubmit={handleLogin}>
            <label>Email ID<span className="star">*</span></label>
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              value={form.email}
              onChange={handleChange}
              required 
            />

            <label>Password<span className="star">*</span></label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? 'text' : 'password'} 
                name="password"
                placeholder="Enter password" 
                value={form.password}
                onChange={handleChange}
                required 
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <a href="/forgotpassword" className="forgot-password">Forgot Password</a>

          <div className="checkbox-wrapper">
  <input
    type="checkbox"
    id="not-robot"
    checked={captchaChecked}
    onChange={(e) => setCaptchaChecked(e.target.checked)}
  />
  <label htmlFor="not-robot">I'm not a robot</label>
  {/* Placeholder for CAPTCHA visual */}
  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="captcha-img" />
</div>
{message && (
  <div className={`login-message ${messageType}`}>
    {message}
  </div>
)}

            <button className="login-btn" type="submit">Login</button>
          </form>

          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
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

export default Login;
