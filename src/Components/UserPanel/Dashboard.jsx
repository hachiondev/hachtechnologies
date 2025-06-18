import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [appliedJobsCount, setAppliedJobsCount] = useState(0);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) setUserName(storedUserName);

    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobsCount(appliedJobs.length);
  }, []);

  return (
    <div className="p-4">
      <h4>Welcome {userName}</h4>
      <Card className="mt-4 text-center bg-info text-white">
        <Card.Body>
          <h5>Applied Jobs {appliedJobsCount}</h5>
          <Button variant="light" href="/jobs-applied">View Jobs</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
