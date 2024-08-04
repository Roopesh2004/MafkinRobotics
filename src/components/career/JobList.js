import React from 'react';
import JobItem from './JobItem';
import jobs from './jobs.json';
import './JobList.css';

const JobList = ({ category }) => {
  const filteredJobs = category === 'All' ? jobs : jobs.filter(job => job.category === category);

  return (
    <div className="job-list">
      {filteredJobs.map((job, index) => (
        <JobItem
          key={index}
          title={job.title}
          description={job.description}
          location={job.location}
          type={job.type}
          applyLink={job.applyLink} // Pass the applyLink prop
        />
      ))}
    </div>
  );
};

export default JobList;
