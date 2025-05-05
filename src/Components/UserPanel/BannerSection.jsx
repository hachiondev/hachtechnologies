import React from 'react';
import { Container } from 'react-bootstrap';
import bannerimage from '../../Assets/img21.png';

const BannerSection = ({ heading }) => {
  return (
    <section
      id="inner-intro"
      className="section-padding"
      style={{
        backgroundImage: `url(${bannerimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <div className="z-index">
          <h1 style={{ color: 'white', fontWeight: 'bold', textAlign: 'left', fontSize: '3rem' }}>
            {heading}
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default BannerSection;
