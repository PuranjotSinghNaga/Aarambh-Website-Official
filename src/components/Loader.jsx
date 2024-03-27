import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
        <div className="text-5xl text-white">Loading ...</div>
      </div>
    </Html>
  );
};

export default Loader;
