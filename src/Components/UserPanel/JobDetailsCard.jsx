import React from 'react';
import { TbBriefcaseFilled } from "react-icons/tb";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";
import { FaCalendar, FaDollarSign, FaCalendarWeek } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const JobDetailsCard = ({
  jobTitle,
  companyName,
  image,
  exp,
  location,
  time,
  type,
  post,
  vacancy,
  workDays,
  salary,
  noticePeriod,
  description,
  qualification
}) => {
  return (
    <div className="container mb-5">
      <div className="p-4 rounded shadow bg-white mb-4">
        <div className="card-body">
          <div className="d-flex align-items-start">
            <img src={image} alt="job" className="me-4" style={{ width: 100, height: 'auto', objectFit: 'contain' }} />
            <div className="flex-grow-1">
              <h4 className="mb-1">{jobTitle}</h4>
              <p className="mb-2 text-muted">{companyName}</p>
              <p className="mb-0"><FaCalendar className="me-2" /> Posted: {post}</p>
            </div>
          </div>
          <hr />
          <div className="row mt-3">
            <div className="col-md-6">
              <p><TbBriefcaseFilled className="me-2" /> Experience: {exp}</p>
              <p><FaDollarSign className="me-2" /> Salary: {salary}</p>
              <p><MdLocationOn className="me-2" /> {location}</p>
              <p><FaCalendarWeek className="me-2" /> Work Days: {workDays}</p>
            </div>
            <div className="col-md-6">
              <p><MdAccessTimeFilled className="me-2" /> Time: {time}</p>
              <p><MdAccessTimeFilled className="me-2" /> Notice Period: {noticePeriod}</p>
              <p><PiMapPinSimpleAreaFill className="me-2" /> Type: {type}</p>
              <p><BsFillPeopleFill className="me-2" /> Vacancies: {vacancy}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded shadow bg-white">
        <div className="card-body">
          <h5 className="card-title">Job Description</h5>
          <p className="card-text">{description}</p>

          <h5 className="card-title mt-4">Requirement / Qualification</h5>
          <p className="card-text">{qualification}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;