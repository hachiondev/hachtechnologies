import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import logo from '../../Assets/hachlogo.png';

const Sidebar = () => {
  return (
    <>
        
    <div className="bg-dark text-white vh-100 p-3" style={{ width: '220px' }}>
    <img src={logo} alt='logo'/>
      {/* <h5 className="text-info">Hach Technologies</h5> */}
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/dashboard">Dashboard</Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/adminregister">RegistrationList</Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/partnerlist">View Partner</Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/jobs">View Job Applied</Link>
        </ListGroup.Item>
         <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/adminpostjobs">Jobs Posted</Link>
        </ListGroup.Item>
         <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/adminappliedjobs">Applied Jobs</Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/partners">Add Client Logo</Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/blogs">Blog</Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/partners">Blog Comment</Link>
        </ListGroup.Item>
         <ListGroup.Item className="bg-dark border-0">
          <Link className="text-white" to="/contactus">Contact Us list</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
    </>

  );
};

export default Sidebar;
