import React from "react";
import "./HBottom.css";
import { HeroData } from "../../utils/data";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/animation";
const HBottom = () => {
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
    <div className="h-bottom-wrapper">
      <div className="h-b-wrapper">
        <div className="h-b-left">
          <div className="h-left-inner">
            <div className="image-row">
              {HeroData.slice(2, 6).map((person, i) => (
                <motion.div
                  variants={containerVariants(0.3)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  className="person-pill"
                  key={i}
                >
                  <div className="person-pill-bg">
                    <img src={person.src} alt=""></img>
                    <motion.span
                      variants={containerVariants(0.6)}
                      initial="offscreen"
                      whileInView={"onscreen"}
                      className="pill-span hover-effect"
                    >
                      <h1>{person.des}</h1>
                    </motion.span>
                  </div>
                  {/* <motion.div
                      initial={"initial"}
                      animate={"animate"}
                      variants={variants(person.delay)}
                      className="person-pill-bg"
                    >
                      <Lottie animationData={pic1} className="img" />
                    </motion.div> */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HBottom;
