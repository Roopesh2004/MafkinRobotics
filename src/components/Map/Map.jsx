import React, { useEffect, useRef } from "react";
import "./Map.css";
import Lottie from "lottie-react";
import temp from "./location2.json";

const Map = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.7 } // Adjust this value as needed
    );

    if (leftRef.current) {
      observer.observe(leftRef.current);
    }
    if (rightRef.current) {
      observer.observe(rightRef.current);
    }

    return () => {
      if (leftRef.current) {
        observer.unobserve(leftRef.current);
      }
      if (rightRef.current) {
        observer.unobserve(rightRef.current);
      }
    };
  }, []);

  return (
    <div className="m-wrapper">
      <div className="m-container">
        <div className="m-left" ref={leftRef}>
          <span className="tag">Our Targeted Ports</span>
          <span className="text">
            Mafkin Robotics is poised to revolutionize ship cleaning in India&apos;s busiest ports, starting with Jawaharlal Nehru Port Trust-JNPT, Mumbai Port, Chennai Port, and Paradip Port. Our autonomous and semi-autonomous robots are the future of ship cleaning, offering unparalleled efficiency, safety, and sustainability.
          </span>
          <Lottie animationData={temp} className="lottie" />
        </div>

        <div className="m-right" ref={rightRef}>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1DFTRF0-fs3CiHNYcbUX3IY4zHD8hHgw&ehbc=2E312F&noprof=1"
            className="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
