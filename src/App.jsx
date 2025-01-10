import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, MoveOut } from 'react-scroll-motion'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/navbar/Footer';
import Home from './Home'
import NosProduits from './NosProduits';
import AboutUs from './components/sections/AboutUs';
import ProductPage from './ProductPage';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react";
import LogIn from './admin/LogIn';
import { UserProvider } from './admin/UserContext';
import AddProducts from './admin/AddProducts';
import { HelmetProvider } from 'react-helmet-async';
 


function App() {

  return (
    <div className="font-poppins">
      <HelmetProvider>
      <UserProvider>
      <Router>
        <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/nos-produits' element={<NosProduits />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="/produits/:id/:title" element={<ProductPage />} />
        <Route path='/admin' element={<LogIn/>} />
        <Route path='/admin/Add-products' element={<AddProducts/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
      </Routes>
      <Footer /> 
      <Analytics />
    </Router>          
      </UserProvider>        
      </HelmetProvider>


    </div>
  );
}

export default App;
