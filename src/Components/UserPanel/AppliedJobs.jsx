import React, { useEffect, useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import './Login.css';
import hachlogo from '../../Assets/hachlogo.png';
import JobCard from './JobCard';

const AppliedJobs = () => {
  const [selectedDate, setSelectedDate] = useState("All");
  const [minSalary, setMinSalary] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const handleCheckboxChange = (value, setter) => {
  setter(prev => prev.includes(value)
    ? prev.filter(v => v !== value)
    : [...prev, value]);
};

  const jobCards = [
    {
      id: 1,
      jobTitle: 'SEO Executive',
      companyName: 'Hachion',
      image: hachlogo,
      exp: '5+ Years',
      location: 'India',
      time: 'Full-Time',
      type: 'Remote',
      post: '2025-07-16',
      vacancy: '2',
      salary: '80000'
    },
    {
      id: 2,
      jobTitle: 'Beanch Sale',
      companyName: 'Hachion',
      image: hachlogo,
      exp: '0-1 Years',
      location: 'India',
      time: 'Full-Time',
      type: 'Hybrid',
      post: '2025-07-14',
      vacancy: '1',
      salary: '60000'
    },
    {
      id: 3,
      jobTitle: 'Developer',
      companyName: 'Hachion',
      image: hachlogo,
      exp: '2-4 Years',
      location: 'India',
      time: 'Full-Time',
      type: 'Onsite',
      post: '2025-07-10',
      vacancy: '1',
      salary: '95000'
    },
  ];

  useEffect(() => {
    filterJobs();
  }, [selectedDate, minSalary, jobTitle, jobType, locations, experiences]);

  const filterJobs = () => {
    const now = new Date();

    const filtered = jobCards.filter((job) => {
      const matchDate = (() => {
        if (selectedDate === 'All') return true;
        const jobDate = new Date(job.post);
        const timeDiff = now - jobDate;
        if (selectedDate === 'Last 24 hours') return timeDiff <= 24 * 60 * 60 * 1000;
        if (selectedDate === 'Last 3 days') return timeDiff <= 3 * 24 * 60 * 60 * 1000;
        if (selectedDate === 'Last 7 days') return timeDiff <= 7 * 24 * 60 * 60 * 1000;
        return true;
      })();

      const matchSalary = parseInt(job.salary) >= minSalary;
      const matchTitle = jobTitle ? job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()) : true;
      const matchType = jobType ? job.type.toLowerCase() === jobType.toLowerCase() : true;
      const matchLocation = locations.length === 0 || locations.includes(job.location);
      const matchExperience = experiences.length === 0 || experiences.includes(job.exp);

      return matchDate && matchSalary && matchTitle && matchType && matchLocation && matchExperience;
    });

    setFilteredJobs(filtered);
  };

  const handleWorkTypeChange = (type) => {
    setJobType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleResetFilters = () => {
  setSelectedDate("All");
  setMinSalary(0);
  setJobType('');
  setLocations([]);
  setExperiences([]);
  setJobTitle('');
};

const handleApplyFilters = () => {
  filterJobs();
  setShowFilters(false); // Close drawer on apply
};

  return (
    <div className="container-fluid mt-4 custom-container">
      <div className="d-md-none text-end mb-2">
      <button className="btn btn-outline-primary" onClick={() => setShowFilters(true)}>
        Filters
      </button>
    </div>
      <div className="row">
        {/* Sidebar Filters */}
        <>
          {/* Drawer for small screens */}
          {showFilters && (
          <div className="filter-drawer d-md-none">
            <div className="drawer-overlay" onClick={() => setShowFilters(false)}></div>
            <div className="drawer-content">
              <button className="btn-close drawer-close-btn" onClick={() => setShowFilters(false)}></button>
                <Card className="p-3 shadow-sm d-flex flex-column h-100">
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

            <Form.Group className="mb-3">
              <Form.Label>Job Type</Form.Label>
              {["Remote", "Hybrid", "Onsite"].map((type, index) => (
                <Form.Check
                  type="checkbox"
                  label={type}
                  key={index}
                  checked={jobType.includes(type)}
                  onChange={() => handleWorkTypeChange(type)}
                  className="mb-1"
                />
              ))}
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            {["India", "USA", "Remote"].map((loc, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={loc}
                checked={locations.includes(loc)}
                onChange={() => handleCheckboxChange(loc, setLocations)}
                className="mb-1"
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>Experience</Form.Label>
            {["0-1 Years", "2-4 Years", "5+ Years"].map((exp, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={exp}
                checked={experiences.includes(exp)}
                onChange={() => handleCheckboxChange(exp, setExperiences)}
                className="mb-1"
              />
            ))}
          </Form.Group>
          <div className="mt-auto d-flex justify-content-between gap-2 pt-3">
          <button className="btn btn-secondary w-50" onClick={handleResetFilters}>
            Reset
          </button>
          <button className="btn btn-primary w-50" onClick={handleApplyFilters}>
            Apply Filters
          </button>
        </div>
          </Card>
        </div>
            </div>
          )}

          {/* Static Sidebar for desktop */}
          <Col md={3} className="d-none d-md-block mb-4">
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

            <Form.Group className="mb-3">
              <Form.Label>Job Type</Form.Label>
              {["Remote", "Hybrid", "Onsite"].map((type, index) => (
                <Form.Check
                  type="checkbox"
                  label={type}
                  key={index}
                  checked={jobType.includes(type)}
                  onChange={() => handleWorkTypeChange(type)}
                  className="mb-1"
                />
              ))}
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            {["India", "USA", "Remote"].map((loc, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={loc}
                checked={locations.includes(loc)}
                onChange={() => handleCheckboxChange(loc, setLocations)}
                className="mb-1"
              />
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>Experience</Form.Label>
            {["0-1 Years", "2-4 Years", "5+ Years"].map((exp, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={exp}
                checked={experiences.includes(exp)}
                onChange={() => handleCheckboxChange(exp, setExperiences)}
                className="mb-1"
              />
            ))}
          </Form.Group>
          <button className="btn btn-secondary w-100" onClick={handleResetFilters}>
            Reset
          </button>
            </Card>
          </Col>
        </>

        {/* Job Cards Section */}
        <Col md={9}>
          <Row>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                 <Col key={job.id} xs={12} sm={6} md={6} className="mb-3">
                  <JobCard
                    job={job}
                    jobTitle={job.jobTitle}
                    companyName={job.companyName}
                    image={job.image}
                    exp={job.exp}
                    location={job.location}
                    time={job.time}
                    type={job.type}
                    post={job.post}
                    vacancy={job.vacancy}
                  />
                </Col>
              ))
            ) : (
              <Col>
                <div className="text-center text-muted">No jobs found matching the filters.</div>
              </Col>
            )}
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default AppliedJobs;
