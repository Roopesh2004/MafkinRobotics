import React from 'react';
import { Link } from 'react-router-dom';
import './JobItem.css';
const JobItem = ({ title, description, location, type, applyLink }) => {
  return (
    <div className="job-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="job-details">
        <span>{location}</span>
        <span>{type}</span>
      </div>
      <Link to={`/career/${title}`}>
        <button>Apply</button>
      </Link>
    </div>
  )
}
export default JobItem;