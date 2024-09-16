import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-[#b8ff9f] py-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] z-50 transition-transform ${showNavbar ? 'transform-none' : '-translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Navbar Name */}
        <h1 className="text-2xl font-bold text-black">Manoj Adhikari</h1>

        {/* Navbar Links for Desktop */}
        <ul className="hidden md:flex md:space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#b8ff9f] py-4 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-base font-bold bg-[#fff59f] hover:bg-[#f7f500] text-black py-2 px-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
