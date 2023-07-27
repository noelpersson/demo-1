import React from "react";
import { useGLTF } from "@react-three/drei";
import { fadeOnBeforeCompile } from "@/utils/fadeMaterials";

export function Cloud1({ opacity = 1, ...props }) {
  const { nodes, materials } = useGLTF("/models/clouds.glb") ;
  return (
    <group {...props} dispose={null}>
      <mesh castShadow={false} geometry={nodes.clouds.geometry}>
        <meshStandardMaterial
          envMapIntensity={2}
          onBeforeCompile={fadeOnBeforeCompile}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/clouds.glb");
