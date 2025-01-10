import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';

function NavBar() {
  const location = useLocation();

  useEffect(() => {
    const mobileBtn = document.querySelector('#mobile-btn');
    const mobileNav = document.querySelector('#mobile-menu');

    const handleClick = () => {
      mobileNav.classList.toggle('hidden');
    };

    const handleClickOutside = (event) => {
      if (mobileNav && !mobileNav.contains(event.target) && !mobileBtn.contains(event.target)) {
        if (!mobileNav.classList.contains('hidden')) {
          mobileNav.classList.add('hidden');
        }
      }
    };

    if (mobileBtn) {
      mobileBtn.addEventListener('click', handleClick);
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      if (mobileBtn) {
        mobileBtn.removeEventListener('click', handleClick);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-yellow-500 pt-3">
      <div className="container mx-auto shadow-3xl px-4 rounded-full">
        <div className="flex justify-between items-center px-5 h-full">
          <div className="text-3xl font-bold">
            <Link to="/">
              <img
                className="w-28 h-auto p-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                src={logo}
                alt="Lumi Style"
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            <ul className="flex gap-6 text-lg font-medium font-sans sm:gap-4 sm:items-center">
              <li>
                <Link
                  to="/"
                  className={`relative text-slate-900 text-[20px] pb-2 hover:text-white after:absolute after:bottom-0 after:left-0 after:bg-slate-900 after:h-[2px] after:w-0 after:transition-all after:duration-300 ${
                    isActive('/') ? 'after:w-full ' : 'hover:after:w-full'
                  }`}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-produits"
                  className={`relative text-slate-900 text-[20px] pb-2 hover:text-white after:absolute after:bottom-0 after:left-0 after:bg-slate-900 after:h-[2px] after:w-0 after:transition-all after:duration-300 ${
                    isActive('/nos-produits') ? 'after:w-full ' : 'hover:after:w-full'
                  }`}
                >
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`relative text-slate-900 text-[20px] pb-2 hover:text-white after:absolute after:bottom-0 after:left-0 after:bg-slate-900 after:h-[2px] after:w-0 after:transition-all after:duration-300 ${
                    isActive('/about-us') ? 'after:w-full ' : 'hover:after:w-full'
                  }`}
                >
                  À Propos
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
              <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32-14.3 32 32z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div
          id="mobile-menu"
          style={{ zIndex: '100' }}
          className="absolute flex hidden overflow-hidden rounded-b-2xl shadow-2xl flex-col items-center font-bold drop-shadow-lg border-gray-300 bg-gray-50 pb-8 left-6 right-6"
        >
          <Link
            to="/"
            className={`w-full h-full text-center hover:bg-black hover:text-white py-3 ${
              isActive('/') ? 'bg-black text-white' : ''
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/nos-produits"
            className={`w-full h-full text-center hover:bg-black hover:text-white py-3 ${
              isActive('/nos-produits') ? 'bg-black text-white' : ''
            }`}
          >
            Nos Produits
          </Link>
          <Link
            to="/about-us"
            className={`w-full h-full text-center hover:bg-black hover:text-white py-3 ${
              isActive('/about-us') ? 'bg-black text-white' : ''
            }`}
          >
            À Propos De Nous
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
