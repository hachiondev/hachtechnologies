import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import image1 from "../../Assets/img18.jpg";
import image2 from "../../Assets/img19.jpg";
import image3 from "../../Assets/img20.jpg";
import image from "../../Assets/img17.jpg";
import "./Login.css";
import BannerSection from "./BannerSection";

const ApplicationServices = () => {
  return (
    <div>
      <BannerSection heading="Application Services" />
      <div className="about-us-section">
        {" "}
        <section className="section-padding about-us">
          <Container>
            <Row>
              <Col lg={6}>
                <img src={image} style={{ width: "100%", height: "90%" }} />
              </Col>
              <Col lg={6}>
                <div className="about-info">
                  <h2>Hach Technologies Application Services</h2>
                  <p>
                    Hach Technologies is a leading consulting in Application
                    build, support and maintenance Projects...
                  </p>
                  <p>
                    Technology Innovation is happening faster than ever before.
                    Corporations are undergoing rapid changes...
                  </p>
                  <p>
                    We deliver Application Services that help our clients create
                    more value for the business...
                  </p>
                  <p>
                    Hach Technologies expertise in Application Services helps
                    enterprise improve their overall efficiency...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/* Services Section */}
      <section id="services" className="section-padding pt-20">
        <Container>
          <Tab.Container defaultActiveKey="design">
            <Nav variant="pills" className="pb-2">
              <Nav.Item>
                <Nav.Link eventKey="design">Application Modernization</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seo">Application Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="development">
                  Application Maintenance
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {/* Application Modernization Tab */}
              <Tab.Pane eventKey="design">
                <Row>
                  <Col lg={4}>
                    <img src={image1} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      At Hach Technologies we enable you to address issues in
                      the legacy system such as multiple technology platforms,
                      high cost of maintenance, unsupported systems, shrinking
                      employee expertise, lack of integration and Web
                      capabilities. The services provide a metrics-based
                      framework to help you choose from different modernization
                      methods â€“ Web enabling, re-engineering, re-hosting,
                      componentization, and new development. They are delivered
                      using the global delivery model.
                    </p>

                    <p>
                      Modernization is no small task. You have a lot riding on
                      your applications and can’t afford to waste time or money.
                      That’s why businesses turn to the experts at Hach
                      Technologies.
                    </p>

                    <p>
                      We’ve helped customers improve performance, realizing up
                      to a 25 percent increase in productivity. And cut
                      applications operating, maintenance and development costs
                      by as much as half. Our strategic planning expertise,
                      innovative visualization technologies; patent-pending
                      tools and IP help you enter the modern era where business
                      and technology work in sync.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Development Tab */}
              <Tab.Pane eventKey="seo">
                <Row>
                  <Col lg={4}>
                    <img src={image2} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Our service offerings, as mentioned below, are targeted
                      towards the principle outcomes of increased advocacy,
                      higher end-user productivity, and rapid adoption with a
                      primary focus to help you boost your ability to harvest
                      increased business value from your investments. Our
                      application development services help you address evolving
                      business and technology challenges by defining, designing
                      and building applications tailored to meet your business
                      requirements.Custom applications using existing and
                      emerging technologies that work well with any software
                      portfolio.
                    </p>

                    <h3>USER EXPERIENCE</h3>
                    <p>
                      User Experience (UX) services help you build applications
                      that embody three key design outcomes â€“ easy to use,
                      useful, and engaging. Our dedicated UX Center of
                      Excellence provides a complete ecosystem of UX
                      professionals and is focused on delivering UX design
                      services to our clients.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Maintenance Tab */}
              <Tab.Pane eventKey="development">
                <Row>
                  <Col lg={4}>
                    <img src={image3} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Our application maintenance services maximize your
                      existing IT applications through offshore-ability
                      analysis, maintainability analysis, maintenance, and
                      enhancement. It will help you balance cost, complexity and
                      capacity, resulting in lower cost of ownership, higher
                      service levels and new operational efficiencies.
                    </p>
                    <p>
                      Application maintenance services (AMS) processes are
                      tailor-made for maintenance and are not an afterthought of
                      development. Our portfolio-based, consultative approach
                      takes a holistic view of technology, information
                      architecture, people, and services. We collaborate with
                      customers to understand the business domain, technology
                      roadmap, processes, and applications, and then deliver
                      solutions.
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

export default ApplicationServices;