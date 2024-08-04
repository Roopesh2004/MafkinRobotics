export const tagVariants = {
  offscreen: { opacity: 0, x: -100 },
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

export const desVariants = {
  offscreen: { opacity: 0, x: 100 },
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

export const collapsibleVariants = {
  collapsed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.6,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};
