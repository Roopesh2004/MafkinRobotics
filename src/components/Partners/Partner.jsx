import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Partner.css'
import { motion } from 'framer-motion';
import { desVaraints } from '../../utils/animation';

const Partner = () => {
  const settings = {
    dots:true,
    infinite:true,
    slidesToShow:3,
    slideToScroll:1,
    autoplay:true,
    speed:2000,
    autoplaySpeed:2000,
    cssEase:"linear"
  };
  return (
    <div className='mainContainer'>
        <div className='parter-content'>

        <h2 className='tag'>Our Partners</h2>
        <motion.span
              variants={desVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="des"
            >
              Mafkin Robotics partners with innovative companies in the marine industry to design and build autonomous inspection and cleaning systems.
            </motion.span>
            </div>
        <Slider {...settings} className='partners'>
          <div><img src="chargebee.png" alt=""/></div>
          <div><img src="chargebee.png" alt=""/></div>
          <div><img src="chargebee.png" alt=""/></div>
          <div><img src="chargebee.png" alt=""/></div>
          <div><img src="chargebee.png" alt=""/></div>
          <div><img src="chargebee.png" alt=""/></div>

        </Slider>
      </div>
  )
}

export default Partner
