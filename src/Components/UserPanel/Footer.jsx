import React from 'react';
import facebook from '../../Assets/facebook.png';
import twitter from '../../Assets/twitter.png';
import youtube from '../../Assets/youtube.png';
import linkedin from '../../Assets/linkedin.png';
import instagram from '../../Assets/instagram.png';
import { useNavigate } from 'react-router-dom';
import Association from './Association';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate=useNavigate();

  const handleHome=()=>{
    navigate('/')
  }
  const handleAbout=()=>{
navigate('/about-us')
  }
const handleProducts=()=>{
  navigate('/products')
}
  return (<>
    <Association/>
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div className='footer-link'>
          <div className='footer-topic'>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-4 text-md">
              <li onClick={handleHome} style={{cursor:'pointer'}}>Home</li>
              <li onClick={handleAbout} style={{cursor:'pointer'}}>About Us</li>
              <li onClick={()=>{navigate('/contact-us')}} style={{cursor:'pointer'}}>Contact Us</li>
              <li onClick={()=>{navigate('/applied-jobs')}} style={{cursor:'pointer'}}>Jobs</li>
              <li onClick={handleProducts} style={{cursor:'pointer'}}>Products</li>
              <li onClick={()=>{navigate('/blogsection')}} style={{cursor:'pointer'}}>Blog</li>
            </ul>
          </div>

          {/* Services */}
          <div className='footer-topic'>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={()=>{navigate('/application-services')}} style={{cursor:'pointer'}}>Application Services</li>
              <li onClick={()=>{navigate('/business-services')}} style={{cursor:'pointer'}}>Business Services</li>
              <li onClick={()=>{navigate('/technology-trainings')}} style={{cursor:'pointer'}}>Technology Trainings</li>
              <li onClick={()=>{navigate('/global-staffing')}} style={{cursor:'pointer'}}>Global Staffing</li>
              <li onClick={()=>{navigate('/staff-augmentation')}} style={{cursor:'pointer'}}>Staff Augmentation</li>
            </ul>
          </div>

          {/* Outsourcing Services */}
          <div className='footer-topic'>
            <h4 className="text-lg font-semibold mb-4">OutSourcing Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Application Development</li>
              <li>System Software</li>
              <li>Application Migration & Re-Engineering</li>
              <li>Application Maintenance</li>
              <li>Application Renovation</li>
              <li>Dedicated Development Lab</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='footer-topic'>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            
            <div className='footer-link'>
      <img src={facebook} alt='facebook-icon' onClick={() => window.open('https://www.facebook.com/hachtechnologies', '_blank')}
  style={{ cursor: 'pointer' }}/>
    <a href="https://x.com/hachion_co" 
    target="_blank" 
    rel="noopener noreferrer"><img src={twitter} alt='twitter-icon'/></a>
   <img src={linkedin} alt='linkedin-icon'  onClick={() => window.open('https://www.linkedin.com/company/hach-technologies', '_blank')}
  style={{ cursor: 'pointer' }}/>
   <img src={instagram} alt='instagram-icon'  onClick={() => window.open('https://www.instagram.com/hachtechnologies6/', '_blank')}
  style={{ cursor: 'pointer' }}
/>
   
      <a href="https://www.youtube.com/@hachion" 
    target="_blank" 
    rel="noopener noreferrer"><img src={youtube} alt='youtube'/></a>
      </div>
     
             
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4">
        <p className="text-center text-sm text-gray-300">
          &copy; Copy {currentYear} Hach Technologies - All Right Reserved.
        </p>
      </div>
    </footer>
 </> );
};

export default Footer;
