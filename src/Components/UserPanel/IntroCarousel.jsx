import { Carousel } from 'react-bootstrap';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';

const IntroCarousel = () => {
  return (
    <section id="intro">
      <Carousel>
        <Carousel.Item style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', height: '500px' }}>
          <div className="container text-white d-flex flex-column justify-content-center h-100">
            <h1><b>We are Offering</b></h1>
            <p>IT Solutions to improve <br />and simulate your business</p>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', height: '500px' }}>
          <div className="container text-white d-flex flex-column justify-content-center h-100">
            <h1><b>Outsourcing Services</b></h1>
            <p>Quality, Cost and Time are our promise</p>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', height: '500px' }}>
          <div className="container text-white d-flex flex-column justify-content-center h-100">
            <h1><b>Leader in Technology</b></h1>
            <p>APP Development, Support and Maintenance</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default IntroCarousel;
