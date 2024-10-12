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
 const storeOwnerPhoneNumber = '+212664816791'; // Example format: '1234567890'
 const website_url = "https://www.lumi-style.com"

 // Construct the WhatsApp message URL
 const whatsappMessage = `https://wa.me/${storeOwnerPhoneNumber}?text=Hi, I'm interested in buying this product: *${product.title}* - ${product.price}. Here's the image of the product: ${product.featured_image}`;
 return (
    <div className="bg-white">
      <div className="container mx-auto  py-8">
        <div className="flex flex-wrap   mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 flex flex-col mx-auto">
            <img
              src={mainImage}
              alt="Product"
              className="w-full md:w-2/3 h-auto rounded-lg shadow-md mb-4 mx-auto"
              id="mainImage"
            />

            <div className="flex gap-4 py-4 justify-center flex-wrap ">
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
              <span className="text-2xl font-bold mr-2">{product.price}DH <span className='text-xl font-bold text-gray-400 line-through'>{product.compare_at_price}DH</span> <span className='font-extralight text-base text-gray-400 italic'>(prix négocié selon quantité)</span> </span>
              
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
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{product.colors.length === 0 ? "": <span>Colors:</span>}</h3>
              <div className="flex space-x-2">
              { product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}

              </div>
            </div>
            <div className="mb-4 flex flex-col">
              {product.description.map((desc, index)=>(
                <p key={index} className='mb-5'>{desc}</p>
              ))}
             
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
            <div className="flex flex-col mb-6">
              <h3 className="text-lg font-semibold mb-2">Partager le produit :</h3>
            <div className="flex space-x-4 mt-4">
                  {/* <!-- Facebook Share Button --> */}
                  {/* Facebook Share Button */}
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${website_url}/product/${id}`)}&picture=${encodeURIComponent(product.featured_image)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                    aria-label="Share on Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.879v-6.987h-2.54v-2.71h2.54v-2.071c0-2.507 1.492-3.89 3.778-3.89 1.096 0 2.238.195 2.238.195v2.465h-1.26c-1.244 0-1.63.772-1.63 1.562v1.839h2.773l-.443 2.71h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                  </a>

                  {/* Twitter Share Button */}
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${website_url}/product/${id}`)}&text=${encodeURIComponent(`Check out this amazing product: ${product.title} - only ${product.price}!`)}&image=${encodeURIComponent(product.featured_image)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                    aria-label="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M23.643 4.937c-.835.37-1.73.62-2.675.732a4.673 4.673 0 0 0 2.048-2.578 9.222 9.222 0 0 1-2.916 1.113 4.66 4.66 0 0 0-7.946 4.247 13.223 13.223 0 0 1-9.595-4.865 4.634 4.634 0 0 0-.63 2.345 4.658 4.658 0 0 0 2.071 3.878 4.606 4.606 0 0 1-2.113-.584v.06a4.656 4.656 0 0 0 3.733 4.565 4.684 4.684 0 0 1-2.105.08 4.662 4.662 0 0 0 4.348 3.234A9.352 9.352 0 0 1 0 19.539 13.164 13.164 0 0 0 7.162 21c8.804 0 13.622-7.294 13.622-13.622 0-.208-.004-.416-.014-.623a9.733 9.733 0 0 0 2.373-2.474l-.5-.344z" />
                    </svg>

                  </a>
                  {/* WhatsApp Share Button */}
                    <a href={`https://wa.me/?text=${encodeURIComponent(`Check out this amazing product: ${product.title} - only ${product.price}! ${website_url}/product/${id} \n${product.featured_image}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500"
                      aria-label="Share on WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.559 4.221 1.624 6.065l-1.07 3.89 4.01-1.046A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.833 17.053a1.05 1.05 0 0 1-1.006.572c-2.047-.095-3.665-1.113-5.091-2.617-1.426-1.504-2.42-3.23-2.842-5.164a1.062 1.062 0 0 1 .288-1.037 1.092 1.092 0 0 1 1.074-.258c.475.109.983.365 1.52.771a12.568 12.568 0 0 0 1.676 1.065c.49.21.796.376 1.21.502a1.034 1.034 0 0 1 .619.625 1.1 1.1 0 0 1-.197 1.078l-.416.41a.242.242 0 0 0-.026.027c.005.027.018.054.039.082.062.083.146.159.255.229.198.13.476.283.79.446.568.283.86.35 1.172.3a.545.545 0 0 0 .457-.492.53.53 0 0 0-.29-.5z" />
                        </svg>
                    </a>

                  {/* LinkedIn Share Button */}
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${website_url}/product/${id}`)}&image=${encodeURIComponent(product.featured_image)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700"
                    aria-label="Share on LinkedIn">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M19.994 3H4.007A1.007 1.007 0 0 0 3 4.006v15.988C3 20.551 3.448 21 4.007 21h15.987C20.552 21 21 20.552 21 19.994V4.007A1.007 1.007 0 0 0 19.994 3zM8.442 18.56H5.876V9.559h2.566v9.001zm-1.283-10.26a1.478 1.478 0 1 1 0-2.956 1.478 1.478 0 0 1 0 2.956zm11.399 10.26h-2.566v-4.73c0-1.128-.02-2.584-1.577-2.584-1.577 0-1.818 1.235-1.818 2.505v4.808h-2.566V9.559h2.465v1.226h.035c.343-.652 1.182-1.338 2.43-1.338 2.598 0 3.079 1.71 3.079 3.933v5.18z" />
                    </svg>
                  </a>

                  {/* Pinterest Share Button */}
                  <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`${website_url}/product/${id}`)}&media=${encodeURIComponent(product.featured_image)}&description=${encodeURIComponent(`Discover this amazing product: ${product.title} - only ${product.price}!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600"
                    aria-label="Share on Pinterest">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M12 0C5.372 0 0 5.372 0 12c0 4.847 3.057 8.952 7.365 10.406-.102-.886-.194-2.248.041-3.216.211-.875 1.356-5.575 1.356-5.575s-.347-.694-.347-1.717c0-1.606.931-2.808 2.09-2.808.986 0 1.462.739 1.462 1.622 0 .989-.63 2.464-.953 3.835-.272 1.156.578 2.1 1.717 2.1 2.064 0 3.654-2.173 3.654-5.304 0-2.775-1.995-4.717-4.851-4.717-3.305 0-5.231 2.472-5.231 5.027 0 .991.382 2.056.859 2.634.094.114.107.214.079.33-.086.353-.28 1.123-.318 1.279-.05.214-.163.258-.38.157-1.418-.622-2.3-2.576-2.3-4.158 0-3.379 2.455-6.49 7.086-6.49 3.712 0 6.598 2.646 6.598 6.167 0 3.691-2.32 6.663-5.553 6.663-1.083 0-2.102-.562-2.45-1.227l-.664 2.526c-.238.911-.885 2.054-1.32 2.748 1.001.31 2.056.479 3.154.479 6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                      </svg>
                  </a>

                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
