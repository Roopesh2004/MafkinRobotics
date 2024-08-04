export const containerVariants = (delay = 0) => ({
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay
      }
    }
  });
  
  export const desVaraints = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  export const tagVaraints = {
    offscreen: { opacity: 0, x: 50 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  export const fadeIn = (direction = "up", delay = 0) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 20 : 0,
        x: direction === "left" ? -20 : 0
      },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay
        }
      }
    };
  };
  