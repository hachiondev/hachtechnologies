import React, { useState,useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';
import BannerSection from './BannerSection';

const ContactPage = () => {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  mobile: '',
  subject: '',
  message: '',
  captchaInput: '',
});

const [generatedCaptcha, setGeneratedCaptcha] = useState('');
const [captchaError, setCaptchaError] = useState('');

const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  setGeneratedCaptcha(result);
};
useEffect(() => {
  generateCaptcha();
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Captcha validation
  if (formData.captchaInput !== generatedCaptcha) {
    setCaptchaError('Captcha does not match.');
    generateCaptcha(); // Regenerate on failure
    return;
  }

  setCaptchaError(''); // Clear error

  const payload = {
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    subject: formData.subject,
    message: formData.message,
    date: new Date().toISOString(),
  };

  try {
    const response = await fetch('https://api.hachtechnologies.com/contactus/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
        captchaInput: '',
      });
      generateCaptcha();
    } else {
      alert('Something went wrong!');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  return (
    <>
      <BannerSection heading="Contact Us" />
      <section className="contact-section">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={8} md={12}>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Control
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      type="email"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Control
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-start">
                  <Form.Check type="checkbox" className="me-2" required />
                  <Form.Text className="text-muted">
                    By providing your phone number, you agree to receive a text message from Hach Technologies (Hachion). Message and data rates may apply, and message frequency varies.
                  </Form.Text>
                </Form.Group>

             <Row className="mb-3 align-items-center">
  <Col md={4}>
    <div className="captcha-box">{generatedCaptcha}</div>
  </Col>
  <Col md={6}>
    <Form.Control
      name="captchaInput"
      value={formData.captchaInput}
      onChange={handleChange}
      placeholder="Enter Captcha"
    />
    {captchaError && <div className="text-danger mt-1">{captchaError}</div>}
  </Col>
  <Col md={2} className="text-center">
    <span className="refresh-icon" onClick={generateCaptcha} style={{ cursor: 'pointer' }}>
      &#8635;
    </span>
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
    </>
  );
};

export default ContactPage;
