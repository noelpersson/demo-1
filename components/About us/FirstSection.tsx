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
      y: -scrollY / 4, // Justera detta värde för att ändra hastigheten på förflyttningen
      opacity: 1 - scrollY / 1000 // Justera detta värde för att ändra hastigheten på opacitetsförändringen
    });
  }, [scrollY, controls]);

  return (
  <div className="relative z-[-10] bg-black h-[600px]">
    <div className="container">
      <motion.div className="banner-content sm:pt-76  xs:pt-86 relative z-10" animate={controls}>
        <span className="text-[25px] px-8 leading-[29px] text-white uppercase max-w-[225px] block">
          Nordeeq
        </span>
        <h2 className=" xs:text-[73px] sm:text-[120px] px-8 text-[60px] sm:leading-[110px] text-white max-w-[320px]">
          Om oss
        </h2>
      </motion.div>
    </div>
  </div>

  );
}

export default PageBanner;
