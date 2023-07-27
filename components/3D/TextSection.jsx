import { fadeOnBeforeCompileFlat } from "@/utils/fadeMaterials";
import { Text } from "@react-three/drei";
import React from "react";

export const TextSection = ({ title, description = "", ...props }) => {
  return (
    <>
      {title && (
        <group {...props}>
          <Text
            color="white"
            fontSize={5}
            anchorX="left"
            anchorY="bottom"
            lineHeight={1}
            maxWidth={60}
          >
            {title}
            <meshStandardMaterial
              color={"white"}
              onBeforeCompile={fadeOnBeforeCompileFlat}
            />
          </Text>
          <Text
            color="white"
            fontSize={3}
            anchorY="top"
            anchorX="left"
            maxWidth={35}
          >
            {description}
            <meshStandardMaterial
              color={"white"}
              onBeforeCompile={fadeOnBeforeCompileFlat}
            />
          </Text>
        </group>
      )}
    </>
  );
};
