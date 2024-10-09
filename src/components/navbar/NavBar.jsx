import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from './logoWhite.png';

function NavBar() {
  useEffect(() => {
    const mobileBtn = document.querySelector('#mobile-btn');
    const mobileNav = document.querySelector('#mobile-menu');

    const handleClick = () => {
      mobileNav.classList.toggle('hidden');
    };

    const handleClickOutside = (event) => {
      // Check if the click is outside the mobile menu and mobile button
      if (mobileNav && !mobileNav.contains(event.target) && !mobileBtn.contains(event.target)) {
        if (!mobileNav.classList.contains('hidden')) {
          mobileNav.classList.add('hidden');
        }
      }
    };

    if (mobileBtn) {
      mobileBtn.addEventListener('click', handleClick);
    }

    // Add event listener for click outside to close mobile menu
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      if (mobileBtn) {
        mobileBtn.removeEventListener('click', handleClick);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // const handleHomeClick = (e) => {
  //   // Check if the current route is already "/"
  //   if (location.pathname === "/") {
  //     e.preventDefault(); // Prevent default Link behavior
  //     window.location.href = "/"; // Reload the page

  //   }
  // };

  return (
    <nav className="bg-yellow-500 pt-3">
      <div className="container mx-auto shadow-3xl px-4 rounded-full">
        <div className="flex justify-between items-center px-5 h-full">
          <div className="text-3xl font-bold">
            <Link to="/" >
              <img
                key={logoWhite.id}
                className="w-28 h-auto p-2 hover:scale-105 transition-transform duration-300 ease-in-out rounded-full"
                src={logoWhite}
                alt="Lumi Style"
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            <ul className="flex gap-6 text-lg font-medium font-sans sm:gap-4 sm:items-center">
              <li>
                <Link to="/"  className="hover:text-white transition-all">Accueil </Link>
              </li>
              <li>
                <Link to="/nos-produits" className="hover:text-white transition-all">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white transition-all">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="mobile-btn"
              className="w-7 cursor-pointer"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div
          id="mobile-menu"
          style={{ zIndex: '100' }}
          className="absolute flex hidden  overflow-hidden rounded-b-2xl shadow-2xl flex-col items-center  font-bold drop-shadow-lg border-gray-300 bg-gray-50 pb-8 left-6 right-6"
        >
          <Link to="/"  className="w-full h-full text-center hover:bg-black hover:text-white py-3">
            Accueil
          </Link>
          <Link to="/nos-produits" className="w-full h-full text-center hover:bg-black hover:text-white py-3">Nos Produits</Link>
          <Link to="/about-us" className="w-full h-full text-center hover:bg-black hover:text-white py-3">À Propos De Nous</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
