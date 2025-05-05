import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import image1 from '../../Assets/img33.webp';
import image2 from '../../Assets/img19.jpg';
import image3 from '../../Assets/img20.jpg'
import image from '../../Assets/img24.jpg';
import image4 from '../../Assets/img27.jpg'
import './Login.css';
import BannerSection from "./BannerSection";


const GlobalStaffing = () => {
  return (
    <div>
<BannerSection heading="Global Staffing" />
      <div className="about-us-section">      <section className="section-padding about-us">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={image} style={{ width: '100%',height:'80%' }} />
            </Col>
            <Col lg={6}>
              <div className="about-info">
                <h2>Hach Technologies Global Staffing</h2>
                <p>
                Hach Technologies is a leader in STAFFING Solutions servicing various clients across the globe.
                </p>
                <p>
                As the business landscape continues to rapidly evolve, so do your workforce needs. With this in mind, Hach Technologies aims to gather in-depth comprehension of your business requirements and staffing needs in order to source top talent for your team. As your comprehensive recruiting partner, Hach Technologies delivers an array of flexible, end-to-end talent solutions within a number of industries.
                </p>
                <p>
                We recruit for Contract, Contract to hire and Permanent positions in all skills from Entry level to Top Management for a broad range of clients across all industry verticals.
                </p>
                <p>
                We have a dedicated team who follow the best hiring practices and use the latest AI and Machine Learning tools to search candidates and automate the process for our clients in the least possible time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
      <Container>
<h2>Some of the AI driven process we use to find the best talent:</h2>
<p>Process #1: Automated Screening via Email/Phone</p>
<p>Process #2: Conversational BOT with candidates</p>
<p>Process #3: Video Screening with identity check</p>
<p>Process #4: Improve the Job Description by internal software</p>
<p>Process #5: Increase referrals by our existing pool of candidates</p>
<p>Process #6: Schedule Interviews with AI assistant.</p>
<p>Process #7: Use AI engine to match the potential candidates</p>
<p>Process #8: Managing pool of valid internal and external candidates with our database and engaging them always</p>
       <h2>Services Offerings</h2>
       <ul>
        <li>VMS staffing services</li>
        <li>MSP staffing services</li>
        <li>RPO services</li>
        <li>IT staffing services</li>
        <li>Non-IT staffing services</li>
        <li>Engineering staffing services</li>
        <li>Staff augmentation services</li>
        <li>Project based staffing services</li>
        <li>Contract based staffing services</li>
        <li>ITAR third-party contracting HR services</li>
       </ul>
       <p>We implement our metric-driven processes to offer a unique mix of cost-effective staffing solutions to our clients that include – temporary, temporary to permanent and permanent staffing of professionals. We distinguish ourselves with our “high-touch” approach and offer lasting relationships by consistently delivering high value to our clients. This is based on our global delivery capability, deep technical and domain expertise- all harnessed by our adaptive quality processes and strong recruiting methodologies.

Few of our recruitment positions which are been filled recently are shown as below:</p>
<h2>IT</h2>
<p>Program Directors, Project Managers, Web Developer/Admin, Architects, Support Specialists, Programmers, DBA, Software Developers, Software Architects/Admins, System Developers, Analysts, Quality Assurance, Network & System Engineers/Admins, BigData Professionals/Engineers/Developers/Architects, Cloud Engineers/Developers/Admins, Infrastructure, Tools Developers/Admins, Tech Services, Helpdesk & Desktop Support, etc.</p>
        <h2>Non-IT</h2>
        <p>Admin/Clerical, Banking, Finance, Insurance, Audit, Professional, Scientific, Compliance, Regulatory, Pharmacy, Technical, Finance, Accounting, Procurement, Supply Chain, Operations, Logistics, Sales, Creative, Marketing, Business Support, Customer Support, Tech Support, Corporate Relations, Collections, Healthcare & Customer Service, HR, Legal, Tax, etc.</p>
        <h2>Engineering</h2>
        <p>(Aerospace, Automotive, Electrical, Electronics, Hi-Tech, Semiconductor, Embedded, LF, HF, SI, PI, EMI, EMC, Environmental, Industrial, Mechanical, Systems, Materials, Structural, Design, Stress, Analysis, Simulation, Validation, Verification, Testing, RMS, Performance, Thermal, Compressor, UI, Validation, Compliance, Product, Process, Project, Automation, Applications) Engineers, Managers, Planners, Technicians, Aides/Clerk, Cost, Drafters, QC/QA, Tech Support, Manufacturing Operations, Infrastructure Compliance, Researcher, Document Specialists, etc.</p>
        </Container>


      {/* Services Section */}
      <section id="services" className="section-padding pt-20">
        <Container>
          <Tab.Container defaultActiveKey="contact">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="contact">Contact Staffing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hire">Direct Hire Placement</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="payroll">Payroll Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="specialities">Specialities</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {/* Application Modernization Tab */}
              <Tab.Pane eventKey="contact">
                <Row>
                  <Col lg={6}>
                    <img src={image1} />
                  </Col>
                  <Col lg={6}>
                    <p>When you need to supplement your core team of employees, an individual or team of consultants can be hired through Hach Technologies on an hourly basis to execute critical projects and optimize workforce performance.</p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Development Tab */}
              <Tab.Pane eventKey="hire">
                <Row>
                  <Col lg={6}>
                    <img src={image2} />
                  </Col>
                  <Col lg={6}>
                    <p>
                    When increased demand, company growth, or employee turnover creates open positions, Hach Technologies can work closely with your business to define hiring criteria and recruit high caliber professionals.</p>
                  </Col>
                </Row>
              </Tab.Pane>
              {/* Application Maintenance Tab */}
              <Tab.Pane eventKey="payroll">
                <Row>
                  <Col lg={6}>
                    <img src={image3} />
                  </Col>
                  <Col lg={6}>
                    <p>Hach Technologies payrolling services help alleviate some of the burden of back office administration of your contract workforce. When you hire our consultants, Hach Technologies takes care of payroll administration, including state and federal taxes and withholdings, direct deposit, and more.
                  </p>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="specialities">
                <Row>
                  <Col lg={6}>
                    <img src={image4} />
                  </Col>
                  <Col lg={6}>
                   <ol>
                    <li>Technology</li>
                    <li>Engineering</li>
                    <li>Oil & gas</li>
                    <li>Accounting & Finances</li>
                    <li>Healthcare</li>
                    <li>Sales & Marketing</li>
                   </ol>
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

export default GlobalStaffing;
