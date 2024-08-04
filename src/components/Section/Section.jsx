import React, { useState } from "react";
import "./Section.css";
import { motion } from "framer-motion";
import { containerVariants, desVaraints, tagVaraints, fadeIn } from "./animation";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';
import aboutImage from "./about.png"; // Import your JPG image

const Section = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <div className="section">
      <div className="inner-section">
        <div className="section-text">
          <h5>
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
            >
              OUR MISSION
            </motion.span>
          </h5>

          <motion.div
            variants={desVaraints}
            initial="offscreen"
            whileInView={"onscreen"}
            className="text"
          >
            {!typingDone && (
              <Typewriter
                words={['Our mission is to revolutionize the maritime sector by automating ship hull cleaning, addressing the drawbacks of manual methods and enhancing fuel efficiency and effectiveness in ship maintenance. This contributes to a more sustainable and streamlined maritime industry easing operations in Ship Husbandry.']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
                onLoopDone={() => setTypingDone(true)}
              />
            )}
            {typingDone && (
              <span>
                Our mission is to revolutionize the maritime sector by automating ship hull cleaning, addressing the drawbacks of manual methods and enhancing fuel efficiency and effectiveness in ship maintenance. This contributes to a more sustainable and streamlined maritime industry easing operations in Ship Husbandry.
              </span>
            )}
          </motion.div>
          <Link to="" spy={true} smooth={true} offset={-58}>
            <motion.div
              variants={containerVariants(0.6)}
              initial="offscreen"
              whileInView={"onscreen"}
              className="s-button"
            >
              Explore More
            </motion.div>
          </Link>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="section-image"
        >
          <img src={aboutImage} alt="About Us" className="img" />
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
