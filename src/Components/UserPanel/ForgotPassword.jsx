import React, { useState } from 'react';
import logo from '../../Assets/hachlogo.png';
import success from '../../Assets/success.gif';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSendClick = async () => {
    try {
      const response = await axios.put(`https://api.hachtechnologies.com/api/v1/user/forgotpassword?email=${email}`);
      if (response.status === 200) {
        setIsSuccess(true);
        setMessage('✅ Password reset link sent to your email');

        // Optional: Delay redirect by 2 seconds so user can read message
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('❌ Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className='container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light'>
      <div className='row w-100'>
        <div className='col-md-6 offset-md-3 bg-white p-4 rounded shadow'>
          <div className='text-center mb-3'>
            <img src={logo} alt='logo' style={{ height: '50px' }} />
            <h3 className='mt-2'>Recover your password</h3>
          </div>

          <label htmlFor='email' className='form-label'>
            Email ID<span className='text-danger'>*</span>
          </label>
          <input
            type='email'
            className='form-control mb-3'
            id='email'
            placeholder='abc@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  {message && (
            <div className={`alert mt-4 ${isSuccess ? 'alert-success' : 'alert-danger'}`} role='alert'>
              {isSuccess && <img src={success} alt='Success' style={{ width: '30px', marginRight: '10px' }} />}
              {message}
            </div>
          )}
          <div className='text-center'>
            <button className='btn btn-primary px-4' onClick={handleSendClick}>
              Send
            </button>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
