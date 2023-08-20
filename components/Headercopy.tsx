
import React from 'react';
import Link from 'next/link';

const App: React.FC = () => {
  return (
    <div className="bg-white-300/50  backdrop-blur-sm transition-all duration-300 z-50 relative">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <a href="/" className="font-bold text-white text-xl">Pipe</a>
        <nav>
          <ul className="flex items-center justify-center font-semibold">
            <li className="relative group px-3 py-2">
              <Link href="/" 
                className="text-black hover:text-yellow-400 cursor-pointer transition duration-500"
                >
                Hem
              </Link>
            </li>
            <li className="relative group px-3 py-2">
              <Link href="/about" 
                className="text-black hover:text-yellow-400 cursor-pointer transition duration-500"
                >
                Om oss 
              </Link>
            </li>
            <li className="relative group px-3 py-2">
              <button className="hover:text-yellow-400 cursor-default">Tjänster</button>
              <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-50 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-50">
                    <div className="mt-6 grid grid-cols-3 gap-6">
                      <div>
                      <Link href="/seo"  
                        className="uppercase tracking-wider text-gray-500 hover:text-secondary transition duration-500 font-medium text-[16px]"
                      >
                        SEO
                      </Link>
                        <ul className="mt-3 text-[15px]">
                          <Link href="seo/onpageseo"
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                          >
                              On page SEO
                          </Link>
                          <Link href="/seo/offpageseo" 
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                            >
                              Off page SEO
                          </Link>
                          <Link href="/seo/tekniskseo" 
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                            >
                              Teknisk SEO
                          </Link>
                        </ul>
                      </div>
                      <div>
                        <Link href="/webbutveckling"
                          className="uppercase tracking-wider text-gray-500 hover:text-secondary transition duration-500 font-medium text-[16px]"
                        >
                          Webbutveckling
                        </Link>
                        <ul className="mt-3 text-[15px]">
                          <Link href="/webbutveckling/wordpress"
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                          >
                            Wordpress
                          </Link>
                          <Link href="/webbutveckling/react"
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                          >
                              React
                          </Link>
                          <Link href="/webbutveckling/hostingunderhall"
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                          >
                            Hosting & underhåll
                          </Link>
                        </ul>
                      </div>
                      <div>
                        <Link href="/marknadsforing" 
                          className="uppercase tracking-wider text-gray-500 hover:text-secondary transition duration-500font-medium text-[16px]"
                          >
                            Marknadsföring
                        </Link>
                        <ul className="mt-3 text-[15px]">
                          <Link href="/marknadsforing/meta" 
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                          >
                            Meta
                          </Link>
                          <Link href="/marknadsforing/googleads" 
                            className="text-gray-600 hover:text-secondary transition duration-500 py-1 block font-normal"
                            >                            
                            Google Ads
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group px-3 py-2">
              <Link href="/" className="text-black hover:text-yellow-400 cursor-pointer transition duration-500">Blogg</Link>
            </li>
            <li className="relative group px-3 py-2">
              <Link href="/contact" className="text-black hover:text-yellow-400 cursor-pointer transition duration-500">Kontakta oss</Link>
            </li>
          </ul>
        </nav>
        <nav>
            <ul>
              <li>
                <a href="contact" className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group">
                  <span className="mr-2">Kontakta oss</span>
                  <svg className="stroke-current" width="10" height="10" strokeWidth="2" viewBox="0 0 10 10" aria-hidden="true">
                    <g fillRule="evenodd">
                      <path className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
                      <path className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200" d="M1 1l4 4-4 4"></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
  );
};

export default App;
