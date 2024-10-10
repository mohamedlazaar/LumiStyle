import React from 'react'
import { Link } from 'react-router-dom';

function AllProducts({ data }) {
  return (
    <div className='pb-5'>
      <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto p-5 gap-2 justify-center ">
        {data.map((collection, index) => (
      <div key={index} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
          <img
              src={collection.featured_image}
              alt={collection.title} className="object-cover w-full h-full" />
      </div>
      <div className="py-6 px-3">
          <div className="flex items-center justify-center mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                  {collection.title}
              </p>
              {/* <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {product.price}
              </p> */}
          </div>
          <p className="block font-sans text-base antialiased font-normal  leading-normal text-gray-700 opacity-75 text-center">
              {collection.price} DH
          </p>
          <div className="flex justify-center items-center my-2">
              {/* Rating stars */}
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 ${i < collection.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">{collection.rating} </span>
            </div>
      </div>
      <div className="pb-5 pt-0 mx-auto">
          <Link to={`/produits/${collection.id}/${collection.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-yellow-500 hover:bg-black hover:text-white  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block  text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
              More Details
          </Link>
      </div>
  </div>
   
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
