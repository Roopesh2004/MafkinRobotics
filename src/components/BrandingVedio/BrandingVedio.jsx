"use client";
import React, { useRef, useState } from "react";
import "./BrandingVedio.css";
import { motion, useScroll, useTransform } from "framer-motion";
const BrandingVedio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    ref.current.play(); // Play the video when hovered
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    ref.current.pause(); // Pause the video when not hovered
  };

  const handlePlayPause = () => {
    if (ref.current.paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <div className="bv-container">
      <div className="container">
        <motion.video
          ref={ref}
          className="bv-video"
          loop
          muted
          autoPlay
          controls=""
          style={{ scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
        {isHovered && (
          <div className="play-pause" onClick={handlePlayPause}>
            Hover To Play
          </div>
        )}      </div>
    </div>
  );
};

export default BrandingVedio;
