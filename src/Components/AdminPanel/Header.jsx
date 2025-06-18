import React from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4>Dashboard</h4>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Button variant="dark">Toggle Code!</Button>
    </div>
  );
};

export default Header;
