import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import bannerimage from '../../Assets/img21.png';
import image from '../../Assets/img22.jpg';
import BannerSection from './BannerSection';
const BusinessServices = () => {
  return (
    <div>
 <BannerSection heading="Business Services" />
    <div className="about-us-section">      <section className="section-padding about-us">
      <Container>
        <Row>
          <Col lg={6}>
            <img src={image} style={{ width: '100%',height:'80%' }} />
          </Col>
          <Col lg={6}>
            <div className="about-info">
              <h2>Hach Technologies Business Services</h2>
              <p>
              Hach Technologies is a leading consulting in Business services.
              </p>
              <p>
              Hach Technologies Services is well equipped to understand, anticipate and respond to your evolving staffing needs. We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, control costs and improve productivity. Our unique strengths and extensive experience will benefit your business wherever it operates around the globe. You’ll find that your worldwide staffing success is not just our business – it is our promise.
              </p>
              <p>
              Hach Technologies key strengths and values include:
              <ul>
<li>Respected global company</li>
<li>Dedicated branch network that is 100% company owned</li> 
<li>Strong history and legacy within the staffing industry</li> 
<li>Robust financial stability</li>  
<li>Exemplary reputation for integrity</li>
<li>Broad spectrum of employment and management solutions</li>  
<li>Proven quality system</li> 
<li>Innovative recruiting and retention strategies</li>
</ul>
              </p>
             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
</div>
  )
}

export default BusinessServices