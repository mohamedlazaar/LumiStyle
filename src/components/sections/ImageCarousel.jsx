import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import first from "./first_hero.png";  // Importing first image
import second from "./second_hero.png"; // Importing second image

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [first, second]; // Array of images

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0)); // Switch between 0 and 1
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <img
   
      src={images[currentImage]} // Accessing the current image
      className=' rounded-2xl w-2/3 mx-auto' 
      // style={{height:"400px", width:"400px"}}
      alt="Lumi Style" // Improved alt text for accessibility
    />
  );
};

export default ImageCarousel;
