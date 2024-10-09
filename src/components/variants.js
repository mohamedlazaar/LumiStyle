import { motion } from 'framer-motion';

export const scrollAnimation = () => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 1,
      },
    },
  };
};
