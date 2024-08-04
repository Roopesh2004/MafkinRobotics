import React, {useState} from "react";
import "./OurDiff.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {
  desVaraints,
  tagVaraints,
  titleVaraints,
  fadeIn
} from "@/src/utils/animation";
const OurDiff2 = () => {

    const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "center",
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };
  const data = [
    {
      icon: "/OurDiff/pic1.jpg",
      title: "Best Automation Robots",
      des: "Our mission is to level the playing field for early stage growth capital. We provide capital that We provide capital that We provide that that capital that ",
    },
    {
      icon: "/OurDiff/pic3.jpg",
      title: "Mutliple Ports Availability",
      des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders We provide capital that  that We that provide capital that",
    },
    {
      icon: "/OurDiff/pic3.jpeg",
      title: "Ease In process",
      des: "Funding that flexes as revenue grows with transparent costs and does not require dilution, personal We provide capital that We provide capital that ",
    },
  ];


  return (
    <div className="od-wrapper" >
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
            <motion.span
              variants={titleVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              We provides you the best Fleet cleaning services
            </motion.span>
            <motion.span
              variants={desVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="text"
            >
              We focus on what is good for our planet, our industry and our
              company and employees. We believe there is a future in making the
              shipping industry more sustainable.
            </motion.span>
          </div>
            <div className="o-container" style={{ backgroundImage: `url(${data[activeSlide].icon})` }}>
            <motion.div 
        variants={fadeIn('left',0.4)} initial="hidden"
        whileInView={'show'} viewport={{once:false,amount:0.7}}
        className="section-image">
              <Slider {...settings} className="s-slider">
                {data.map((d, index) => (
                  <div key={index} className="cards-section">
                    <div className="card-image">
                      <img src={d.icon} alt="" />
                    </div>
                    <div className="card-section">
                      <p className="o-title">{d.title}</p>
                      <p className="o-des">{d.des}</p>
                      <button className="o-button">Explore More</button>
                    </div>
                  </div>
                ))}
              </Slider>
              </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff2;
