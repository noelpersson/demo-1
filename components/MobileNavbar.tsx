'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-5%' },
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`flex items-center w-full z-100 bg-white  left-0`}>
      <div className="container">
        <div className="relative flex items-center justify-between mx-4">
          <div className="max-w-full px-7 w-60">
            <a href="/#" className="block w-full py-5">
              <img
                src="1"
                alt="logo"
                className="w-full"
              />
            </a>
          </div>
          <button
            className={`relative group ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isOpen ? 'rotate-[42deg]' : ''
                  }`}
                ></div>
                <div
                  className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                    isOpen ? '-translate-x-10' : ''
                  }`}
                ></div>
                <div
                  className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isOpen ? '-rotate-[42deg]' : ''
                  }`}
                ></div>
              </div>
            </div>
          </button>
          <motion.nav
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            id="navbarCollapse"
            className={`position: absolute right-4 z-1000 top-full w-full max-w-[290px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
              !isOpen && 'hidden'
            } `}
          >
            <div className="mt-0 grid grid-cols-1 gap-0">
              <div className="relative group ">
                <Link
                  href="/"
                  className="text-black tracking-wider font-medium hover:text-yellow-400 cursor-pointer transition duration-500"
                >
                  Home
                </Link>
              </div>
              <div className="relative group ">
                <Link
                  href="/about"
                  className="text-black tracking-wider font-medium hover:text-yellow-400 cursor-pointer transition duration-500"
                >
                  About us
                </Link>
              </div>
              <div>
                <p className=" tracking-wider text-gray-500 font-bold ">SEO</p>
                <ul className="mt-0 text-[15px]">
                  
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      On page SEO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      Off page SEO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      Teknisk SEO
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-bold ">
                  Webbutveckling
                </p>
                <ul className="mt-0 text-[15px]">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      WordPress
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      Hosting & underhåll
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-bold">
                  Marknadsföring
                </p>
                <ul className="mt-0 text-[15px]">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      Meta
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                    >
                      Google Ads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


