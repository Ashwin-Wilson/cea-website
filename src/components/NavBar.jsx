import React from 'react';

const Navbar = () => {
  return (
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
        <button className="hidden sm:block bg-yellow-400 text-blue-900 font-bold py-1.5 px-4 md:py-2 md:px-6 rounded text-xs md:text-sm">
          APPLY
        </button>
        <button className="bg-[#0a2342] text-white font-bold py-1.5 px-4 md:py-2 md:px-6 rounded text-xs md:text-sm">
          LOGIN
        </button>
        {/* Mobile Menu Icon */}
        <button className="lg:hidden p-2 text-blue-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;