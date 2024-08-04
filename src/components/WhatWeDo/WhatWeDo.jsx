import React, { useState } from "react";
import "./WhatWeDo.css";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/animation";
import { desVaraints } from "../../utils/animation";
import { tagVaraints } from "../../utils/animation";
import { Link } from "react-scroll";
import pic1 from "./fuel.jpg"; // Update with your image paths
import pic2 from "./efficient.jpg"; // Update with your image paths
import pic3 from "./sustain.jpg"; // Update with your image paths

const WhatWeDo = () => {
  const [showPopup, setPopup] = useState(false);
  const [showsecondPopup, setsecondPopup] = useState(false);
  const [showthirdPopup, setthirdPopup] = useState(false);

  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              <p className="hea">Why Choose Us</p>
            </motion.span>
            <motion.span
              variants={desVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              <p className="hea">Unleashing efficiency, enhancing safety, and achieving sustainability in ship cleaning</p>
            </motion.span>
            <motion.span
              variants={desVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="des"
            >
              <p className="hea">Discovering Our Measure of Excellence</p>
            </motion.span>
          </div>
          <div className="card-section">
            <div className="cards">
              <motion.div
                variants={containerVariants(0.4)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="card"
              >
                <img src={pic1} className="img" alt="Efficiency" />
                <h1>60% increase in cleaning efficiency</h1>
                <p>
                  Clean faster, save money with our 60% more efficient robots.
                </p>
                <button
                  className="button2"
                  type="button"
                  onClick={() => setPopup(true)}
                  style={{marginTop:'1.35rem'}}
                >
                  Learn More{" "}
                </button>
              </motion.div>
              <motion.div
                variants={containerVariants(0.6)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="card"
              >
                <img src={pic3} className="img" alt="Fuel Efficiency" />
                <h1>Substantial 20% increase in fuel efficiency</h1>
                <p>
                  Save 20% on fuel costs with cleaner ships and reduced drag.
                </p>
                <button
                  className="button2"
                  type="button"
                  onClick={() => setsecondPopup(true)}
                  style={{marginTop:'1.35rem'}}
                >
                  Learn More
                </button>
              </motion.div>
              <motion.div
                variants={containerVariants(0.8)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="card"
              >
                <img src={pic2} className="img" alt="Anti-fouling Protection" />
                <h1>Protection of anti-fouling coating</h1>
                <p>
                  Protect your investment and prolong hull life with our gentle
                  cleaning methods.
                </p>
                <button
                  className="button2"
                  type="button"
                  onClick={() => setthirdPopup(true)}
                >
                  Learn More{" "}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="modelBox">
            <img src="" alt="" />
            <div className="box">
              <h2 className="tag">60% increase in cleaning efficiency</h2>
              <p className="text">
                Our product can clean ship hulls 60% faster than traditional
                methods, saving you time and money. They are equipped with
                advanced sensors and AI to identify and remove even the most
                stubborn marine growth, ensuring a deep and effective clean
                every time.
              </p>
              <div className="b-button">
                <Link
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-65}
                >
                  <button className="button" onClick={() => setPopup(false)}>
                    Contact Now
                  </button>
                </Link>
                <button
                  onClick={() => setPopup(false)}
                  className="close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {showsecondPopup && (
          <div className="modelBox">
            <img src="" alt="" />
            <div className="box">
              <h2 className="tag">substantial 20% increase in fuel efficiency</h2>
              <p className="text">
                Our product helps reduce drag from marine growth, which can save
                shipping companies up to 20% on fuel costs. They also use less
                water and energy than traditional cleaning methods, helping to
                reduce the environmental impact of the shipping industry.
              </p>
              <div className="b-button">
                <Link
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-65}
                >
                  <button
                    className="button"
                    onClick={() => setsecondPopup(false)}
                  >
                    Contact Now
                  </button>
                </Link>
                <button
                  onClick={() => setsecondPopup(false)}
                  className="close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {showthirdPopup && (
          <div className="modelBox">
            <img src="" alt="" />
            <div className="box">
              <h2 className="tag">Protection of anti-fouling coating</h2>
              <p className="text">
                Our product is designed to protect your ship&apos;s anti-fouling
                coating, extending its life and reducing the need for expensive
                repairs and replacements. They use gentle cleaning methods that
                avoid damaging the coating, ensuring that your ship is protected
                from marine growth and corrosion.
              </p>
              <div className="b-button">
                <Link
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-65}
                >
                  <button
                    className="button"
                    onClick={() => setthirdPopup(false)}
                  >
                    Contact Now
                  </button>
                </Link>
                <button
                  onClick={() => setthirdPopup(false)}
                  className="close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeDo;
