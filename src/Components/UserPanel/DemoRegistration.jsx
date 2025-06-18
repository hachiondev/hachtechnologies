import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BannerSection from './BannerSection';

const DemoRegistration = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    type: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      student_id: 1, // Replace with actual student ID if available
      ...form,
      date: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
    };

    try {
      const response = await fetch('https://api.hachtechnologies.com/demoregister/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const text = await response.text();
        alert(`Failed: ${text}`);
        return;
      }

      alert('Registration successful!');
      setForm({
        first_name: '',
        last_name: '',
        type: '',
        email: '',
        number: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <BannerSection heading="Registration" />
      <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '50px' }}>
        <Container>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-center mb-4 text-primary">Registration for demo session</h3>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      name="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>&nbsp;</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      value={form.last_name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formDemoType" className="mb-3">
                <Form.Label>Which type of Demo are you looking? <span className="text-danger">*</span></Form.Label>
                <Form.Select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select One--</option>
                  <option value="Live Session">Live Session</option>
                  <option value="Recorded Session">Recorded Session</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email ID <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-4">
                <Form.Label>Contact number <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="(+1) 123-456-7890"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DemoRegistration;
