import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';
import Sidebar from './Sidebar';

const ChangePassword = () => {
  const [form, setForm] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');
  const [loading, setLoading] = useState(false);

  // Auto-fill email from localStorage (or any other storage)
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setForm(prevForm => ({ ...prevForm, email: storedEmail }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    if (form.newPassword !== form.confirmPassword) {
      setVariant('danger');
      setMessage("New password and confirm password do not match");
      setLoading(false);
      return;
    }

    // Add password validation (optional)
    if (form.newPassword.length < 6) {
      setVariant('danger');
      setMessage("New password should be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        email: form.email,
        oldPassword: form.oldPassword,
        newPassword: form.newPassword,
      };

      const response = await axios.put('https://api.hachtechnologies.com/api/v1/user/change-password', payload);
      setVariant('success');
      setMessage(response.data);

      // Optionally reset password fields
      setForm(prev => ({ ...prev, oldPassword: '', newPassword: '', confirmPassword: '' }));
    } catch (error) {
      // Handle network error and server-side error properly
      const msg = error.response?.data || error.message || 'Something went wrong';
      setVariant('danger');
      setMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (<>

      <div className='user-dashboard'>
        <Sidebar/>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h3 className="text-center mb-4">Change Password</h3>

          {message && <Alert variant={variant}>{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                disabled
                className="bg-light"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter Old Password</Form.Label>
              <Form.Control
                type="password"
                name="oldPassword"
                value={form.oldPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100" style={{ backgroundColor: '#00AEEF', border: 'none' }} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Change"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
 </> );
};

export default ChangePassword;
