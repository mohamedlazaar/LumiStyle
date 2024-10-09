import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollAnimation } from '../variants'; // Import the scroll animation function
import useScrollAnimation from '../UseScrollAnimation'; // Import the custom hook
import {Link} from 'react-router-dom'

function FeaturedProduct({data}) {
  const ref = useRef(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 }); 
    return (
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={scrollAnimation()}
        className="my-animated-component  text-center mx-auto px-8 space-y-20 py-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-10 ">Featured Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {data.map((product)=>(

      <div key={product.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
              <img
                  src={product.featured_image}
                  alt={product.title} className="object-cover w-full h-full" />
          </div>
          <div className="py-6 px-3">
              <div className="flex items-center justify-center mb-2">
                  <p className="block   text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                      {product.title}
                  </p>
                  {/* <p className="block   text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {product.price}
                  </p> */}
              </div>
              <p className="block   text-sm antialiased font-normal  leading-normal text-gray-700 opacity-75">
                  {product.price}
              </p>
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

          </div>
          <div className="pb-5 pt-0 mx-auto">
              <Link to={`/produits/${product.id}/${product.title.toLowerCase().replace(/\s+/g, '-')}`} >
                  <button  className="bg-yellow-500 hover:bg-black hover:text-white  align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block  text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                  More Details
                  </button>
              </Link>
          </div>
      </div>
      ))}

      </div>
        <Link to="/nos-produits" className="bg-yellow-500 hover:bg-black hover:text-white inline-block  align-middle select-none   font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none   text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
            Voir Tous Les Produits
        </Link>
      </motion.div>
      );}
          
    export default FeaturedProduct;