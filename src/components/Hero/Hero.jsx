"use client";
import React from "react";
import "./Hero.css";
import Email from "../Email/Email";
import { HeroData } from "../../utils/data";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          <div className="h-right">
            <div className="h-title">
              <span>Mafkin Robotics</span>
              <span>Revolutionizing Hull cleaning</span>
              <TypeAnimation
                sequence={[
                  "60% increase in cleaning efficiency",
                  2000,
                  "20% increase in fuel efficiency",
                  2000,
                  "Standardized waste management",
                  2000,
                  "Protection of anti-fouling coating",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div className="h-dis">
              Mafkin Robotics addresses the inefficiencies of manual Ship hull
              cleaning by pioneering a fully autonomous cleaning solution.
            </div>
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
