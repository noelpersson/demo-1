'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  open: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  closed: { 
    opacity: 0, 
    y: '-40%',
    transition: { duration: 0.2 }
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center w-full bg-white">
      <div className="flex items-center justify-between mx-4 w-full">
        <div className="relative flex items-center max-w-full">
          <a href="/" className="block w-full py-5">
            <span className="font-bold text-black text-xl">Demo1</span>
          </a>
        </div>
        <button
          className={`group ${isOpen ? 'active' : ''} z-50`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-400 origin-center overflow-hidden">
              <div
                className={`bg-black h-[2px] w-7 transform transition-all ease-in-out duration-400 origin-left ${
                  isOpen ? 'rotate-[42deg]' : ''
                }`}
              ></div>
              <div
                className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-500 ${
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
      </div>
      <motion.nav
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        id="navbarCollapse"
        className={`fixed right-0 top-0 z-40 w-full max-w-[290px] h-full overflow-y-auto bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
          !isOpen && 'hidden'
        }`}
      >
        <div className="mt-10 lg:mt-0 grid grid-cols-1 gap-0">
          <div className="relative group">
            <Link
              href="/"
              className="text-black tracking-wider font-medium hover:text-yellow-400 cursor-pointer transition duration-500"
            >
              Hem
            </Link>
          </div>
          <div className="relative group">
            <Link
              href="/about"
              className="text-black tracking-wider font-medium hover:text-yellow-400 cursor-pointer transition duration-500"
            >
              Om oss
            </Link>
          </div>
          <div className="relative group">
            <Link
              href="/contact"
              className="text-black tracking-wider font-medium hover:text-yellow-400 cursor-pointer transition duration-500"
            >
              Kontakta oss
            </Link>
          </div>
          <div>
            <Link
              href="/seo"
              className="uppercase tracking-wider text-gray-500 hover:text-secondary transition duration-500 font-bold"
            >
              SEO
            </Link>
            <ul className="mt-0 text-[15px]">
              <li>
                <Link
                  href="/seo/onpageseo"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  On page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/seo/offpageseo"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  Off page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/seo/tekniskseo"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  Teknisk SEO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link
              href="/webbutveckling"
              className="uppercase tracking-wider text-gray-500 hover:text-secondary transition duration-500 font-bold"
            >
              Webbutveckling
            </Link>
            <ul className="mt-0 text-[15px]">
              <li>
                <Link
                  href="/webbutveckling/wordpress"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  WordPress
                </Link>
              </li>
              <li>
                <Link
                  href="/webbutveckling/react"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  href="/webbutveckling/hostingunderhall"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  Hosting & underhåll
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link
              href="/marknadsforing"
              className="uppercase tracking-wider text-gray-500 hover:text-secondary transition duration-500 font-bold"
            >
              Marknadsföring
            </Link>
            <ul className="mt-0 text-[15px]">
              <li>
                <Link
                  href="/marknadsforing/meta"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  Meta
                </Link>
              </li>
              <li>
                <Link
                  href="/marknadsforing/googleads"
                  className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                >
                  Google Ads
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;