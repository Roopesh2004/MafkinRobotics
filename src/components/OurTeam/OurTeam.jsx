import "./OurTeam.css";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay,EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animation";
const OurTeam = () => {
  // const [slidesPerView, setSlidesPerView] = useState(3);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1096) {
  //       setSlidesPerView(1);
  //     } else {
  //       setSlidesPerView(3);
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <div className="we-wrapper">
      <div className="we">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="ot-container"
        >
          <motion.span className="title">Meet our Team</motion.span>
          <div className="ot-line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        </motion.div>


        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay,EffectCoverflow, Pagination]}
          initialSlide={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide className="ot-slider">
          <div className="tt-wrapper">
          <h2>Mechanical Team</h2>
          <hr />
          <div className="members">
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Prateek</h4>
              {/* <p>Graphic Designer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Sriker</h4>
              {/* <p>Soft - Engineer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Sonu</h4>
              {/* <p>Web Developer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Sarthak</h4>
              {/* <p>Product Manager</p> */}
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
          <div className="tt-wrapper">
          <h2>Electronics Team</h2>
          <hr />
          <div className="members">
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Aniket</h4>
              {/* <p>Graphic Designer</p> */}
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
          <div className="tt-wrapper">
          <h2>Vision & AI Team </h2>
          <hr />
          <div className="members">
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Ishita Jain</h4>
              {/* <p>Graphic Designer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>S Ramanan</h4>
              {/* <p>Soft - Engineer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Siddhant</h4>
              {/* <p>Web Developer</p> */}
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
          <div className="tt-wrapper">
          <h2>Digital Team</h2>
          <hr />
          <div className="members">
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Mubin Chinchwalkar</h4>
              {/* <p>Graphic Designer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Sourav Kurmi</h4>
              {/* <p>Soft - Engineer</p> */}
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
          <div className="tt-wrapper">
          <h2>Navigation & Mapping</h2>
          <hr />
          <div className="members">
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Ferbin</h4>
              {/* <p>Graphic Designer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Sumukh</h4>
              {/* <p>Soft - Engineer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Niranjan</h4>
              {/* <p>Web Developer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Sai Krishna</h4>
              {/* <p>Product Manager</p> */}
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
          <div className="tt-wrapper">
          <h2>Navigation & Mapping</h2>
          <hr />
          <div className="members">
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Nikhilesh</h4>
              {/* <p>Graphic Designer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Shashank</h4>
              {/* <p>Soft - Engineer</p> */}
            </div>
            <div className="team-mem">
              <img src="person2.jpg" alt="Team Member" />
              <h4>Abhinav</h4>
              {/* <p>Web Developer</p> */}
            </div>
          </div>
        </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default OurTeam;
