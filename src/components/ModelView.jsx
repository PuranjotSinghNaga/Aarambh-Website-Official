import { OrbitControls, ScrollControls } from "@react-three/drei";
import Rocket from "./Rocket";
import React from "react";
import Lights from "./Lights";

const ModelView = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Lights />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Rocket />
      </ScrollControls>
    </>
  );
};

export default ModelView;
