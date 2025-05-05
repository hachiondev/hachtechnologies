import { Card, Row, Col } from 'react-bootstrap';
import image from '../../Assets/img4.jpg';

const focusData = [
  {
    title: 'Our Focus',
    desc: 'The e-World has created innumerable opportunities...',
    img: image,
    link: '/our-focus'
  },
  {
    title: 'Our Niche',
    desc: 'We use extensive resources to attract skilled candidates...',
    img: image,
    link: '/our-niche'
  },
  {
    title: 'Our Track Record',
    desc: 'If you’re a hiring manager looking for an IT staffing agency...',
    img: image,
    link: '/our-track-record'
  },
  {
    title: 'Our Customer',
    desc: 'Address our customer’s needs and provide advice...',
    img: image,
    link: '/our-clients'
  }
];

const FocusCards = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <Row>
          {focusData.map((item, index) => (
            <Col md={3} key={index}>
              <Card style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', color: 'white' }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <a href={item.link} className="text-white">READ MORE</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FocusCards;
