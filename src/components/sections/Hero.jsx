import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Hero({ data }) {
  return (
    <div className='bg-yellow-500 pt-5 pb-10'>
      {data.map(item => (
        <div key={item.id} className='container mx-auto h-full w-full px-6  space-x-6 justify-center items-center flex flex-col-reverse md:flex-row'>
          <div className="md:w-1/2 flex flex-col space-y-2 gap-5 py-10 px-2 text-center md:text-left justify-center">
            <h1 className='text-3xl md:text-5xl font-bold text-white'>{item.title}</h1>
            <p className='md:text-base font-light text-black md:leading-relaxed'>{item.description}</p>
            {/* Added Link with dynamic route */}
            <Link to={`/produits/${item.id}/${item.title.toLowerCase().replace(/\s+/g, '-').replace(',', '-')}`}  className='self-center hover:bg-white md:self-start bg-black text-white  border-black border-2 hover:text-black inline-block  align-middle select-none   font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'>
              See The Product
            </Link>
          </div>
          <div className="relative md:w-1/2 py-3 md:py-10">
            <motion.img
              animate={{ scale: [1, 1.2, 1.2, 1, 1], rotate: [0, 0, 270, 270, 0], borderRadius: ["20%", "20%", "50%", "50%", "9999px"] }}
              src={item.featured_image}
              className='mx-auto w-2/3 md:w-auto lg:w-2/3 scale-x-75 rounded-full'
              alt={`${item.title} Image`} // Added alt for accessibility
            />
            <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full z-2 p-5 scale-5"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
