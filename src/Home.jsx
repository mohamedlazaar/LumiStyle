import React from 'react'
import Hero from './components/sections/Hero'
import FeaturedProduct from './components/sections/FeaturedProduct'
import CatalogProducts from './components/sections/CatalogProducts'
import BannerProducts from './components/sections/BannerProd'
import { heroData, featuredProductData, catalogProductData, BannerProductData } from './data.js'
import ClientsTestemonials from './components/sections/ClientsTestemonials'


function Home() {
  return (
    <div>
      <Hero data={heroData} />
      <FeaturedProduct data={featuredProductData} />
      <CatalogProducts data={catalogProductData} />
      <BannerProducts data={BannerProductData} />
      <ClientsTestemonials />
     </div>
  )
}

export default Home