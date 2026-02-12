import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm sticky top-0 z-50">
        {/* Logo Section */}
        <a href="/">
        <img
          src="public/images/cea-logo-black.png"
          className='w-45 md:w-50'
          alt="cea-logo" />
          </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-col">
          {/* First Row */}
          <ul className="flex gap-6 xl:gap-8 text-gray-700 font-medium text-sm">
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('Administration')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-900">
                <span>Administration</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === 'Administration' && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="/board-of-governors">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Board of Governors</li>
                  </a>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Principal</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Office Administration</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Audit</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Service Rules</li>
                </ul>
              )}
            </li>
            <li className="hover:text-blue-900 cursor-pointer">Admissions</li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('Academics')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-900">
                <span>Academics</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === 'Academics' && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">College Committees</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Campus Rules</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IQAC</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">KTU Website</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">AICTE Website</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Result</li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('Departments')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-900">
                <span>Departments</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === 'Departments' && (
                <ul className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dept. of Mechanical Engineering</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dept. of Electrical and Electronics Engineering</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dept. of Electronics and Communication Engineering</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dept. of Computer Science Engineering</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dept. of Computer Science Engineering (Data Science)</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dept. of Applied Sciences</li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('Activities')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-900">
                <span>Activities</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === 'Activities' && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">NSS</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IEEE</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">ASME</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">SAE CEA</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Department Clubs</li>
                </ul>
              )}
            </li>
            <li className="hover:text-blue-900 cursor-pointer">Placement</li>
            <li className="hover:text-blue-900 cursor-pointer">PTA</li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('Institution')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-900">
                <span>Institution</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === 'Institution' && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Institution Structure</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Campus Layout</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">College Hostels</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">College Bus</li>
                </ul>
              )}
            </li>
          </ul>
          {/* Second Row */}
          <ul className="flex gap-6 xl:gap-8 text-gray-700 font-medium text-sm mt-4">
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('Downloads')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-900">
                <span>Downloads</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === 'Downloads' && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Students</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Staff</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Campus Rules</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Syllabus & Regulations</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Question Papers</li>
                </ul>
              )}
            </li>
            <li className="hover:text-blue-900 cursor-pointer">Library</li>
            <li className="hover:text-blue-900 cursor-pointer">Alumini</li>
            <li className="hover:text-blue-900 cursor-pointer">Grievance</li>
            <li className="hover:text-blue-900 cursor-pointer">Quotation / Tenders</li>
            <li className="hover:text-blue-900 cursor-pointer">Career</li>
            <li className="hover:text-blue-900 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            className="lg:hidden p-2 text-blue-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-4 text-gray-700 font-medium text-sm">
          {/* Mobile Administration */}
          <li className="py-2 border-b border-gray-100">
            <div className="flex items-center justify-between cursor-pointer hover:text-blue-900" onClick={() => toggleMobileDropdown('Administration')}>
              <span>Administration</span>
              <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === 'Administration' ? 'rotate-180' : ''}`} />
            </div>
            {openMobileDropdown === 'Administration' && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">Board of Governors</li>
                <li className="hover:text-blue-900 cursor-pointer">Principal</li>
                <li className="hover:text-blue-900 cursor-pointer">Office Administration</li>
                <li className="hover:text-blue-900 cursor-pointer">Audit</li>
                <li className="hover:text-blue-900 cursor-pointer">Service Rules</li>
              </ul>
            )}
          </li>
          {/* Mobile Academics */}
          <li className="py-2 border-b border-gray-100">
            <div className="flex items-center justify-between cursor-pointer hover:text-blue-900" onClick={() => toggleMobileDropdown('Academics')}>
              <span>Academics</span>
              <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === 'Academics' ? 'rotate-180' : ''}`} />
            </div>
            {openMobileDropdown === 'Academics' && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">College Committees</li>
                <li className="hover:text-blue-900 cursor-pointer">Campus Rules</li>
                <li className="hover:text-blue-900 cursor-pointer">IQAC</li>
                <li className="hover:text-blue-900 cursor-pointer">KTU Website</li>
                <li className="hover:text-blue-900 cursor-pointer">AICTE Website</li>
                <li className="hover:text-blue-900 cursor-pointer">Result</li>
              </ul>
            )}
          </li>
          {/* Mobile Departments */}
          <li className="py-2 border-b border-gray-100">
            <div className="flex items-center justify-between cursor-pointer hover:text-blue-900" onClick={() => toggleMobileDropdown('Departments')}>
              <span>Departments</span>
              <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === 'Departments' ? 'rotate-180' : ''}`} />
            </div>
            {openMobileDropdown === 'Departments' && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">Dept. of Mechanical Engineering</li>
                <li className="hover:text-blue-900 cursor-pointer">Dept. of Electrical and Electronics Engineering</li>
                <li className="hover:text-blue-900 cursor-pointer">Dept. of Electronics and Communication Engineering</li>
                <li className="hover:text-blue-900 cursor-pointer">Dept. of Computer Science Engineering</li>
                <li className="hover:text-blue-900 cursor-pointer">Dept. of Computer Science Engineering (Data Science)</li>
                <li className="hover:text-blue-900 cursor-pointer">Dept. of Applied Sciences</li>
              </ul>
            )}
          </li>
          {/* Mobile Activities */}
          <li className="py-2 border-b border-gray-100">
            <div className="flex items-center justify-between cursor-pointer hover:text-blue-900" onClick={() => toggleMobileDropdown('Activities')}>
              <span>Activities</span>
              <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === 'Activities' ? 'rotate-180' : ''}`} />
            </div>
            {openMobileDropdown === 'Activities' && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">NSS</li>
                <li className="hover:text-blue-900 cursor-pointer">IEEE</li>
                <li className="hover:text-blue-900 cursor-pointer">ASME</li>
                <li className="hover:text-blue-900 cursor-pointer">SAE CEA</li>
                <li className="hover:text-blue-900 cursor-pointer">Department Clubs</li>
              </ul>
            )}
          </li>
          {/* Mobile Institution */}
          <li className="py-2 border-b border-gray-100">
            <div className="flex items-center justify-between cursor-pointer hover:text-blue-900" onClick={() => toggleMobileDropdown('Institution')}>
              <span>Institution</span>
              <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === 'Institution' ? 'rotate-180' : ''}`} />
            </div>
            {openMobileDropdown === 'Institution' && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">Institution Structure</li>
                <li className="hover:text-blue-900 cursor-pointer">Campus Layout</li>
                <li className="hover:text-blue-900 cursor-pointer">College Hostels</li>
                <li className="hover:text-blue-900 cursor-pointer">College Bus</li>
              </ul>
            )}
          </li>
          <li className="hover:text-blue-900 cursor-pointer py-2 border-b border-gray-100">Admissions</li>
          <li className="hover:text-blue-900 cursor-pointer py-2 border-b border-gray-100">Research</li>
          <li className="hover:text-blue-900 cursor-pointer py-2 border-b border-gray-100">Campus</li>
          {/* Mobile Downloads */}
          <li className="py-2 border-b border-gray-100">
            <div className="flex items-center justify-between cursor-pointer hover:text-blue-900" onClick={() => toggleMobileDropdown('Downloads')}>
              <span>Downloads</span>
              <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === 'Downloads' ? 'rotate-180' : ''}`} />
            </div>
            {openMobileDropdown === 'Downloads' && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">Students</li>
                <li className="hover:text-blue-900 cursor-pointer">Staff</li>
                <li className="hover:text-blue-900 cursor-pointer">Campus Rules</li>
                <li className="hover:text-blue-900 cursor-pointer">Syllabus & Regulations</li>
                <li className="hover:text-blue-900 cursor-pointer">Question Papers</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
