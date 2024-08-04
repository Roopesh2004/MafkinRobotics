import React from "react";
import "./OurProcess.css";
import { motion } from "framer-motion";
import { tagVariants, desVariants, collapsibleVariants } from "./animation";

const OurProcess = () => {
  return (
    <div className="op-wrapper">
      <div className="op-container">
        <div className="op-left">
          <motion.span
            variants={tagVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="tag"
          >
            Our Services
          </motion.span>
          <motion.span
            variants={desVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="text"
          >
            You continue with your operations,
            <br />
            we handle our part.
          </motion.span>
        </div>
        <div className="op-right">
          {["Autonomous Solution", "Semi-autonomous Solution", "Dry-docking"].map((title, index) => (
            <motion.div
              className="o-qa"
              key={index}
              initial="collapsed"
              whileInView="open"
              viewport={{ once: true, amount: 0.8 }}
              variants={collapsibleVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={`path/to/image-${index + 1}.png`} alt={title} /> {/* Ensure correct paths */}
              <input type="checkbox" id={`o-collapsible-head-${index + 1}`} />
              <label htmlFor={`o-collapsible-head-${index + 1}`}>{title}</label>
              <div className={`o-collapsible-text-${index + 1}`}>
                <p>
                  {index === 0 &&
                    "GPS-guided cleaning for ships on the go. Our autonomous robots use GPS navigation to clean ship hulls automatically, without the need for human intervention."}
                  {index === 1 &&
                    "Remotely controlled cleaning for hard-to-reach areas. Our semi-autonomous robots are remotely operated by skilled technicians, allowing them to clean hard-to-reach areas and complex hull geometries."}
                  {index === 2 &&
                    "Lifted and cleaned for a pristine hull. Our dry cleaning service uses a state-of-the-art lift system to raise ships out of the water so that their hulls can be cleaned and inspected."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
