import React from 'react'
import AllProducts from './components/sections/AllProducts'
import {collectionData} from './collectionData'

function NosProduits() {
  return (
    <div className='container mx-auto flex flex-col gap-5 pt-24 '>
        <h1 className='text-5xl font-extrabold '>Nos Produits</h1>
        <AllProducts data={collectionData} /> 
    </div>
  )
}

export default NosProduits