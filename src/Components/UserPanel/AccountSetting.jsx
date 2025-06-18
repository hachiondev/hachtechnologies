import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const AccountSettings = () => {
const [formData, setFormData] = useState({

  userName: '',

  mobile: ''
});
const [updating, setUpdating] = useState(false);
 const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setUpdating(true);
  const email = localStorage.getItem('userEmail');

  if (!email) {
    alert("Email not found in localStorage");
    setUpdating(false);
    return;
  }

  // Construct payload only with fields that changed
  const updatedData = {};
  if (formData.userName) updatedData.userName = formData.userName;
  if (formData.mobile) updatedData.mobile = formData.mobile;

  try {
    await axios.patch(`https://api.hachtechnologies.com/api/v1/user/partial-update?email=${email}`, updatedData, {
      headers: { 'Content-Type': 'application/json' }
    });
    alert('Profile updated successfully');
  } catch (err) {
    console.error('Update failed', err);
    alert('Failed to update profile');
  } finally {
    setUpdating(false);
  }
};

  return (<>
    <div className='user-dashboard'>
        <Sidebar/>
    <Container className="mt-5">
      
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Account Setting</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </Form.Group>

    

      <Form.Group controlId="mobile" className="mb-3">
  <Form.Label>Your Mobile No</Form.Label>
  <Form.Control
    type="text"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
  />
</Form.Group>



            <Button variant="info" type="submit" className="w-100 text-white">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
 </> );
};

export default AccountSettings;
