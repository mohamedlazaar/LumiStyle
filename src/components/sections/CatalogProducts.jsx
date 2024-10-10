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
              <div className="flex justify-center items-center mb-4">
              {/* Rating stars */}
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">{product.rating} {product.reviews}</span>
            </div>

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
