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
              {collection.price}
          </p>
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
