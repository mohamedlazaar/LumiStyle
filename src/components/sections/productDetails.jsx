import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPinterest, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { Helmet } from 'react-helmet-async';
import { color } from 'framer-motion';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct(productData);

          if (Array.isArray(productData.Images) && productData.Images.length > 0) {
            setMainImage(productData.Images[0]); // Safely set the main image
          }
        } else {
          console.error('No such product!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="w-[100vw] h-[100vh] flex justify-center items-center">Loading...</div>;
  }

  const handleImageChange = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const storeOwnerPhoneNumber = '+212664816791';
  const website_url = "https://www.lumi-style.com";
  const productUrl = `${website_url}/produits/${id}/${product.Title || 'product'}`;
  const whatsappMessage = `https://wa.me/${storeOwnerPhoneNumber}?text=Hi, I'm interested in buying this product: *${product.Title || 'Product'}* - ${product.Price || 'Price not available'}. Here's the image of the product: ${mainImage}`;

  return (
    <div className="bg-white">
      <Helmet>
        <title>{product.Title} | Lumi Style</title>
        <meta name="description" content={product.Description} />
        <meta name="keywords" content="lamps, stylish lamps, premium lighting, modern lamps, Lumi Style, home lighting, decorative lamps, buy lamps online" />
      </Helmet>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 flex flex-col mx-auto">
            <img
              src={mainImage || '/placeholder-image.jpg'}
              alt={product.Title || 'Product'}
              className="w-full md:w-2/3 h-auto rounded-lg shadow-md mb-4 mx-auto"
            />
            <div className="flex gap-4 py-4 justify-center flex-wrap">
              {product.Images &&
                product.Images
                  .filter((image) => image !== '') // Exclude empty image sources
                  .map((image, index) => (
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
            <h2 className="text-3xl font-bold mb-2">{product.Title || 'No Title'}</h2>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                {product.Price ? `${product.Price}.00 DH` : 'Price not available'}
                {product.Compare_Price && (
                  <span className="text-xl font-bold text-gray-400 line-through ml-2">
                    {product.Compare_Price}.00 DH
                  </span>
                )}
                <span className="font-extralight text-base text-gray-400 italic ml-2">
                  (prix négocié selon quantité)
                </span>
              </span>
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
                    className={`w-6 h-6 ${i < (product.rating || 0) ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">
                {product.rating || 0} ({product.reviewCount || 0} reviews)
              </span>
            </div>

            {/* Color options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {product.Colors && product.Colors.length > 0 ? 'Colors:' : ''}
              </h3>
              <div className="flex space-x-2">
                {product.Colors &&
                  product.Colors.map((color, index) => {
                    let colorHex;
                    if (color === 'gold') {
                      colorHex = '#FFD700';
                    } else if (color === 'silver') {
                      colorHex = '#C0C0C0';
                    } else if (color === 'bronze') {
                      colorHex = '#CE8946';
                    } else {
                      colorHex = color; // Use the color as it is if it's not gold, silver, or bronze
                    }

                    return (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{ backgroundColor: colorHex }}
                      ></div>
                    );
                  })}
              </div>
            </div>


            {/* Description */}
            <div className="mb-4 flex flex-col">
              {product.Description &&
                product.Description.split(/(?=\d-\s)/).map((part, index) => (
                  <p key={index} >
                    {part.trim()}
                    <br />
                    <br />
                  </p>
                ))}
            </div>

            {/* WhatsApp Button */}
            <div className="flex space-x-4 mb-6">
              <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                <FaWhatsapp className="w-6 h-6" />
                Acheter Maintenant
              </a>
            </div>

            {/* Share Options */}
            <div className="flex flex-col mb-6">
              <h3 className="text-lg font-semibold mb-2">Partager le produit :</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`}
                  target="_blank"
                  className="hover:text-blue-600"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}`}
                  target="_blank"
                  className="hover:text-blue-400"
                  aria-label="Share on Twitter"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(productUrl)}`}
                  target="_blank"
                  className="hover:text-green-500"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />
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
