import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { FaEdit } from 'react-icons/fa';

const UserProfileSettings = () => {
  const [formData, setFormData] = useState({
    summary: '',
    personalInfo: '',
    salaryDetails: '',
    workExperience: '',
    educationDegree: '',
    educationInstitute: '',
    educationLocation: '',
    educationDate: '',
    visaStatus: '',
    noticePeriod: '',
    expectedSalary: '',
    certification: '',
    skills: '',
    additionalInfo: '',
    resume:'',
    userName: '',
    date: '',
  });

  const [isProfileCreated, setIsProfileCreated] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [editableFields, setEditableFields] = useState({});
  const userName = localStorage.getItem('userName');
const getResumeUrl = () => {
  if (formData.resume instanceof File) {
    return URL.createObjectURL(formData.resume);
  }
  // Assuming backend returns a resume path relative to server
  return `https://api.hachtechnologies.com/uploads/${formData.resume}`;
};

  // Fetch existing profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://api.hachtechnologies.com/profile/get/${userName}`);
        if (response.ok) {
          const data = await response.json();
          setFormData((prev) => ({
            ...prev,
            ...data,
            userName: data.userName || userName,
          }));
          setIsProfileCreated(true);
        } else {
          setIsProfileCreated(false); // profile not found
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (userName) fetchProfile();
  }, [userName]);

  const toggleEdit = (field) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (!editableFields[field]) {
      setEditableFields((prev) => ({ ...prev, [field]: true }));
    }
  };
const handleFormSubmit = async () => {
  const endpoint = isProfileCreated
    ? `https://api.hachtechnologies.com/profile/update/${formData.id}`
    : 'https://api.hachtechnologies.com/profile/add';

  const updatedFields = {
    userName: userName || '',
  };
  

  Object.keys(editableFields).forEach((field) => {
    if (editableFields[field]) {
      updatedFields[field] = formData[field];
    }
  });

  const form = new FormData();
  form.append("profileData", JSON.stringify(updatedFields));


  // Only append if a new file is selected
  if (formData.profileImage instanceof File) {
    form.append("profileImage", formData.profileImage);
  }

  if (formData.resume instanceof File) {
    form.append("resume", formData.resume);
  }

  try {
    const response = await fetch(endpoint, {
      method: isProfileCreated ? 'PUT' : 'POST',
      body: form,
    });

    const result = await response.text();
    if (response.ok) {
      setIsProfileCreated(true);
      alert('Profile saved successfully!');
    } else {
      alert('Error: ' + result);
    }
  } catch (err) {
    console.error('Submit error:', err);
    alert('Error submitting form');
  }
};

const handleResumeUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  }
};


  const renderEditableField = (label, fieldName, type = "text", as = "input", rows = 1) => (
    <Card className="mb-3 p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h6>{label}</h6>
        <FaEdit onClick={() => toggleEdit(fieldName)} style={{ cursor: 'pointer' }} />
      </div>
      {as === "textarea" ? (
        <Form.Control
          as="textarea"
          rows={rows}
          value={formData[fieldName]}
          onChange={(e) => handleInputChange(fieldName, e.target.value)}
          disabled={!editableFields[fieldName]}
        />
      ) : (
        <Form.Control
          type={type}
          value={formData[fieldName]}
          onChange={(e) => handleInputChange(fieldName, e.target.value)}
          disabled={!editableFields[fieldName]}
        />
      )}
    </Card>
  );

  return (
    <div className="user-dashboard">
      <Sidebar />
      <Container fluid className="p-4">
        <Row>
          <Col lg={9} xs={12}>
            <h5>User Profile Settings</h5>

            {renderEditableField('Summary', 'summary', 'text', 'textarea', 2)}
            {renderEditableField('Personal Info', 'personalInfo', 'text', 'textarea', 2)}
            {renderEditableField('Salary Details', 'salaryDetails')}
            {renderEditableField('Expected Salary', 'expectedSalary')}
            {renderEditableField('Work Experience', 'workExperience', 'text', 'textarea', 2)}
            {renderEditableField('Visa Status', 'visaStatus')}
            {renderEditableField('Certifications', 'certification', 'text', 'textarea', 2)}
            {renderEditableField('Skills', 'skills', 'text', 'textarea', 2)}
            {renderEditableField('Additional Info', 'additionalInfo', 'text', 'textarea', 2)}

            <Card className="mb-3 p-3">
              <h6>Education</h6>
              <Form.Control
                type="text"
                className="mb-2"
                placeholder="Degree"
                value={formData.educationDegree}
                onChange={(e) => handleInputChange('educationDegree', e.target.value)}
              />
              <Form.Control
                type="text"
                className="mb-2"
                placeholder="Institute"
                value={formData.educationInstitute}
                onChange={(e) => handleInputChange('educationInstitute', e.target.value)}
              />
              <Form.Control
                type="text"
                className="mb-2"
                placeholder="Location"
                value={formData.educationLocation}
                onChange={(e) => handleInputChange('educationLocation', e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Date"
                value={formData.educationDate}
                onChange={(e) => handleInputChange('educationDate', e.target.value)}
              />
            </Card>

            <Card className="mb-3 p-3">
              <h6>Notice Period</h6>
              <Form.Select
                value={formData.noticePeriod}
                onChange={(e) => handleInputChange('noticePeriod', e.target.value)}
              >
                <option value="">Select Notice Period</option>
                <option value="7 Days">7 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="1 Month">1 Month</option>
                <option value="None">None</option>
              </Form.Select>
            </Card>
          </Col>

          <Col lg={3} xs={12}>
<Card className="p-3 mb-3">
  <h6>Resume</h6>

  {formData.resume ? (
    <div>
      <p>
        <strong>Uploaded Resume:</strong>{' '}
        {formData.resume.name || (typeof formData.resume === 'string' ? formData.resume.split('/').pop() : '')}
      </p>

      {/* View Resume Button - only if it's a string from backend or if a File is uploaded */}
      {(typeof formData.resume === 'string' || formData.resume instanceof File) && (
        <Button
          variant="outline-success"
          size="sm"
          className="me-2"
          onClick={() => window.open(
            typeof formData.resume === 'string'
              ? `https://api.hachtechnologies.com/uploads/${formData.resume}` // Use correct path
              : URL.createObjectURL(formData.resume), // For new uploads
            '_blank'
          )}
        >
          View Resume
        </Button>
      )}

      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => setFormData((prev) => ({ ...prev, resume: null }))}
      >
        Update Resume
      </Button>
    </div>
  ) : (
    <Form.Group controlId="formFile">
      <Form.Control
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleResumeUpload}
      />
      <Form.Text className="text-muted">
        Upload to auto-fill profile
      </Form.Text>
    </Form.Group>
  )}
</Card>


</Col>

        </Row>

        <Button variant="primary" className="mt-3" onClick={handleFormSubmit}>
          {isProfileCreated ? 'Update Profile' : 'Create Profile'}
        </Button>
      </Container>
    </div>
  );
};

export default UserProfileSettings;
