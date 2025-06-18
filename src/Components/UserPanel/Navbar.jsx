// import React, { useEffect, useState } from "react";
// import logo from "../../Assets/hachlogo.png";
// import './Login.css';
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {

//     const [userName, setUserName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUserName = localStorage.getItem('userName');
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   useEffect(() => {
//     // Retrieve user info from localStorage (you can adjust this key)
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.name) {
//       setUserName(user.name);
//     }
//   }, []);

// const handleLogout = () => {
//   localStorage.removeItem("user");
//   localStorage.removeItem("userName");
//   setUserName('');
//   navigate('/');
// };


//   return (
//     <header>
//       {/* Top Contact Bar */}
//       <div className="bg-info text-white py-1 px-3 d-flex justify-content-between align-items-center">
//         <div>Call Now: +1 732 485 2499</div>
//         <div className="d-flex align-items-center gap-3">
//           <span>Follow us:</span>
//           <a href="https://www.facebook.com/hachion_co" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
//           <i className="fa fa-twitter"></i>
//           <i className="fa fa-linkedin"></i>
//           <i className="fa fa-instagram"></i>

//           {userName ? (
//             <>
//               <p className="text-white mb-0">Hello ({userName})</p>
//               <span className="text-white ms-2" onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
//             </>
//           ) : (
//             <>
//               <p className="text-white mb-0" onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>SignUp</p> |
//               <p className="text-white mb-0" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Login</p>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container">
//           <a className="navbar-brand" href="/">
//             <img src={logo} alt="logo" style={{ height: "60px" }} />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#mainNavbar"
//             aria-controls="mainNavbar"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="mainNavbar">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</li>
//               <li className="nav-item" onClick={() => navigate('/about-us')} style={{ cursor: 'pointer' }}>About Us</li>
//               <li className="nav-item dropdown">
//                 <span className="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ paddingTop: '1px', cursor: 'pointer' }}>
//                   Services
//                 </span>
//                 <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
//                   <li onClick={() => navigate('/application-services')} style={{ cursor: 'pointer' }}>Application Services</li>
//                   <li onClick={() => navigate('/business-services')} style={{ cursor: 'pointer' }}>Business Services</li>
//                   <li onClick={() => navigate('/technology-trainings')} style={{ cursor: 'pointer' }}>Technology Trainings</li>
//                   <li onClick={() => navigate('/global-staffing')} style={{ cursor: 'pointer' }}>Global Staffing</li>
//                   <li onClick={() => navigate('/staff-augmentation')} style={{ cursor: 'pointer' }}>Staff Augmentation</li>
//                 </ul>
//               </li>
//               <li className="nav-item" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>Products</li>
//               <li className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Jobs</li>
//               <li className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Blog</li>
//               <li className="nav-item" onClick={() => navigate('/registration')} style={{ cursor: 'pointer' }}>Registration</li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useContext,useEffect } from "react";
import logo from "../../Assets/hachlogo.png";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Navbar = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
        localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('email');
    setUserName('');
    navigate('/');
  };
   useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [setUserName]);

  return (
    <header>
      <div className="bg-info text-white py-1 px-3 d-flex justify-content-between align-items-center">
        <div className="mobile">Call Now: +1 732 485 2499</div>
        <div className="d-flex align-items-center gap-3">
          <span>Follow us:</span>
   <i
  className="fa fa-facebook"
  onClick={() => window.open('https://www.facebook.com/hachtechnologies', '_blank')}
  style={{ cursor: 'pointer' }}
></i>
          <i className="fa fa-twitter"></i>
         
           <i
  className="fa fa-linkedin"
  onClick={() => window.open('https://www.linkedin.com/company/hach-technologies', '_blank')}
  style={{ cursor: 'pointer' }}
></i>
               <i
  className="fa fa-instagram"
  onClick={() => window.open('https://www.instagram.com/hachtechnologies6/', '_blank')}
  style={{ cursor: 'pointer' }}
></i>  
      

         {userName ? (
  <div className="dropdown">
    <button
      className="btn btn-outline-light dropdown-toggle"
      type="button"
      id="userDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {userName}
    </button>
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
      <li style={{cursor:"pointer"}}>
        <span className="dropdown-item" onClick={() => navigate('/userdashboard')}>Dashboard</span>
      </li>
      <li style={{cursor:"pointer"}}>
        <span className="dropdown-item" onClick={handleLogout}>Logout</span>
      </li>
    </ul>
  </div>
) : (
  <>
    <p className="text-white mb-0" onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>SignUp</p> |
    <p className="text-white mb-0" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Login</p>
  </>
)}

        </div>
      </div>

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
              <li className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</li>
              <li className="nav-item" onClick={() => navigate('/about-us')} style={{ cursor: 'pointer' }}>About Us</li>
              <li className="nav-item dropdown" >
                <span className="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ paddingTop: '1px', cursor: 'pointer' }}>
                  Services
                </span>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown" style={{ textAlign:'left', padding: '15px' }} >
                  <li onClick={() => navigate('/application-services')} style={{ cursor: 'pointer' }}>Application Services</li>
                  <li onClick={() => navigate('/business-services')} style={{ cursor: 'pointer' }}>Business Services</li>
                  <li onClick={() => navigate('/technology-trainings')} style={{ cursor: 'pointer' }}>Technology Trainings</li>
                  <li onClick={() => navigate('/global-staffing')} style={{ cursor: 'pointer' }}>Global Staffing</li>
                  <li onClick={() => navigate('/staff-augmentation')} style={{ cursor: 'pointer' }}>Staff Augmentation</li>
                </ul>
              </li>
              <li className="nav-item" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>Products</li>
              <li className="nav-item" onClick={() => navigate('/applied-jobs')} style={{ cursor: 'pointer' }}>Jobs</li>
              <li className="nav-item" onClick={() => navigate('/blogsection')} style={{ cursor: 'pointer' }}>Blog</li>
              <li className="nav-item" onClick={() => navigate('/registration')} style={{ cursor: 'pointer' }}>Registration</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
