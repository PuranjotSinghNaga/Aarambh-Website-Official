import React from "react";
import ModelView from "./ModelView";
import { Canvas } from "@react-three/fiber";
const Model = () => {
  return (
    <div className=" w-[100vw] h-[100vh] z-10">
      <Canvas>
        <ModelView />
      </Canvas>
    </div>
  );
};

export default Model;
