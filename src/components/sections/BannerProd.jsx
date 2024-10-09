import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollAnimation } from '../variants'; // Import the scroll animation function
import useScrollAnimation from '../UseScrollAnimation'; // Import the custom hook
import { Link } from 'react-router-dom';


function BannerProducts({data}) {
    const ref = useRef(null);
    const isVisible = useScrollAnimation(ref, { threshold: 0.2 }); 
  return (
    <motion.div  ref={ref}
    initial="hidden"
    animate={isVisible ? 'visible' : 'hidden'}
    variants={scrollAnimation()}
     className='my-animated-component container mx-auto flex flex-col gap-10 px-5 pt-8 pb-24'>
      <h1 className='text-4xl font-bold'>Latest Products</h1>
    {data.map((datta) =>(
        <div key={datta.id} className='flex md:flex-row flex-col-reverse items-center justify-center bg-white border-2  md:h-72 rounded-2xl    overflow-hidden '>
            <div className="md:w-2/3 h-full py-6 px-6 flex flex-col justify-center gap-4">
                <h2 className="text-base md:text-3xl font-bold text-black">{datta.title}</h2>
                <p className="mt-4 text-sm md:text-lg text-black ">{datta.description}</p>
                <Link to={`/produits/${datta.id}/${datta.title.toLowerCase().replace(/\s+/g, '-')}`} onClick={window.scrollTo(0, 0)}
                className='self-start bg-yellow-500 hover:bg-black hover:text-white  align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block  text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 '>Afficher Plus</Link>
            </div>
            <div className="md:w-1/3 h-auto">
              <img src={datta.featured_image} alt="Lumi Style" />
            </div>
        </div>
    ))}

    </motion.div>
  )
}

export default BannerProducts;