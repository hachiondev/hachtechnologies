import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from "formik";
import { LoginSchema } from "../Schemas";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import success from "../../Assets/success.gif";

const initialValues = {
  name: "",
  email: "",
  number: "",
  resume: "",
  date: "",
};

const ApplyForm = ({ closeModal = () => {} }) => {
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

  const handleContact = async (e) => {
    e.preventDefault();

    if (!values.resume) {
      setError("Please attach your resume.");
      return;
    }
    if (!isChecked) {
      setError("Please acknowledge the Privacy Notice and Terms & Conditions.");
      return;
    }

    setError("");
    const formData = new FormData();

    if (values.resume) {
      formData.append("resume", values.resume);
    }

    const requestData = {
      jobId,
      jobTitle,
      companyName,
      companyLogo: image?.split("/").pop(),
      studentName: values.name,
      email: values.email,
      mobileNumber: mobileNumber,
    };

    formData.append("data", new Blob([JSON.stringify(requestData)], { type: "application/json" }));

    try {
      const response = await axios.post("https://api.hachion.co/apply-job/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        setShowModal(true);
        setSuccessMessage("✅ Application submitted successfully!");
        setErrorMessage("");
        setFieldValue("resume", "");
        if (resumeInputRef.current) resumeInputRef.current.value = null;
        setIsChecked(false);
      }
    } catch (error) {
      setErrorMessage("❌ Failed to submit your application. Please try again later.");
      setSuccessMessage("");
      console.error("Error submitting application:", error);
    }
  };

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
  <div className="p-4 rounded shadow bg-white" style={{ maxWidth: "500px", width: "100%" }}>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name<span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
          />
          {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email ID<span className="text-danger">*</span></label>
          <input
            type="email"
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
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile Number<span className="text-danger">*</span></label>
          <input
            type="tel"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">Upload Resume<span className="text-danger">*</span></label>
          <input
            type="file"
            className="form-control"
            name="resume"
            accept=".pdf, .txt, .doc, .docx, .rtf"
            ref={resumeInputRef}
            onChange={(event) => setFieldValue("resume", event.currentTarget.files[0])}
            onBlur={handleBlur}
          />
          <small className="form-text text-muted">(.pdf, .txt, .doc, .docx, .rtf)</small>
          {errors.resume && touched.resume && <div className="text-danger">{errors.resume}</div>}
        </div>

        {/* Error / Success Messages */}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {error && <div className="alert alert-warning">{error}</div>}

        <div className="text-center">
        <button
            className="btn btn-primary w-100"
            type="submit"
            onClick={handleContact}
        >
            Apply Now
        </button>
        </div>

        {/* Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              setSuccessMessage("");
            }}
            id="termsCheck"
          />
          <label className="form-check-label" htmlFor="termsCheck">
            By clicking on Apply Now, you acknowledge that you have read our{' '}
            <span onClick={() => navigate("/privacy")} className="text-primary" style={{ cursor: "pointer", textDecoration: "underline" }}>
              Privacy Notice
            </span> and{' '}
            <span onClick={() => navigate("/terms")} className="text-primary" style={{ cursor: "pointer", textDecoration: "underline" }}>
              Terms & Conditions
            </span>.
          </label>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade" style={{ display: "block" }} tabIndex="-1" onClick={() => { setShowModal(false); closeModal(false); }}>
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content text-center p-3">
              <button
                type="button"
                className="btn-close ms-auto"
                onClick={() => {
                  setShowModal(false);
                  setSuccessMessage("");
                }}
              ></button>
              <div className="modal-body">
                <img src={success} alt="Success" style={{ maxWidth: "150px" }} />
                <p className="mt-3 fw-bold">Thank you! Our Team will contact you soon.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ApplyForm;
