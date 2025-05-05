import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BannerSection from './BannerSection';

const DemoRegistration = () => {
  return (<>
    <BannerSection heading="Registration" />
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '50px' }}>
      <Container>
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="text-center mb-4 text-primary">Registration for demo session</h3>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formDemoType" className="mb-3">
              <Form.Label>Which type of Demo are you looking? <span className="text-danger">*</span></Form.Label>
              <Form.Select>
                <option>--Select One--</option>
                <option>Live Session</option>
                <option>Recorded Session</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email ID <span className="text-danger">*</span></Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-4">
              <Form.Label>Contact number <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="(+1) 123-456-7890" />
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
