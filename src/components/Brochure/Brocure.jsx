import React from "react";
import "./Brocure.css";
import { hitFeatures } from "../../utils/data";
import { tagVaraints, titleVaraints } from "../../utils/animation";
import { motion } from "framer-motion";

const Brocure = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          <div className="hiw-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Our Services
            </motion.span>
            <motion.span
              variants={titleVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Automating Ship Hull Cleaning for sustainable Future
            </motion.span>
          </div>

          <div className="hiw-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                variants={featureVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="hiw-feature"
                key={i}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="detail"
                >
                  <span className="des">0{i + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                <div className="hiw-icon">
                  <img
                    src={feature.icon}
                    width={170}
                    height={150}
                    alt=""
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brocure;
