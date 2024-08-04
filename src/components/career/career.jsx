import React, { useState, useEffect } from 'react';
import './career.css';
import JobList from './JobList';
import CareerNavbar from './CareerNavbar'; // Import the CareerNavbar component

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const handleScroll = () => {
      const careerSection = document.querySelector('.career-section');
      if (!careerSection) {
        console.error('Career section element not found');
        return;
      }

      const windowHeight = window.innerHeight;
      const sectionTop = careerSection.getBoundingClientRect().top;

      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run the check once on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <CareerNavbar /> {/* Add CareerNavbar at the top */}
      <section className={`career-section ${isVisible ? 'visible' : ''}`}>
        <div className="career-bg">
          <h1>Career</h1>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="career-body">
          <div className="career-content">
            <h2>Be part of our mission</h2>
            <p>We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</p>
            <div className="job-filters">
              <button onClick={() => handleFilterClick('All')}>View All</button>
              <button onClick={() => handleFilterClick('Electrical and Mechanical')}>Electrical and Mechanical</button>
              <button onClick={() => handleFilterClick('Development')}>Development</button>
              <button onClick={() => handleFilterClick('Design')}>Design</button>
              <button onClick={() => handleFilterClick('Marketing')}>Marketing</button>
            </div>
            <JobList category={selectedCategory} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Career;
