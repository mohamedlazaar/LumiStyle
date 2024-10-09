import React from 'react'
import { Link } from 'react-router-dom';
import logoWhite from './logoWhite.png'


function Footer() {
  return (
        <footer className="bg-black text-white text-center p-4 pt-10">
            <div className="container flex flex-col md:flex-row justify-center   md:justify-between md:px-10 pb-10">
             <div className="flex md:justify-center pb-10 items-center">
                <Link to="/"><img src={logoWhite} alt="Lumi Style"  className='w-28' style={{borderRadius: "100%"}} /></Link>
             </div>
             <div className="flex">
             <ul className='flex flex-col gap-6 text-sm font-medium items-start    sm:gap-4   '>
                <li><h2 className='underline text-xl'>Main Menu</h2></li>
                <li><Link to="/" className='hover:text-yellow-500 transition-all'>Home</Link></li>
                <li><Link to="/nos-produits" className='hover:text-yellow-500 transition-all'>Nos Produits</Link></li>
                <li><Link to="/about-us" className='hover:text-yellow-500 transition-all'>About</Link></li>
              </ul>
             </div>
             <div className="flex">
              <ul className='flex flex-col gap-6 text-sm font-medium items-start    sm:gap-4    '>
                <li><h2 className='underline text-xl'>Contactez-nous</h2></li>
                <li><p>WhatsApp <span className='italic font-extralight'>+212612345678</span></p></li>
                <li><p>Email <span className='italic font-extralight'>text@gmail.com</span></p></li>
              </ul>
             </div>
            </div>
            <div className="text-center text-sm text-gray-400 p-4 " style={{borderTop:'1px solid #fff'}}>
              <p>&copy; 2024 Lumi Style. All rights reserved. || Site realise par: <a href="https://www.linkedin.com/in/mohamed-lazaar/" className='decoration-none text-blue-500 hover:text-blue-800 transition-all ' target="_blank" rel="noopener noreferrer">
                Mohamed Lazaar
                </a></p>
              </div>

        </footer>
  )
}

export default Footer