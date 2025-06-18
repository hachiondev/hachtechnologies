import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import image1 from "../../Assets/img35.jpg";
import image2 from "../../Assets/img19.jpg";
import image3 from "../../Assets/img29.jpg";
import image from "../../Assets/img33.jpeg";
import "./Login.css";
import BannerSection from "./BannerSection";

const StaffAugmentation = () => {
  return (
    <div>
      <BannerSection heading="Staff Augmentation" />
      <div className="about-us-section">
        {" "}
        <section className="section-padding about-us">
          <Container>
            <Row>
              <Col lg={6}>
                <img src={image} style={{ width: "100%", height: "80%" }} />
              </Col>
              <Col lg={6}>
                <div className="about-info">
                  <h2>Hach Technologies Staff Augmentation</h2>
                  <h4>
                    Hach Technologies offers flexible staff augmentation
                    services and provides clients with on-demand skills and
                    resources, becoming an extension of your IT business.
                  </h4>
                  <ul>
                    <li>Professional, technical, and managerial talent</li>
                    <li>Short- or long-term engagements</li>
                    <li>Deep pool of talent</li>
                    <li>
                      Effective delivery combination of quality, speed, and
                      innovation
                    </li>
                    <li>
                      Placements that cover local, national, and global needs
                      with highly specialized and difficult to find professional
                      and management positions at the mid- to senior-level
                    </li>
                    <li>
                      Talent Management Solutions to aid in the planning,
                      acquisition, and optimization of an organization’s talent
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <h2 style={{ textAlign: "center" }}>
        How We Do IT The Hach Technologies
      </h2>

      {/* Services Section */}
      <section id="services" className="section-padding pt-20">
        <Container>
          <Tab.Container defaultActiveKey="account">
            <Nav variant="pills" className="pb-2">
              <Nav.Item>
                <Nav.Link eventKey="account">Account Management</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="process">Process Adherence</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="unique">Unique Approach</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="resource">Resource Management</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {/* Application Modernization Tab */}
              <Tab.Pane eventKey="account">
                <Row className="image-container">
                  <Col lg={4}>
                    <img src={image1} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Hach Technologies the account with a dedicated team of
                      professionals who include Account Manager and Resource
                      Manager and also recruiters who offer consulting,
                      staffing, and adhoc hiring. These professionals offer
                      clients with excellent screening process and resource
                      commitment.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Development Tab */}
              <Tab.Pane eventKey="process">
                <Row>
                  <Col lg={4}>
                    <img src={image2} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Life Cycle Management Process of recruitment life cycle
                      and documentation will include requisitions, rates and
                      resumes along with Agreements and SOWs. Techwave has been
                      having excellent closure ratio where there is absolutely
                      no gap between submission and closure. This is due to our
                      strong vetting process.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Maintenance Tab */}
              <Tab.Pane eventKey="unique">
                <Row>
                  <Col lg={4}>
                    <img src={image3} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Techwave is client focussed and ensures time saving in the
                      process of response, submission and Onboarding. There is
                      open, consistent and constant communication from the
                      client end and the resource and with regular log keeping.
                      Techwave promises quick turn around and on-boarding,
                      saving both time and money.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="resource">
                <Row>
                  <Col lg={4}>
                    <img src={image3} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      The resource pool at Techwave is always continuous and
                      churning with a large database development and
                      recruitment. The client can have access to our large
                      portal which uses Dice, LinkedIn, ProHires, Glassdoor,
                      Google and Monster for posting and sourcing. All this for
                      a competitive pricing that gives you greater value.
                    </p>
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

export default StaffAugmentation;