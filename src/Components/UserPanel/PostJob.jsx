import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from "formik";
import { LoginSchema } from "../Schemas";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';

const initialValues = {
  name: "",
  email: "",
  number: "",
  resume: "",
  date: "",
};

const PostJob = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const resumeInputRef = useRef(null);

  const { state } = useLocation();
  const { jobId, jobTitle, companyName, image } = state || {};

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: () => {},
  });

  return (
    <div className="container my-4 d-flex justify-content-center">
  <div className="p-4 rounded shadow bg-white" style={{ width: "80%" }}>
    <h2 className="d-flex justify-content-center mb-3">Post Job</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">First Name<span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your first name"
          />
          {errors.firstName && touched.firstName && <div className="text-danger">{errors.firstName}</div>}
        </div>

        <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">Last Name<span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your last name"
          />
          {errors.lastName && touched.lastName && <div className="text-danger">{errors.lastName}</div>}
        </div>
        </div>

        {/* Email */}
        <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="email" className="form-label">Email ID<span className="text-danger">*</span></label>
          <input
            type="emailid"
            className="form-control"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="abc@gmail.com"
          />
          {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
        </div>

        {/* Mobile Number */}
        <div className="mb-3 col-md-6">
          <label htmlFor="mobile" className="form-label">Mobile Number<span className="text-danger">*</span></label>
          <input
            type="tel"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
          />
        </div>
        </div>

        <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="companyName" className="form-label">Company Name<span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="companyName"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your company Name"
          />
          {errors.companyName && touched.companyName && <div className="text-danger">{errors.companyName}</div>}
        </div>

        <div className="mb-3 col-md-6">
          <label htmlFor="link" className="form-label">Company URL<span className="text-danger">*</span></label>
          <input
            type="link"
            className="form-control"
            name="companyLink"
            value={values.companyLink}
            onChange={handleChange}
            placeholder="Enter your company URL"
          />
        </div>
        </div>

        <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="file" className="form-label">Company Logo<span className="text-danger">*</span></label>
          <input
            type="file"
            className="form-control"
            accept=".jpg, .png, .webp, .avif"
          />
        </div>

            <div className="mb-3 col-md-6">
            <label htmlFor="work" className="form-label">Working Days<span className="text-danger">*</span>
            </label>
            <select
                className="form-select"
                name="workingDays"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.workingDays}
            >
                <option value="">Select Working Days</option>
                <option value="Mon - Fri">Mon - Fri</option>
                <option value="Mon - Sat">Mon - Sat</option>
                <option value="Mon - Sun">Mon - Sun</option>
            </select>
            {errors.workingDays && touched.workingDays && (
                <div className="text-danger">{errors.workingDays}</div>
            )}
            </div>
        </div>

        <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="title" className="form-label">Job Title<span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Job Title"
          />
          {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3 col-md-6">
          <label htmlFor="vacancies" className="form-label">Vacancies<span className="text-danger">*</span></label>
          <input
            type="number"
            className="form-control"
            name="vacancies"
            value={values.vacancies}
            placeholder="Enter no. of Vacancies"
          />
        </div>
        </div>

         <div className="row">
        <div className="mb-3 col-md-6">
            <label htmlFor="exp" className="form-label">Experiance<span className="text-danger">*</span>
            </label>
            <select
                className="form-select"
                name="exp"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.exp}
            >
                <option value="">Select Experiance</option>
                <option value="0 - 1 Year">0 - 1 Year</option>
                <option value="2 - 4 Years">2 - 4 Years</option>
                <option value="5+ Years">5+ Years</option>
            </select>
            {errors.exp && touched.exp && (
                <div className="text-danger">{errors.exp}</div>
            )}
            </div>

        <div className="mb-3 col-md-6">
          <label htmlFor="salary" className="form-label">Salary Range<span className="text-danger">*</span></label>
          <input
            type="amount"
            className="form-control"
            name="salary"
            value={values.salary}
            placeholder="Enter salary range"
          />
        </div>
        </div>

        <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="location" className="form-label">Location<span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={values.location}
            placeholder="Enter location"
          />
          {errors.location && touched.location && <div className="text-danger">{errors.location}</div>}
        </div>

        <div className="mb-3 col-md-6">
          <label htmlFor="notice" className="form-label">Notice Period<span className="text-danger">*</span></label>
          <input
            type="number"
            className="form-control"
            name="notice"
            value={values.notice}
            placeholder="Enter notice period"
          />
        </div>
        </div>

        <div className="row">
        <div className="mb-3 col-md-6">
            <label htmlFor="empType" className="form-label">Type of Employment<span className="text-danger">*</span>
            </label>
            <select
                className="form-select"
                name="empType"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.empType}
            >
                <option value="">Select Employment</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
            {errors.empType && touched.empType && (
                <div className="text-danger">{errors.empType}</div>
            )}
            </div>

            <div className="mb-3 col-md-6">
            <label htmlFor="jobType" className="form-label">Job Type<span className="text-danger">*</span>
            </label>
            <select
                className="form-select"
                name="jobType"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jobType}
            >
                <option value="">Select Job Type</option>
                <option value="Onsite">Onsite</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
            </select>
            {errors.jobType && touched.jobType && (
                <div className="text-danger">{errors.jobType}</div>
            )}
            </div>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description<span className="text-danger">*</span></label>
          <textarea
            type="text"
            className="form-control"
            name="description"
            value={values.description}
            placeholder="Enter job description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="qualification" className="form-label">Requirements / Qualifications<span className="text-danger">*</span></label>
          <textarea
            type="text"
            className="form-control"
            name="qualification"
            value={values.qualification}
            placeholder="Enter Requirements / Qualifications"
          />
        </div>

        {/* Error / Success Messages */}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {error && <div className="alert alert-warning">{error}</div>}

        <div className="text-center">
        <button
            className="btn btn-primary w-50"
            type="submit"
        >
            Post Job
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default PostJob;
