import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollAnimation } from '../variants'; // Import the scroll animation function
import useScrollAnimation from '../UseScrollAnimation'; // Import the custom hook
import { Link } from 'react-router-dom';

function CatalogProducts({ data }) {
  const ref = useRef(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 }); 


  // Handle dot click navigation

  return (
    <div className=" container mx-auto py-6 mb-20 overflow-hidden">
      <motion.div
           ref={ref}
           initial="hidden"
           animate={isVisible ? 'visible' : 'hidden'}
           variants={scrollAnimation()}
        className="my-animated-component grid grid-cols-1 md:grid-cols-2 gap-1  px-5"

      >
        {data.map((product, index) => (
          <div
          index={index}
            key={product.id} // Use unique id for the key
            className="relative  shadow-lg overflow-hidden group flex flex-col justify-center  cursor-pointer rounded-lg"
            style={{
              backgroundImage: `url(${product.featured_image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              height: "500px",
              scrollSnapAlign: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

            {/* Product Info */}
            <div className="relative z-10 p-6 flex flex-col items-center  text-white space-y-4 gap-4">
              <h2 className="text-2xl md:text-3xl text-center   font-extrabold">{product.title}</h2>
              <p className="text-2xl md:text-3xl font-bold text-white">${product.price}</p>

              {/* Hidden a tag that shows on hover */}
              <Link
                to={`/produits/${product.id}/${product.title.toLowerCase().replace(/\s+/g, '-')}`} 
                className="bg-yellow-500 self-center  hover:bg-black hover:text-white  align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block  text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </motion.div>


    </div>
  );
}

export default CatalogProducts;
