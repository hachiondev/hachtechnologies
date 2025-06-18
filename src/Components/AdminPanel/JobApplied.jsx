import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const JobApplied = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    company: '',
    job_title: '',
    location: '',
    salary: '',
    experience: '',
    email: '',
    phone: '',
    candidate_name: '',
    candidate_email: '',
    candidate_phone: '',
    resume: '',
    date:''
  });

  const fetchJobs = async () => {
    const response = await axios.get('https://api.hachtechnologies.com/jobpost');
    setJobs(response.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleShow = () => {
    setFormData({
      company: '',
      job_title: '',
      location: '',
      salary: '',
      experience: '',
      email: '',
      phone: '',
      candidate_name: '',
      candidate_email: '',
      candidate_phone: '',
      resume: '',
      date:''
    });
    setIsEdit(false);
    setShowModal(true);
  };

  const handleEdit = (job) => {
    setSelectedJob(job);
    setFormData(job);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://api.hachtechnologies.com/jobpost/delete/${id}`);
    fetchJobs();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const updatedData = {
    ...formData,
    date: new Date().toISOString().split('T')[0], // e.g., "2025-05-10"
  };

  if (isEdit) {
    await axios.put(`https://api.hachtechnologies.com/jobpost/update/${selectedJob.job_id}`, updatedData);
  } else {
    await axios.post('https://api.hachtechnologies.com/jobpost/add', updatedData);
  }

  setShowModal(false);
  fetchJobs();
};

  return (
    <>
      <div className="admin">
        <Sidebar />
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Applied Jobs</h4>
            <button className="btn btn-primary" onClick={handleShow}>
              Add Job
            </button>
          </div>

          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Experience</th>
                <th>Contact Email</th>
                <th>Contact Phone</th>
                <th>Candidate Name</th>
                <th>Candidate Email</th>
                <th>Candidate Mobile</th>
                <th>Resume</th>
                <th>Job type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.company}</td>
                  <td>{job.job_title}</td>
                  <td>{job.location}</td>
                  <td>{job.salary}</td>
                  <td>{job.experience}</td>
                  <td>{job.email}</td>
                  <td>{job.phone}</td>
                  <td>{job.candidate_name}</td>
                  <td>{job.candidate_email}</td>
                  <td>{job.candidate_phone}</td>
                  <td>{job.resume}</td>
                  <td>{job.work_type}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(job)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(job.job_id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{isEdit ? 'Edit Job' : 'Add Job'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {[
                'company',
                'job_title',
                'location',
                'salary',
                'experience',
                'email',
                'phone',
                'candidate_name',
                'candidate_email',
                'candidate_phone',
                'resume',
                'work_type'
              ].map((field) => (
                <Form.Group key={field} className="mb-2">
                  <Form.Label className="text-capitalize">{field.replace('_', ' ')}</Form.Label>
                  <Form.Control
                    type="text"
                    name={field}
                    value={formData[field] || ''}
                    onChange={handleChange}
                    
                  />
                </Form.Group>
              ))}
              <Button variant="primary" type="submit" className="mt-2 w-100">
                {isEdit ? 'Update' : 'Add'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default JobApplied;
