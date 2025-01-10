import React from 'react'
import AllProducts from './components/sections/AllProducts'
import { Helmet } from "react-helmet-async";

function NosProduits() {
  return (
    <div className='container mx-auto flex flex-col gap-5 pt-24 min-h-[100vh]'>
      <Helmet>
        <title>Nos Lampes | Lumi Style</title>
        <meta name='description' content="Nous proposons des lampes de table élégantes et innovantes, conçues pour sublimer les hôtels et restaurants. Nos produits allient qualité supérieure et design unique pour créer des ambiances raffinées et mémorables. Que ce soit pour ajouter une touche de chaleur ou de sophistication, nous offrons des solutions d’éclairage qui allient esthétique et fonctionnalité."/>
        <meta name='keywords' content="lamps, stylish lamps, premium lighting, modern lamps, Lumi Style, home lighting, decorative lamps, buy lamps online" />
      </Helmet>
        <AllProducts  /> 
    </div>
  )
}

export default NosProduits