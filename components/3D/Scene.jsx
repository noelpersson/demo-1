"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import { ScrollControls, Stats } from "@react-three/drei";

export default function Scene({}) {
  return (
    <>
      <Canvas dpr={1} shadows={"basic"}>
        <ScrollControls pages={50} damping={0.5}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}
