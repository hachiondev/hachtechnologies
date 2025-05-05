import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css'; // Link the CSS file
import BannerSection from './BannerSection';

const ContactPage = () => {
  return (
    <>
    <BannerSection heading="Contact Us" />
    <section className="contact-section">
      <Container>
        <Row>
          {/* Contact Form */}
          <Col lg={8} md={12}>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control placeholder="Full Name" />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Email Address" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control placeholder="Phone Number" />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Subject" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Message" />
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-start">
                <Form.Check type="checkbox" className="me-2" />
                <Form.Text className="text-muted">
                  By providing your phone number, you agree to receive a text message from Hach Technologies (Hachion). Message and data rates may apply, and message frequency varies.
                </Form.Text>
              </Form.Group>

              {/* Captcha */}
              <Row className="mb-3 align-items-center">
                <Col md={4}>
                  <div className="captcha-box">2yP</div>
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Enter Captcha" />
                </Col>
                <Col md={2} className="text-center">
                  <span className="refresh-icon">&#8635;</span>
                </Col>
              </Row>

              <Button className="submit-btn" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          {/* Office Info */}
          <Col lg={4} md={12} className="mt-5 mt-lg-0">
            <div className="office-box">
              <h5><strong>USA Office</strong></h5>
              <p>
                HACH Technologies<br />
                601 Voyage Trce<br />
                Leander, TX 78641
              </p>
            </div>
            <div className="office-box">
              <h5><strong>INDIA Office</strong></h5>
              <p>
                HACH Technologies<br />
                Balaji Nagar Main Road<br />
                MJ Colony-APHB Colony<br />
                Kukatpally Hyderabad<br />
                Telangana INDIA - 500072
              </p>
            </div>
          </Col>
        </Row>

        {/* Google Map */}
        <Row className="mt-5">
          <Col>
            <iframe
              title="Company Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.139846357307!2d78.39935117473512!3d17.482956083541105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d931f505bd%3A0x7d772d73b3eb0af1!2sKukatpally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1714738984587"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
    </> );
};

export default ContactPage;
