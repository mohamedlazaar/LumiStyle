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


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/nos-produits' element={<NosProduits />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="/produits/:id/:title" element={<ProductPage />} />

      </Routes>
      <Footer /> 
    </Router>  
    </div>
  );
}

export default App;
