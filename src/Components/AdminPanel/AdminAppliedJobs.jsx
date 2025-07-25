import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const AdminAppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <div className="admin">
      <Sidebar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Applied Jobs List</h4>
        </div>

        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Job ID</th>
              <th>Candidate Name</th>
              <th>Candidate Email</th>
              <th>Candidate Mobile</th>
              <th>Company Logo</th>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Resume</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id}>
                <td>{index + 1}</td>
                <td>{job.id}</td>
                <td>{job.name}</td>
                <td>{job.email}</td>
                <td>{job.mobileNumber}</td>
                <td>
                  {job.image ? (
                    <img src={job.image} alt="Company Logo" width="50" height="50" />
                  ) : (
                    'N/A'
                  )}
                </td>
                <td>{job.companyName}</td>
                <td>{job.jobTitle}</td>
                <td>
                  {job.resume ? (
                    <a href={job.resume} target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  ) : (
                    'N/A'
                  )}
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppliedJobs;
