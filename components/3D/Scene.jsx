"use client";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect }from "react";
import Experience from "./Experience";
import { ScrollControls, Stats , Html } from "@react-three/drei";
import Scrolldown from "./Scrolldown";

export default function Scene({}) {
  const xMobile = 0;
  const yMobile = -45;
  const zMobile = 0;
  
  const xTablet = 0; // Exempelvärde
  const yTablet = -45; // Exempelvärde
  const zTablet = 0; // Exempelvärde
  
  const xLargeScreen = 0; // Exempelvärde
  const yLargeScreen = -16;
  const zLargeScreen = 0;

  const xDesktop = 0; // Exempelvärde
  const yDesktop = -16;
  const zDesktop = 0;
  

  const [isMobile, setIsMobile] = useState(null);
  const [isTablet, setIsTablet] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsLargeScreen(width > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let position;
  if (isMobile) {
      position = [xMobile, yMobile, zMobile];
  } else if (isTablet) {
      position = [xTablet, yTablet, zTablet];
  } else if (isLargeScreen) {
      position = [xLargeScreen, yLargeScreen, zLargeScreen];
  } else {
      position = [xDesktop, yDesktop, zDesktop];
  }
  

  return (
    <>
      <Canvas dpr={1} shadows={"basic"}>
        <Html position={position} center>
          <Scrolldown />
        </Html>
        <ScrollControls pages={50} damping={0.5}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}
