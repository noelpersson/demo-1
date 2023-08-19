"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

function PageBanner() {
  
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Uppdatera animationens tillstånd baserat på skrollpositionen
    controls.start({
      y: -scrollY / 3, // Justera detta värde för att ändra hastigheten på förflyttningen
      opacity: 1 - scrollY / 1000 // Justera detta värde för att ändra hastigheten på opacitetsförändringen
    });
  }, [scrollY, controls]);

  return (
    <div className="page-banner bg-page-banner-1 flex items-end justify-start lg:h-[950px] h-[550px] bg-fixed bg-center bg-cover z-[-10] before:absolute before:bg-black before:opacity-40 before:w-full before:h-full">
          <div className="container">
            <motion.div
              className="banner-content pb-[80px] relative"
              animate={controls}
              > 
                  <span className="text-[18px] px-4 leading-[29px] text-white uppercase max-w-[225px] block">
                      Nordeeq
                  </span>
                  <h2 className="sm:text-[100px] px-4 text-[30px] sm:leading-[110px] text-white max-w-[320px]">
                      Om oss
                  </h2>
                </motion.div>
              </div>
          </div>
  );
}

export default PageBanner;
