import React from 'react';
import { Card } from 'react-bootstrap';

const DashboardCard = ({ bg, icon, count, label }) => {
  return (
    <Card className={`text-white p-3`} style={{ backgroundColor: bg, minWidth: '200px', flex: 1 }}>
      <div className="d-flex justify-content-between align-items-center">
        <div style={{ fontSize: '40px' }}>{icon}</div>
        <div className="text-end">
          <h4>{count}</h4>
          <p className="mb-0">{label}</p>
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;
