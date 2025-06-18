import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";

const AppliedJobsList = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobs(storedJobs);
  }, []);

  return (
    <div className='user-dashboard'>
        <Sidebar/>
    <Container className="mt-4">
      <h4>My Applied Jobs</h4>
      {appliedJobs.length === 0 ? (
        <p>No jobs applied yet.</p>
      ) : (
        appliedJobs.map((job, index) => (
          <Card className="mb-3 shadow-sm" key={index}>
            <Card.Body>
              <Card.Title>{job.job_title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
              <Card.Text><strong>Location:</strong> {job.location}</Card.Text>
              <Card.Text><strong>Salary:</strong> ₹{job.salary}</Card.Text>
              <Card.Text><strong>Work Type:</strong> {job.work_type}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
    </div>
  );
};

export default AppliedJobsList;
