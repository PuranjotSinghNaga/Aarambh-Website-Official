import { useGLTF } from "@react-three/drei";
import React from "react";
import spaceScene from "../assets/3d/space.glb";

const Space = () => {
  const space = useGLTF(spaceScene);
  return (
    <mesh>
      <primitive object={space.scene} />
    </mesh>
  );
};

export default Space;
