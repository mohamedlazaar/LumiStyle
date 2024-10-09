import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ data }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const selectedProduct = data.find((product) => product.id === parseInt(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
      if (Array.isArray(selectedProduct.images) && selectedProduct.images.length > 0) {
        setMainImage(selectedProduct.images[0]); // Safely set the main image
      }
    }
  }, [id, data]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleImageChange = (imageSrc) => {
    setMainImage(imageSrc);
  };
 // Store owner's phone number (replace this with the actual phone number)
 const storeOwnerPhoneNumber = '1234567890'; // Example format: '1234567890'

 // Construct the WhatsApp message URL
 const whatsappMessage = `https://wa.me/${storeOwnerPhoneNumber}?text=Hi, I'm interested in buying this product: *${product.title}* - ${product.description}.`;
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto  py-8">
        <div className="flex flex-wrap mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 flex flex-col justify-center mx-auto">
            <img
              src={mainImage}
              alt="Product"
              className="w-full md:w-2/3 h-auto rounded-lg shadow-md mb-4 mx-auto"
              id="mainImage"
            />

            <div className="flex gap-4 py-4 justify-center ">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index}`}
                  onClick={() => handleImageChange(image)}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
            </div>

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
                    className={`w-6 h-6 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>

           {/* Color options */}
            {/* <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div> */}
            <div className="mb-4">
              <p className="text-gray-700 mb-6">{product.description}</p> 
            </div>
           

            {/* Add to Cart button */}
            <div className="flex space-x-4 mb-6">
            <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-auto'><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                  Acheter Maintenant
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
