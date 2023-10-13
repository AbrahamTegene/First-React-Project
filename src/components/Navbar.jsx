/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
//react icon
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [ismenopen, setIsMenuopen] = useState(false);
  const [issticky, setIsSticky] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsMenuopen(!ismenopen);
  };

  useEffect(() => {
    const handescroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handescroll);

    return () => {
      window.removeEventListener('scroll', handescroll);
    };
  }, []);

  // navitems array
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'About', path: 'about' },
    { link: 'Product', path: 'product' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'FAQ', path: 'faq' },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${issticky ? "sticky top-0 left-0 right-0  border-b bg-white duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">BUSINESS</span>
          </a>

          {/* nav item for large devices  */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} spy={true} smooth={true} offset={-100} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* btn for large devices  */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900">
              LogIn
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey">
              Sign Up
            </button>
          </div>

           {/* menu btn for only mobile devices  */}
            <div className="md:hidden">
                <button 
                onClick={toggleMenu}
                className="text-neutralDGrey focus:outline-none focus:text-gray-500">
                  {
                    ismenopen ? (<FaXmark className='h-6 w-6'/>) 
                    : (<FaBars className='h-6 w-6 '/>)
                  }

                </button>
        </div>
        </div>

        {/*nav items for mobilr devices*/}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ ismenopen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
          <ul>{navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} spy={true} smooth={true} offset={-100} className="block cursor-pointer text-base text-white hover:text-brandPrimary first:font-medium ">
                  {link}
                </Link>
              </li>
            ))}
            </ul>

        </div>
      </nav>


    </header>
  );
};

export default Navbar;



