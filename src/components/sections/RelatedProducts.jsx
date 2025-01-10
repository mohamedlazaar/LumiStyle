import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollAnimation } from '../variants';
import useScrollAnimation from '../UseScrollAnimation';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function RelatedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from Firestore
  async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ ...doc.data(), id: doc.id });
      });
      setFeaturedProducts(productsData);

      // Randomize and pick 4 products
      const sortProducts = productsData.sort(() => 0.5 - Math.random());
      setRandomProducts(sortProducts.slice(0, 4));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false); // Set loading to false after fetch is complete
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const ref = useRef(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={scrollAnimation()}
      className="container my-animated-component text-center mx-auto px-8 space-y-20 py-16"
    >
      {!isLoading && (
        <>
          <h1 className="text-2xl md:text-4xl font-bold mb-10">Produits connexes</h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1120: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="swiper-container "
          >
            {randomProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-[600px] mb-10">
                <div className="relative flex flex-col justify-between text-gray-700 bg-white shadow-md bg-clip-border rounded-xl h-[95%]">
                  <div className="relative mx-4 my-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-[60%]">
                    <img
                      src={product.Images[0]}
                      alt={product.Title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="px-3 h-[25%] flex flex-col justify-between items-center">
                    <p className="block text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                      {product.Title}
                    </p>
                    <p className="block text-base mb-3 antialiased font-normal leading-normal text-gray-700 opacity-75">
                      {product.Price} DH
                    </p>
                    <div className="flex justify-center items-center mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`w-6 h-6 ${
                              i < product.rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      <span className="ml-2 text-gray-600">
                        {product.Rating} ({product.reviewCount})
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-[15%] mx-auto ">
                    <Link
                      to={`/produits/${product.id}/${product.Title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-yellow-500 hover:bg-black hover:text-white align-middle select-none font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </motion.div>
  );
}

export default RelatedProducts;
