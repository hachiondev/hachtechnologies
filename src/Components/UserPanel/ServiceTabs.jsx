import { Tab, Nav, Row, Col } from 'react-bootstrap';
import serviceImg from '../../Assets/img5.jpg'; // replace with your image path

const ServicesTabs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <Tab.Container defaultActiveKey="application">
          <Nav variant="tabs" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="application">Application Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="business">Business Service</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="training">Technology Trainings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="staffing">Global Staffing</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="application">
              <Row className="align-items-center">
                <Col md={6}>
                  <img src={serviceImg} alt="Application" className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                  <h4>Application Services</h4>
                  <p>
                    Hach Technologies is a leading consulting in Application build, support and maintenance projects.
                    <br /><br />
                    Technology Innovation is happening faster than ever before. Corporations are undergoing rapid changes with accelerated adoption of emerging technologies (e.g. Social, Mobile, Big Data and Cloud) which are disrupting traditional business models.
                    <br /><br />
                    Hach Technologies Application Services bring together an industrialized, globally integrated approach to help companies strategically manage their application portfolios in support of business goals in this rapidly changing digital economy.
                    <br /><br />
                    We deliver Application Services that help our clients create more value for the business, improve efficiency through IT Systems and reduce costs.
                  </p>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="business">
              <Row className="align-items-center">
                <Col md={6}>
                  <img src={serviceImg} alt="Business" className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                  <h4>Business Service</h4>
                  <p>
                    Hach Technologies is a leading consulting in Business services. We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, control costs and improve productivity.
                    <br /><br />
                    Our unique strengths and extensive experience will benefit your business wherever it operates around the globe. Your worldwide staffing success is not just our business – it’s our promise.
                  </p>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="training">
              <Row className="align-items-center">
                <Col md={6}>
                  <img src={serviceImg} alt="Training" className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                  <h4>Technology Trainings</h4>
                  <p>
                    Hach Technologies is a leader in Technology Trainings. We provide Classroom and Online Training to students and corporates in various software technologies.
                    <br /><br />
                    Our training programs help employers keep their staff abreast of all the latest technologies and also help students enhance their technical skills.
                    <br /><br />
                    Training Highlights: State-of-the-art training centers across the US with real-time labs and high-definition projectors.
                  </p>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="staffing">
              <Row className="align-items-center">
                <Col md={6}>
                  <img src={serviceImg} alt="Staffing" className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                  <h4>Global Staffing</h4>
                  <p>
                    Hach Technologies is a leader in staffing solutions. We understand your business requirements and staffing needs in order to source top talent.
                    <br /><br />
                    As your comprehensive recruiting partner, we deliver end-to-end talent solutions across industries with flexibility and precision.
                  </p>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default ServicesTabs;
