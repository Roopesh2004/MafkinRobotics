import React, { useState } from "react";
import "./OurDiff.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiPlayCircleLine } from 'react-icons/ri'; 
import ReactPlayer from "react-player";
import {
  desVaraints,
  tagVaraints,
  titleVaraints,
  fadeIn,
} from "../../utils/animation";
const OurDiff = () => {
  //   const [activeSlide, setActiveSlide] = useState(0);
  // const settings = {
  //   className: "center",
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  // };
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Our Offerings
            </motion.span>
          </div>
          <div className="od-bottom">
            <motion.div 
                      variants={fadeIn("right", 0.4)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
            className="od-vedio">
              <div className="choose__img">
                {showVideo ? (
                  <ReactPlayer
                    url="https://www.youtube.com/embed/2pvCgap7bSg?si=UGwGWO2NlsOg8M5e"
                    controls
                    width="100%"
                    height="350px"
                  />
                ) : (
                  <img src="ouroff1.jpg" alt="" />
                )}

                {!showVideo && (
                  <span className="play__icon">
                    <RiPlayCircleLine className="o-icon" onClick={() => setShowVideo(!showVideo) }/>
                  </span>
                )}
              </div>
            </motion.div>
            <motion.div 
                      variants={fadeIn("left", 0.4)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
            className="od-slider">
              <Slider {...settings} className="od-bottom-slider">
                <div>
                  <div className="od-slider-content">
                    <span className="tag">Best Automation Robots</span>
                    <br />
                    <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Mrs. Emma</h4>
              <p>Graphic Designer</p>
            </div>

                    <div className="od-slider-button">
                      <button>Explore More</button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="od-slider-content">
                    <span className="tag">Multiple Ports Availability</span>
                    <br />
                    <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Mrs. Emma</h4>
              <p>Graphic Designer</p>
            </div>
                    <div className="od-slider-button">
                      <button>Explore More</button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="od-slider-content">
                    <span className="tag">Ease In Process</span>
                    <br />
                    <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Mrs. Emma</h4>
              <p>Graphic Designer</p>
            </div>
                    <div className="od-slider-button">
                      <button>Explore More</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
