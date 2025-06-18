import React from 'react'

const BusinessInfo = () => {
    return (
      <section className="py-4 bg-white text-dark">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: '#0D6EFD' }}>Business of Software Development</h2>
          <p className="text-justify mb-5">
          Hach Technologies is a Leader in the Business of Software Development & Leading provider of Information Technology Consulting Services to Fortune 500 companies.
Hach Technologies Systems is a leading consulting, business solution and systems integration firm with a unique blend of services. We would like to deliver solutions that benefit our clients by applying our Knowledge and experience and create a curriculum that fits industry standards.
          </p>
          <h2 className="text-center mb-4" style={{ color: '#0D6EFD' }}>Hach Technologies has strong skills in the following technology areas</h2>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Application Development</li>
                <li>Application Migration and Re-Engineering</li>
                <li>Application Renovation</li>
                <li>Data Modeling & Database Design</li>
                <li>The best brains work for you</li>
                <li>Project Rescue Service</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>System Software</li>
                <li>Application Maintenance</li>
                <li>Dedicated Development Lab</li>
                <li>Experience in large size projects</li>
                <li>Shorter project time and cost optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BusinessInfo;
  