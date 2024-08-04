import React from 'react';
import { Link } from 'react-router-dom';
import './CareerNavbar.css'; // Import the CSS file for styling

const CareerNavbar = () => {
  return (
    <div className="career-navbar n-wrapper">
      <div className="container">
        <div className="n-container">
          <Link to="/" className="n-logo">
            <img className="logo-image" src="LOGO-G.png" alt="Logo" />
          </Link>
          <div className="n-right">
            <Link to="/" className="home-button">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerNavbar;
