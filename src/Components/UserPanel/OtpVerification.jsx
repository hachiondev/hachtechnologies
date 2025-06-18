import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/hachlogo.png';

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState(""); // "success" | "error"

  const [registeruserData, setRegisteruserData] = useState({
    email: "",
    name: "",
    mobile: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("userName");
    const mobile = localStorage.getItem("mobile");

    setRegisteruserData({ email, name, mobile });
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otpArray];
    newOtp[index] = value;
    setOtpArray(newOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const verifyAccount = async () => {
    const otp = otpArray.join("");

    if (!otp || !password || !confirmPassword) {
       setMessage("Please fill in all fields");
  setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
       setMessage("Passwords do not match");
  setMessageType("error");
      return;
    }

    setIsLoading(true);

    try {
      const verifyResponse = await fetch("https://api.hachtechnologies.com/api/v1/user/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: registeruserData.email,
          otp: otp,
        }),
      });

      if (!verifyResponse.ok) {
        const error = await verifyResponse.text();
       setMessage(`Error: ${error.message}`);
setMessageType("error");

        throw new Error("OTP verification failed");
      }

      const registerResponse = await fetch("https://api.hachtechnologies.com/api/v1/user/register", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: registeruserData.name,
          email: registeruserData.email,
          mobile: registeruserData.mobile,
          password,
          confirmPassword,
        }),
      });

      if (!registerResponse.ok) {
        const error = await registerResponse.text();
        throw new Error(error || "Registration failed");
      }

      setMessage("User registered successfully");
setMessageType("success");
 setTimeout(() => {
      navigate('/login');
    }, 2000);

     
    } catch (error) {
     setMessage(`Error: ${error.message}`);
setMessageType("error");

    
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    if (resendLoading) return;
    setResendLoading(true);

    try {
      const response = await fetch(
        `https://api.hachtechnologies.com/api/v1/user/regenerate-otp?email=${registeruserData.email}`,
        { method: "PUT" }
      );

      if (response.ok) {
       setMessage("OTP resent successfully");
setMessageType("success");

      } else {
        const error = await response.text();
        throw new Error(error || "Failed to resend OTP");
      }
    } catch (error) {
  setMessage(`Error: ${error.message}`);
setMessageType("error");

    } finally {
      setResendLoading(false);
    }
  };

  return (<>
    <div className="login-page">
    <div className="login-container">
      <div className="login-left">
     <div className='login-top'>
                <img src={logo} alt="Hach Logo" className="register-logo" />
                
              </div>
          <h2 className="mb-4 fw-bold">Register to start searching</h2>
<form  className="register-form">
          <div className="mb-3 d-flex gap-2">
            {otpArray.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                className="form-control text-center"
                style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
              />
            ))}
          </div>

          <p
            className="text-primary mb-4"
            style={{ cursor: "pointer" }}
            onClick={resendOtp}
          >
            {resendLoading ? "Resending..." : "Resend OTP"}
          </p>

           <label>Password*</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
      

        <label>Confirm Password*</label>
            <input
              type="password"
              placeholder="Re-enter same password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
        
</form>
{message && (
  <div className={`login-message ${messageType}`}>
    {message}
  </div>
)}
          <button
            className="login-btn"
            type="button"
            onClick={verifyAccount}
        
          >
           Register
          </button>
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
      </> );
};

export default OtpVerification;
