import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ProjectModel = ({ modelSrc, position, rotation, scale }) => {
  const { scene } = useGLTF(modelSrc);

  if (position) scene.position.set(...position);
  if (rotation) scene.rotation.set(...rotation);
  if (scale) scene.scale.set(...scale);

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default ProjectModel;
