import React from 'react';
import { Container } from "react-bootstrap";
import image from '../../Assets/img9.jpeg';
import image1 from '../../Assets/img16.jpg';
import image2 from '../../Assets/img11.jpg';
import image3 from '../../Assets/img12.jpg';
import image4 from '../../Assets/img13.jpg';
import image5 from '../../Assets/img14.png';
import image6 from '../../Assets/img15.png';
import bannerimage from '../../Assets/img21.png';
import './Login.css';
const features = [
  {
    image: image1,
    title: 'Providing World-Class Technology',
    text: 'As a technology leader, we simplify managing business applications and the underlying infrastructure. We have been helping our customers leverage the business benefits of next generation technologies like virtualize, cloud computing, On-Demand and SOA to help them create scalable, available, low-cost IT infrastructure…',
    link: '/providing-world-class-technolog'
  },
  {
    image: image2,
    title: 'Customer Centric Execution Model',
    text: 'Hach Technologies offers a truly end-to-end and customer focused execution approach, that offers a seamless combination of advisory services and IT solutions delivered through onsite– offsite – offshore delivery models. Our clients view us as a true IT partner and a one stop shop for their complete IT needs.',
    link: '/customer-centric-execution-model'
  },
  {
    image: image3,
    title: 'Consulting led IT solutions',
    text: 'Our endeavor is to understand a client’s most critical IT needs and align our services and solutions accordingly. All of our services are bundled into point solutions that address critical IT needs of our focus industry sectors. Clients value this approach as Hach Technologies helps them meet their end objective rather than being a mere',
    link: '/consulting-led-it-solutions'
  },
  {
    image: image4,
    title: 'Focus on innovation',
    text: 'As a technology leader, we simplify managing business applications and the underlying infrastructure. We have been helping our customers leverage the business benefits of next generation technologies like virtualize, cloud computing,On-Demand and SOA to help them create scalable,available, low-cost IT infrastructure',
    link: '/focus-on-innovation'
  },
  {
    image: image5,
    title: 'Best in class software engineering, HR and Information security practices',
    text: 'Hach Technologies offers a seamless combination of advisory services and IT solutions through onsite– offsite – offshore delivery models. Our clients view us as a true IT partner and a one stop shop for their complete IT needs.',
    link: '/best-in-class-software-engineering'
  },
  {
    image: image6,
    title: '“Customer First” culture',
    text: 'Our endeavor is to understand a client’s most critical IT needs and align our services accordingly. All of our services are bundled into point solutions that address industry-specific needs and help meet business objectives.',
    link: '/customer-first-culture'
  }
];

const Aboutus = () => {
  return (
    <>
     <section
      id="inner-intro"
      className="section-padding"
      style={{
        backgroundImage: `url(${bannerimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200px', // or any desired height
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <div className="z-index">
          <h1 style={{ color: 'white', fontWeight: 'bold', textAlign: 'left', fontSize:'3rem' }}>
           About Us
          </h1>
        </div>
      </Container>
    </section>

      {/* About section */}
      <section className="container py-5">
      <div className='about-us-section'>
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={image} alt="About Us" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3" style={{ color: '#0D6EFD' }}>Hach Technologies is a leading IT Services firm</h2>
            <p className="text-justify">
            Hach Technologies is a leading IT staffing, consulting, business solution and systems integration firm with a unique blend of services.</p>
            <p className="text-justify">
            Hach Technologies offers a broad range of IT services such as global IT staffing, professional consulting, systems analysis & development, systems integration, and support or application maintenance services. 
            With solid, broad-based experience, we are confident in our ability to help our customers grow and improve their businesses.
            More than likely, regardless of the nature and scope of the problem, our dedicated team of professionals can help you achieve a cost-effective business solution.
            </p>
          </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row">
          {features.map((item, idx) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={idx}>
              <div className="card h-100 p-3 shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary text-center">{item.title}</h5>
                  <p className="card-text text-justify">{item.text}</p>
                  <a href={item.link} className="btn btn-outline-info btn-sm">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Aboutus;
