import React from 'react';
import DashboardCard from './DashboardCard';
import Header from './Header';
import Sidebar from './Sidebar';
import './Admin.css';

const Dashboard = () => {
  const cards = [
    { bg: '#dc3545', icon: '🎟️', count: 4, label: 'Active Partner' },
    { bg: '#fd7e14', icon: '🏛️', count: 9, label: 'In-active Partner' },
    { bg: '#343a40', icon: '👍', count: 3, label: 'Applied Jobs' },
    { bg: '#0d6efd', icon: '👤', count: 128, label: 'Registration' },
  ];

  return (
    <div className='admin'>
    <Sidebar/>
    <div className="container mt-4">
      <Header />
      <div className="d-flex gap-3 flex-wrap">
        {cards.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
