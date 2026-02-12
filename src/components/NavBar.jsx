import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm sticky top-0 z-50">
        {/* Logo Section */}
        <img 
        src="public/images/cea-logo-black.png"
        className='w-45 md:w-50'
        alt="cea-logo" />

        {/* Desktop Links - Hidden on Mobile */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 text-gray-700 font-medium text-sm">
          <li className="hover:text-blue-900 cursor-pointer">About</li>
          <li className="hover:text-blue-900 cursor-pointer">Academics</li>
          <li className="hover:text-blue-900 cursor-pointer">Admissions</li>
          <li className="hover:text-blue-900 cursor-pointer">Research</li>
          <li className="hover:text-blue-900 cursor-pointer">Campus</li>
        </ul>

        {/* Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile Menu Icon */}
          <button 
            className="lg:hidden p-2 text-blue-900"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-4 text-gray-700 font-medium text-sm">
          <li className="hover:text-blue-900 cursor-pointer py-2 border-b border-gray-100">About</li>
          <li className="hover:text-blue-900 cursor-pointer py-2 border-b border-gray-100">Academics</li>
          <li className="hover:text-blue-900 cursor-pointer py-2 border-b border-gray-100">Admissions</li>
          <li className="hover:text-blue-900 cursor-pointer py-2 border-b border-gray-100">Research</li>
          <li className="hover:text-blue-900 cursor-pointer py-2">Campus</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;