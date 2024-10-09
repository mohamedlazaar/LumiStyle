import React from 'react'
import { collectionData } from './collectionData.js';
import ProductDetails from './components/sections/productDetails.jsx';
import FeaturedProduct from './components/sections/FeaturedProduct';
import {featuredProductData} from './data.js'


function ProductPage() {
  return (
    <>
    <ProductDetails  data={collectionData}/>
    <FeaturedProduct data={featuredProductData} />
    hello
    </>
  )
}

export default ProductPage