"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const latest = scrollYProgress.get();
      if (latest > 0.1) {
        setNavStyle("sticky");
      } else {
        setNavStyle("");
      }
    };

    scrollYProgress.onChange(handleScroll);
    handleScroll(); // Initial check
  }, [scrollYProgress]);

  const openCareerPage = () => {
    window.open("/career", "_blank");
  };

  return (
    <div className={`n-wrapper ${navStyle}`}>
      <div className="container">
        <div className="n-container">
          {/* logo part */}
          <ScrollLink
            to="h-wrapper"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => setopen(false)}
          >
            <div className="n-logo">
              <img className="logo-image" src="LOGO-G.png" alt=""></img>
            </div>
          </ScrollLink>
          {/* Right */}
          <div className="n-right">
            <div className="options">
              <ScrollLink to="h-wrapper" spy={true} smooth={true} offset={-100}>
                <span>Home</span>
              </ScrollLink>
              <ScrollLink to="hiw-wrapper" spy={true} smooth={true} offset={-70}>
                <span>Services</span>
              </ScrollLink>
              <span onClick={openCareerPage} style={{ cursor: 'pointer' }}>Career</span>
              <ScrollLink to="timeline-section" spy={true} smooth={true} offset={-65}>
                <span>About</span>
              </ScrollLink>
            </div>
            <ScrollLink to="contact-section" spy={true} smooth={true} offset={-65}>
              <div className="get-quote">Contact Us</div>
            </ScrollLink>
          </div>
        </div>
      </div>

      <div className="nm-container">
        <ScrollLink
          to="h-wrapper"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={() => setopen(false)}
        >
          <div className="n-logo">
            <img className="logo-image" src="LOGO-G.png" alt=""></img>
          </div>
        </ScrollLink>
        {!open ? (
          <BiMenuAltRight size={30} onClick={() => setopen(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setopen(false)} />
        )}

        <div
          className="m-options"
          style={{ transform: open && "translateX(0%)" }}
        >
          <ScrollLink
            to="h-wrapper"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => setopen(false)}
          >
            <span>Home</span>
          </ScrollLink>
          <ScrollLink
            to="hiw-wrapper"
            spy={true}
            smooth={true}
            offset={-45}
            onClick={() => setopen(false)}
          >
            <span>Services</span>
          </ScrollLink>
          <span onClick={openCareerPage} style={{ cursor: 'pointer' }}>Career</span>
          <ScrollLink
            to="timeline-section"
            spy={true}
            smooth={true}
            offset={-55}
            onClick={() => setopen(false)}
          >
            <span>About</span>
          </ScrollLink>
          <ScrollLink
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-58}
            onClick={() => setopen(false)}
          >
            <div className="mget-quote">Contact Us</div>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
