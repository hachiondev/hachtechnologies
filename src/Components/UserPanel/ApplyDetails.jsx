import React from 'react';
import JobDetailsCard from './JobDetailsCard';
import hachlogo from '../../Assets/hachlogo.png';
import { useLocation } from 'react-router-dom';

const ApplyDetails = () => {
  const { state } = useLocation();

  const defaultDetails = {
    jobTitle: 'Software Engineer',
    companyName: 'Hachion Technologies',
    image: hachlogo,
    exp: '2-4 Years',
    location: 'India',
    time: 'Full-Time',
    type: 'Remote',
    post: '2025-07-20',
    workDays: 'Mon-Fri',
    vacancy: '2',
    salary: '₹80,000 - ₹100,000',
    noticePeriod: '15 days',
    description:
      'We are looking for a Software Engineer who is passionate about building scalable web applications and working with modern technologies.',
    qualification: 'B.Tech / M.Tech in Computer Science or related field',
  };

  const details = state || defaultDetails;

  return (
    <JobDetailsCard
      jobTitle={details.jobTitle}
      companyName={details.companyName}
      image={details.image}
      exp={details.exp}
      location={details.location}
      time={details.time}
      type={details.type}
      post={details.post}
      workDays={details.workDays}
      vacancy={details.vacancy}
      salary={details.salary}
      noticePeriod={details.noticePeriod}
      description={details.description}
      qualification={details.qualification}
    />
  );
};

export default ApplyDetails;
