import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { FaCheckCircle } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';

const AdminPostJobs = () => {
  const [jobs, setJobs] = useState([
  {
    id: 'J101',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    mobileNumber: '9876543210',
    image: '', // Add a logo URL if needed
    companyName: 'Tech Corp',
    companyLink: 'https://techcorp.com',
    title: 'Frontend Developer',
    vacancies: 3,
    workingDays: 'Mon-Fri',
    exp: '2-4 years',
    salary: '₹8 LPA',
    location: 'Bangalore',
    notice: '15 days',
    empType: 'Full-time',
    jobType: 'Remote',
    description: 'React JS based frontend development.',
    qualification: 'B.Tech / M.Tech',
    date: '2025-08-06',
    status: '', // 'approved' or 'rejected'
  },
  {
    id: 'J102',
    name: 'Bob Smith',
    email: 'bob@example.com',
    mobileNumber: '9123456780',
    image: '',
    companyName: 'InnovateX',
    companyLink: 'https://innovatex.io',
    title: 'Backend Developer',
    vacancies: 2,
    workingDays: 'Mon-Sat',
    exp: '3-5 years',
    salary: '₹10 LPA',
    location: 'Hyderabad',
    notice: '30 days',
    empType: 'Contract',
    jobType: 'On-site',
    description: 'Node.js and API development.',
    qualification: 'MCA / B.Tech',
    date: '2025-08-05',
    status: '', // test approving/rejecting
  }
]);
const updateStatus = (jobId, status) => {
  setJobs(prevJobs =>
    prevJobs.map(job =>
      job.id === jobId ? { ...job, status } : job
    )
  );
};

//   const updateStatus = (jobId, status) => {
//   console.log(`Job ID ${jobId} status changed to: ${status}`);
// };


  return (
    <div className="admin">
      <Sidebar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Jobs Posted List</h4>
        </div>

        <div className="table-responsive-wrapper">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>S.No</th>
              <th style={{ whiteSpace: 'nowrap' }}>Job ID</th>
              <th style={{ whiteSpace: 'nowrap' }}>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th style={{ whiteSpace: 'nowrap' }}>Company Logo</th>
              <th style={{ whiteSpace: 'nowrap' }}>Company Name</th>
              <th style={{ whiteSpace: 'nowrap' }}>Company URL</th>
              <th style={{ whiteSpace: 'nowrap' }}>Job Title</th>
              <th>Vacancies</th>
              <th style={{ whiteSpace: 'nowrap' }}>Working Days</th>
              <th>Experiance</th>
              <th>Salary</th>
              <th>Location</th>
              <th style={{ whiteSpace: 'nowrap' }}>Notice Period</th>
              <th style={{ whiteSpace: 'nowrap' }}>Emp Type</th>
              <th style={{ whiteSpace: 'nowrap' }}>Job Type</th>
              <th>Description</th>
              <th>Qualification</th>
              <th>Date</th>
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
                <td>{job.companyLink}</td>
                <td>{job.title}</td>
                <td>{job.vacancies}</td>
                <td>{job.workingDays}</td>
                <td>{job.exp}</td>
                <td>{job.salary}</td>
                <td>{job.location}</td>
                <td>{job.notice}</td>
                <td>{job.empType}</td>
                <td>{job.jobType}</td>
                <td>{job.description}</td>
                <td>{job.qualification}</td>
                <td>{job.date}</td>
                <td className="text-center">
                  {job.status === 'approved' ? (
                    <span className="badge bg-success">Approved</span>
                  ) : job.status === 'rejected' ? (
                    <span className="badge bg-danger">Rejected</span>
                  ) : (
                    <div className="d-flex justify-content-center gap-2">
                      <FaCheckCircle
                        className="text-success"
                        style={{ cursor: 'pointer' }}
                        title="Approve"
                        onClick={() => updateStatus(job.id, 'approved')}
                      />
                      <RiCloseCircleLine
                        className="text-danger"
                        style={{ cursor: 'pointer' }}
                        title="Reject"
                        onClick={() => updateStatus(job.id, 'rejected')}
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPostJobs;