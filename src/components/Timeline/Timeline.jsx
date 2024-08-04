import React, { useState } from "react";
import "./Timeline.css";
import { fadeIn, tagVaraints } from "../../utils/animation";
import { motion } from "framer-motion";
import Modal from "react-modal";

// Sample data for the timeline
const milestones = [
  {
    date: "July 2023",
    title: "Foundation",
    description:
      "Establishing the groundwork for Makfin Robotics in July 2023, with a vision to revolutionize the maritime industry through automated ship hull cleaning solutions.",
    detail:
      "Establishing the groundwork for Makfin Robotics in July 2023, with a vision to revolutionize the maritime industry through automated ship hull cleaning solutions.",
  },
  {
    date: "September 2023",
    title: "Government Grant Approval",
    description:
      "Securing crucial government funding in September 2023 to accelerate the development of innovative technologies for fuel-efficient and effective ship maintenance within Makfin Robotics.",
    detail:
      "Explanation about the grant application process, its importance, and how the funds are being utilized to foster innovation.",
  },
  // {
  //   date: "January 2024",
  //   title: "Launch of First Product",
  //   description:
  //     "Revealing Makfin Robotics' inaugural product in January 2024, a pioneering solution simplifying and automating ship hull cleaning, signaling progress toward a greener and more efficient maritime sector.",
  //   detail:
  //     "Details about the first product, its features, benefits, and the impact it aims to have on the maritime industry.",
  // },
];

const Timeline = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent({});
  };

  return (
    <section className="timeline-section">
      <motion.span
        className="m-heading"
        variants={tagVaraints}
        initial="offscreen"
        whileInView={"onscreen"}
      >
        <h2>Mafkin Milestones</h2>
      </motion.span>
      <div className="timeline-items">
        {milestones.map((milestone, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{milestone.date}</div>
            <motion.div
              variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="timeline-content"
            >
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
              <button className="learn-more-btn" onClick={() => openModal(milestone)}>Learn More</button>
            </motion.div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Milestone Detail"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>{modalContent.title}</h2>
        <p>{modalContent.detail}</p>
        <button onClick={closeModal} className="modal-close-btn">Close</button>
      </Modal>
    </section>
  );
};

export default Timeline;
