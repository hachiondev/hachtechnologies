import React from "react";
import logo from "../../Assets/hachlogo.png"; 
import './Login.css';

const Navbar = () => {
  return (
    <header>
      {/* Top Contact Bar */}
      <div className="bg-info text-white py-1 px-3 d-flex justify-content-between align-items-center">
        <div>Call Now: +1 732 485 2499</div>
        <div className="d-flex align-items-center gap-3">
          <span>Follow us:</span>
          <a href="https://www.facebook.com/hachion_co" 
    target="_blank" 
    rel="noopener noreferrer"> <i className="fa fa-facebook"></i></a>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
          <a href="/register" className="text-white ms-3">SignUp</a> |
          <a href="/login" className="text-white ms-2">Login</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" style={{ height: "60px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/"><i className="fa fa-home"></i> Home</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="/application-services">Application Services</a></li>
                  <li><a className="dropdown-item" href="/business-services">Business Services</a></li>
                  <li><a className="dropdown-item" href="/technology-trainings">Technology Trainings</a></li>
                  <li><a className="dropdown-item" href="/global-staffing">Global Staffing</a></li>
                  <li><a className="dropdown-item" href="/staff-augmentation">Staff Augmentation</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="/careers">Jobs</a></li>
              <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="/registration">Registration</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
