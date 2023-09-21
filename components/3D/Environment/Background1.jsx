"use client";
import * as THREE from "three";
import { Environment, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { LayerMaterial, Gradient } from "lamina";
import React, { useRef } from "react";

export default function Background({
  backgroundColors = { colorA: "#30A2FF", colorB: "#C9E8F5" },
}) {
  const GradientEnvRef = useRef(null);
  const GradientRef = useRef(null);
  const start = 0.2;
  const end = -0.5;

  useFrame(() => {
    GradientEnvRef.current.colorA = new THREE.Color(backgroundColors.colorA);
    GradientEnvRef.current.colorB = new THREE.Color(backgroundColors.colorB);

    GradientRef.current.colorA = new THREE.Color(backgroundColors.colorA);
    GradientRef.current.colorB = new THREE.Color(backgroundColors.colorB);
  });
  return (
    <>
      <Sphere
        scale={[400, 400, 400]}
        rotation-y={Math.PI / 2}
        rotation-x={Math.PI / 1}
      >
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
          <Gradient ref={GradientEnvRef} axes="y" start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={64} background frames={Infinity}>
        <Sphere scale={[400, 400, 400]} rotation-y={Math.PI / 2}>
          <LayerMaterial side={THREE.BackSide} color={"#ffffff"}>
            <Gradient ref={GradientRef} axes="y" start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
}
