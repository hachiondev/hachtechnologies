import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { PiTimerBold } from "react-icons/pi";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedDate, setSelectedDate] = useState("All");
  const [minSalary, setMinSalary] = useState(0);
  const [workTypes, setWorkTypes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [appliedJob, setAppliedJob] = useState(null);
const navigate=useNavigate();
  useEffect(() => {
    axios.get("https://api.hachtechnologies.com/jobpost")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filterJobs();
  }, [selectedDate, minSalary, workTypes, jobs]);

  const filterJobs = () => {
    let filtered = [...jobs];

    if (selectedDate !== "All") {
      const now = new Date();
      filtered = filtered.filter((job) => {
        const jobDate = new Date(job.date);
        const timeDiff = now - jobDate;

        if (selectedDate === "Last 24 hours" && timeDiff > 24 * 60 * 60 * 1000) return false;
        if (selectedDate === "Last 3 days" && timeDiff > 3 * 24 * 60 * 60 * 1000) return false;
        if (selectedDate === "Last 7 days" && timeDiff > 7 * 24 * 60 * 60 * 1000) return false;
        return true;
      });
    }

    filtered = filtered.filter((job) => parseInt(job.salary) >= minSalary);

    if (workTypes.length > 0) {
      filtered = filtered.filter((job) => workTypes.includes(job.work_type));
    }

    setFilteredJobs(filtered);
  };

  const handleWorkTypeChange = (type) => {
    if (workTypes.includes(type)) {
      setWorkTypes(workTypes.filter((t) => t !== type));
    } else {
      setWorkTypes([...workTypes, type]);
    }
  };
const handleLogin=()=>{
  setShowLoginModal(false)
  navigate('/login');
}
  const handleApply = (job) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    const existingJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    const isAlreadyApplied = existingJobs.some(j => j.job_id === job.job_id);
    if (isAlreadyApplied) {
      alert("You already applied for this job.");
    } else {
      const updatedJobs = [...existingJobs, job];
      localStorage.setItem('appliedJobs', JSON.stringify(updatedJobs));
      setAppliedJob(job);
      setShowModal(true);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3 mb-4">
          <Card className="p-3 shadow-sm">
            <h5 className="mb-3">Filters</h5>

            <Form.Group className="mb-3">
              <Form.Label>Date posted</Form.Label>
              {["All", "Last 24 hours", "Last 3 days", "Last 7 days"].map((label, index) => (
                <Form.Check
                  type="radio"
                  label={label}
                  name="date"
                  key={index}
                  value={label}
                  checked={selectedDate === label}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mb-1"
                />
              ))}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Minimum monthly salary</Form.Label>
              <Form.Range
                min="0"
                max="150000"
                step="5000"
                value={minSalary}
                onChange={(e) => setMinSalary(Number(e.target.value))}
              />
              <div className="text-success mt-1">₹{minSalary} - 1.5 Lakhs</div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Work Type</Form.Label>
              {["Full Time", "Part Time", "Internship"].map((type, index) => (
                <Form.Check
                  type="checkbox"
                  label={type}
                  key={index}
                  checked={workTypes.includes(type)}
                  onChange={() => handleWorkTypeChange(type)}
                  className="mb-1"
                />
              ))}
            </Form.Group>
          </Card>
        </div>

        {/* Job Cards */}
        <div className="col-md-9">
          <Row>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <Col md={12} key={index} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title className="fw-bold text-primary">{job.job_title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        <div className="mb-2 me-5">
                        <IoBriefcaseOutline /> <span>Min. {job.experience} years</span>
                        </div>
                        <div className="mb-2">
                        Salary : <strong>₹ {job.salary}</strong>
                      </div>
                      <div className="mb-2 text-secondary">
                        <i className="bi bi-geo-alt-fill me-5"></i>
                       <IoLocationOutline /> {job.location || "Work from home"}
                      </div>
                      </div>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        <div className="mb-2 me-5">
                        <PiTimerBold /> <span>{job.work_type}</span>
                        </div>
                        <div className="mb-2">
                       <TiDocumentText /> Skills : <span>Good English</span>
                      </div>
                      </div>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        <div className="mb-2 me-5">
                        Openings : <span>1</span>
                        </div>
                        <div className="mb-2 me-5">
                        Posted : <span>3 Days ago</span>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap gap-5 mb-2">
                      <Button variant="primary" size="sm" onClick={() => handleApply(job)}>
                        Apply Now
                      </Button>
                      <Button variant="outline-primary" size="sm">
                        Save
                      </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <div className="text-center text-muted">No jobs found matching the filters.</div>
              </Col>
            )}
          </Row>
        </div>
      </div>

      {/* Apply Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Application Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You've successfully applied for: <strong>{appliedJob?.job_title}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Prompt Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please login to apply for jobs.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AppliedJobs;
