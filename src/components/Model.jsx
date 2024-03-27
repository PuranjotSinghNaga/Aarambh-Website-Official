import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
const Model = () => {
  const cameraControl = useRef();
  const rocket = useRef(new THREE.Group());
  const [rocketRotation, setRocketRotation] = useState(0);

  return (
    <div className="w-[100vw] h-[100vh]">
      <ModelView
        index={1}
        groupRef={rocket}
        gsapType="view"
        controlRef={cameraControl}
        setRotationState={setRocketRotation}
      />
      <Canvas
        className="w-full h-full"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        eventSource={document.getElementById("root")}
      >
        <View.Port />
      </Canvas>
    </div>
  );
};

export default Model;
