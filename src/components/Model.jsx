import React, { Suspense } from "react";
import ModelView from "./ModelView";
import { Canvas } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Model = () => {
  useGSAP(() => {
    gsap.from(".gsapimg", {
      y: 30,
      duration: 2,
      opacity: 0,
    });
  }, []);
  return (
    <div className=" w-[100vw] h-[100vh] z-10 gsapimg">
      <Canvas>
        <Suspense>
          <ModelView />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model;
