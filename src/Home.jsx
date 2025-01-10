import React from 'react'
import Hero from './components/sections/Hero'
import FeaturedProduct from './components/sections/FeaturedProduct'
import CatalogProducts from './components/sections/CatalogProducts'
import BannerProducts from './components/sections/BannerProd'
import ClientsTestemonials from './components/sections/ClientsTestemonials';
import {Helmet} from "react-helmet-async"


function Home() {
  return (
    <div>
      <Helmet>
        <title>Lumi Style</title>
        <meta name='description' content="Nous proposons des lampes de table élégantes et innovantes, conçues pour sublimer les hôtels et restaurants. Nos produits allient qualité supérieure et design unique pour créer des ambiances raffinées et mémorables. Que ce soit pour ajouter une touche de chaleur ou de sophistication, nous offrons des solutions d’éclairage qui allient esthétique et fonctionnalité."/>
        <meta name='keywords' content="lamps, stylish lamps, premium lighting, modern lamps, Lumi Style, home lighting, decorative lamps, buy lamps online" />
      </Helmet>
      <Hero />
      <FeaturedProduct  />
      <CatalogProducts  />
      <BannerProducts  />
      <ClientsTestemonials />
     </div>
  )
}

export default Home