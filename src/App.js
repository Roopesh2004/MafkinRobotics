import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Career from "./components/career/career";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Map from "./components/Map/Map";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Brocure from "./components/Brochure/Brocure";

import GoToTop from "./components/GoToTop/GoToTop";
import Testimonials from "./components/Testimonials/Testimonials";
import './App.css';
import HBottom from './components/HBottom/HBottom';
import Details from './components/career/Details';
function App() {
  const location = useLocation();
  const shouldRenderNavbar = !location.pathname.startsWith('/career');
  return (
    <div className="App">
      {shouldRenderNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HBottom />
            <Section />
            <div className="ocean-bg1">
              <WhatWeDo />
            </div>
            <Brocure />
            <Map />
            <div className="ocean-bg2">
              <Timeline />
            </div>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:title" element={<Details />} />
      </Routes>
      <GoToTop />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
