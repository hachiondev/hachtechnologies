import React, { useContext,useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Sidebar = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
  localStorage.removeItem("userName");
        localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
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
    <div className="bg-light p-3 h-100">
      <h6 className="text-success">Hello ( {userName} )</h6>
      <ListGroup variant="flush">
        <ListGroup.Item action href="/userdashboard">Dashboard</ListGroup.Item>
        <ListGroup.Item action href="/jobs-applied">Applied Job</ListGroup.Item>
        <ListGroup.Item action href="/account-setting">Setting</ListGroup.Item>
        <ListGroup.Item action href="/changepassword">Change Password</ListGroup.Item>
        <ListGroup.Item action href="/profile">Update Profile</ListGroup.Item>
        <ListGroup.Item onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
