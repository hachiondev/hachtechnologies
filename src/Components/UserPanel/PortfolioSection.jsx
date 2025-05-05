import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../../Assets/img6.jpg';
import image2 from '../../Assets/img7.jpg';
import image3 from '../../Assets/img8.jpg';

const portfolioData = [
  {
    title: 'Consulting',
    image: image1,
    link: '/consulting',
    description:
      'The e-World has created innumerable opportunities for organizations to exploit their core business competencies by...',
  },
  {
    title: 'Case Studies',
    image: image2,
    link: '/case-studies',
    description:
      'Delivering excellence, IT Staffing Solutions Support Restaurant Chain’s Tremendous Growth and IT Staffing Solutions.',
  },
  {
    title: 'About Company',
    image: image3,
    link: '/about-us',
    description:
      'Hach Technologies offers a broad range of professional consulting, systems analysis & development, systems integration and support services...',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-5">
      <Container>
        <Row>
          {portfolioData.map((item, index) => (
            <Col lg={4} sm={6} key={index} className="mb-4">
              <a href={item.link} className="text-decoration-none text-dark">
                <div className="portfolio-box shadow-sm p-3 bg-white rounded h-100">
                  <div className="portfolio-img mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="portfolio-heading">
                    <h5 className="portfolio-caty">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
