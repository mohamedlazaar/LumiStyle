import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function BannerProducts() {
  const [bannerProducts, setBannerProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  // Fetch products from Firestore
  async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, 'section3'));
      const bannerProductsData = [];
      querySnapshot.forEach((doc) => {
        bannerProductsData.push({ ...doc.data()});
      });
      setBannerProducts(bannerProductsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false); // Set loading to false after fetch is complete
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto flex flex-col gap-10 px-16 pt-8 pb-24">
      {!isLoading && ( // Only show title and products after loading is complete
        <>
          <h1 className="text-2xl md:text-4xl font-bold">Derniers produits</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {bannerProducts.map((datta) => (
              <div
                key={datta.id}
                className="flex md:flex-row flex-col-reverse items-start md:items-center justify-center bg-white border-2 md:h-72 rounded-2xl overflow-hidden"
              >
                <div className="md:w-2/3 h-full py-6 px-6 flex flex-col justify-center items-start gap-4">
                  <h2 className="text-base md:text-xl font-bold text-black">{datta.Title}</h2>
                  <p className="text-sm md:text-2xl font-bold text-black">{datta.Price} DH</p>
                  <div className="flex items-center mb-4">
                    {/* Rating stars */}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`w-6 h-6 ${
                            i < datta.Rating ? 'text-yellow-500' : 'text-gray-300'
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
                      {datta.Rating} ({datta.reviewsCount})
                    </span>
                  </div>
                  <Link
                    to={`/produits/${datta.id}/${datta.Title.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="self-start bg-yellow-500 hover:bg-black hover:text-white align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Afficher Plus
                  </Link>
                </div>
                <div className="md:w-1/3 h-auto">
                  <img src={datta.Images} alt={datta.Title} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BannerProducts;
