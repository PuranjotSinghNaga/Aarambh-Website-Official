import { OrbitControls, ScrollControls } from "@react-three/drei";
import Rocket from "./Rocket";
import React from "react";
import Lights from "./Lights";
import Overlay from "./Overlay";

const ModelView = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Lights />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <ScrollControls pages={10} damping={0.25}>
        <Overlay />
        <Rocket />
      </ScrollControls>
    </>
  );
};

export default ModelView;
