import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import image1 from '../../Assets/img37.jpg';
import image2 from '../../Assets/img19.jpg';
import image3 from '../../Assets/img20.jpg'
import image from '../../Assets/img36.png';
import './Login.css';
import bannerimage from '../../Assets/img21.png';
import BannerSection from "./BannerSection";

const Products = () => {
  return (
    <div>

<BannerSection heading="Products" />
      <div className="about-us-section">      <section className="section-padding about-us">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={image} style={{ width: '100%',height:'80%' }} />
            </Col>
            <Col lg={6}>
              <div className="about-info">
                <h2 style={{ color: '#0D6EFD' }}>Providing Innovative Mission Critical Solutions</h2>
                <h4>We have worked hard to develop the processes we employ</h4>
                <p>Our experience has shown us that only by following a closely defined methodology can we provide our clients the highest quality of service for solutions ranging from great looking website designs to highly secure and easy to use ecommerce solutions. Our development methodology returns control of the development process to our clients – at all stages in the process, our clients remain informed.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>


      {/* Services Section */}
      <section id="services" className="section-padding pt-20">
        <Container>
          <Tab.Container defaultActiveKey="task">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="task">Define the task</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="solution">Create the solution</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="support">Support the client</Nav.Link>
              </Nav.Item>
             
            </Nav>
            <Tab.Content>
              {/* Application Modernization Tab */}
              <Tab.Pane eventKey="task">
                <Row className="image-container">
                  <Col lg={6}>
                    <img src={image1} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                    We first seek to understand your requirements and then advise you and provide costs on the best solution possible for website design, ecommerce development, search engine optimization or internet advertising.</p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Development Tab */}
              <Tab.Pane eventKey="solution">
                <Row>
                  <Col lg={6}>
                    <img src={image2} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>We prototype, design, develop, test and launch the web solution within strict quality assurance guidelines and delivery schedules. You are an integral part of our development cycle and we keep you informed about the progress at all times.</p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Maintenance Tab */}
              <Tab.Pane eventKey="support">
                <Row>
                  <Col lg={6}>
                    <img src={image3} className="image" />
                  </Col>
                  <Col lg={6}>
                <p>We follow through on our solution by offering training, content management and website maintenance systems and ongoing support second to none.</p>
                  </Col>
                </Row>
              </Tab.Pane>
             
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

    </div>
  );
};

export default Products;
