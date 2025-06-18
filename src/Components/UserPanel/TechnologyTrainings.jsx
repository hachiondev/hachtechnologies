import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import image1 from "../../Assets/img25.jpg";
import image2 from "../../Assets/img26.jpg";
import image3 from "../../Assets/img27.jpg";
import image4 from "../../Assets/img28.jpg";
import image5 from "../../Assets/img29.jpg";
import image6 from "../../Assets/img30.jpg";
import image7 from "../../Assets/img31.jpg";
import image from "../../Assets/img23.jpg";
import image8 from "../../Assets/img32.jpg";
import "./Login.css";

import BannerSection from "./BannerSection";
const TechnologyTrainings = () => {
  return (
    <div>
      <BannerSection heading="Technology Trainings" />
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
                  <h2>Hach Technologies Technology Trainings</h2>
                  <h4>Hach Technologies is a leader in Technology Trainings</h4>
                  <p>
                    We provide Classroom and Online Training to students,
                    corporates in various software technologies. Our training
                    programs help employers keep their staff abreast of all the
                    latest technologies and also help students enhance their
                    technical skills.
                  </p>
                  <h4>Training Highlights</h4>
                  <p>
                    We have state – of – the – art – training centers in
                    California, Michigan, Colorado, North Carolina, Florida with
                    well equipped Labs, High Definition Projectors providing
                    real time environment.
                  </p>
                  <p>
                    Our Trainers are best in the industry who have worked with
                    various Fortune 100 companies and have deep knowledge of
                    their core subjects.
                  </p>
                  <p>
                    Extensive Course Material provided to all our trainees and
                    Assignments after every session. Placement Assistance for
                    students.
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
          <Tab.Container defaultActiveKey="microsoft">
            <Nav variant="pills" className="pb-2">
              <Nav.Item>
                <Nav.Link eventKey="microsoft">Microsoft Technologies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="java">Java</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="administration">Administration</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="data">Data Warehousing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hyperion">Hyperion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="salesforce">Salesforce</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="erp">ERP</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bigdata">Big Data</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {/* Application Modernization Tab */}
              <Tab.Pane eventKey="microsoft">
                <Row>
                  <Col lg={4}>
                    <img src={image1} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      C#, ASP.NET, VB.NET, Advanced.NET, WPF, WCF, Ajax,
                      SharePoint 2007, SharePoint 2010, SharePoint
                      Administration SQL server ,SQL Tuning, SQL server DBA, SQL
                      Server BI(SSRS,SSAS,SSIS), Microsoft Dynamics,
                      Silverlight3.0, BizTalk server.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Development Tab */}
              <Tab.Pane eventKey="java">
                <Row>
                  <Col lg={4}>
                    <img src={image2} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Core JAVA, Advanced JAVA, J2EE, JSF, JNDI, JMS, EJB, Ice
                      facesSpring and Hibernate, Struts, JBOSS, GWT.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="administration">
                <Row>
                  <Col lg={4}>
                    <img src={image3} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      UNIX , SOLARIS, LINUX, SAN, Tivoli Storage Manager (TSM) ,
                      VMWARE ,System Administrator, Server Administrator,
                      Microsoft Exchange 2010 Administration.
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="data">
                <Row>
                  <Col lg={4}>
                    <img src={image4} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Data warehousing Data stage, Informatica, Teradata,
                      Teradata DBA Cognos , CognosTM1, Cognos Planning Business
                      Objects, BODI, OBIEE, OWB MS-BI, AB Initio, Micro Strategy
                      Business Intelligence, Business Analyst, Pentaho, Oracle
                      Data Integrator (ODI)
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="hyperion">
                <Row>
                  <Col lg={4}>
                    <img src={image5} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      Data warehousing Data stage, Informatica, Teradata,
                      Teradata DBA Cognos , CognosTM1, Cognos Planning Business
                      Objects, BODI, OBIEE, OWB MS-BI, AB Initio, Micro Strategy
                      Business Intelligence, Business Analyst, Pentaho, Oracle
                      Data Integrator (ODI)
                    </p>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="salesforce">
                <Row>
                  <Col lg={4}>
                    <img src={image6} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>SalesForce, SalesForce CRM, SalesForce Advanced.</p>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="erp">
                <Row>
                  <Col lg={4}>
                    <img src={image7} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>PeopleSoft, SAP, Oracle Apps.</p>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="bigdata">
                <Row>
                  <Col lg={4}>
                    <img src={image8} className="image" />
                  </Col>
                  <Col lg={6}>
                    <p>
                      BigData is the most sought skill in software industry
                      today! Hadoop & NoSQL will drive software industry of the
                      future. All companies will need experts who can analyze
                      large info volumes & mine insights. Achieve a competitive
                      edge over your peers by knowing Hadoop & NoSQL info.
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

export default TechnologyTrainings;