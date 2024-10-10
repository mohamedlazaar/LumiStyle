import React from 'react'
import AllProducts from './components/sections/AllProducts'
import {featuredProductData} from './collectionData.js'

function NosProduits() {
  return (
    <div className='container mx-auto flex flex-col gap-5 pt-24 '>
        <h1 className='text-5xl font-extrabold '>Nos Produits</h1>
        <AllProducts data={featuredProductData} />
    </div>
  )
}

export default NosProduits