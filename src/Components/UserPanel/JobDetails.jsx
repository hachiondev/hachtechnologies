import React, { useEffect, useState } from 'react';
import ApplyDetails from './ApplyDetails';
import ApplyForm from './ApplyForm';
import { FaArrowUp } from 'react-icons/fa';
import jobdetails from '../../Assets/apply.png';

const JobDetails = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
<div className="container-fluid bg-light py-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/applied-jobs">Jobs</a></li>
            <li className="breadcrumb-item active" aria-current="page">Job Details</li>
          </ol>
        </nav>
      </div>

      <img className="img-fluid w-100" src={jobdetails} alt="Apply Banner" />

      <div className="container my-5">
        <div className="row">
            <div className="col-12 col-lg-6 mb-4">
            <ApplyDetails />
            </div>
            <div className="col-12 col-lg-6 mb-4">
            <ApplyForm />
            </div>
        </div>
        </div>

      {showScrollButton && (
        <button
          className="btn btn-primary scroll-to-top position-fixed bottom-0 end-0 m-4"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default JobDetails;