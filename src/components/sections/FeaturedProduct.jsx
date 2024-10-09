import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollAnimation } from '../variants'; // Import the scroll animation function
import useScrollAnimation from '../UseScrollAnimation'; // Import the custom hook
import {Link} from 'react-router-dom'

function FeaturedProduct({data}) {
  const ref = useRef(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.4 }); 
    return (
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={scrollAnimation()}
        className="my-animated-component  text-center mx-auto px-8 space-y-20 py-16">
          <h1 className="text-4xl font-bold mb-10 ">Featured Products</h1>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      {data.map((product)=>(

      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
              <img
                  src={product.featured_image}
                  alt={product.title} class="object-cover w-full h-full" />
          </div>
          <div class="py-6 px-3">
              <div class="flex items-center justify-center mb-2">
                  <p class="block   text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                      {product.title}
                  </p>
                  {/* <p class="block   text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {product.price}
                  </p> */}
              </div>
              <p class="block   text-sm antialiased font-normal  leading-normal text-gray-700 opacity-75">
                  {product.price}
              </p>
          </div>
          <div class="pb-5 pt-0 mx-auto">
              <Link to={`/produits/${product.id}/${product.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  class="bg-yellow-500 hover:bg-black hover:text-white  align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block  text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                  More Details
              </Link>
          </div>
      </div>
      ))}

      </div>
        <a href="#" className="bg-yellow-500 hover:bg-black hover:text-white inline-block  align-middle select-none   font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none   text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
            Voir Tous Les Produits
        </a>
      </motion.div>
      );}
          
    export default FeaturedProduct;