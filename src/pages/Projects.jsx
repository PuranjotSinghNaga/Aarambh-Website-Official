import React, { useState } from "react";
import { leftArrow, rightArrrow } from "../utils";
import { Canvas } from "@react-three/fiber";
import { projects } from "../constants";
import Lights from "../components/Lights";
import { Html, OrbitControls } from "@react-three/drei";
import ProjectModel from "../components/ProjectModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Projects = () => {
  useGSAP(() => {
    gsap.from(".gsaptext", {
      y: 30,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
  }, []);
  const handleLeftClick = () => {
    setIndex((index + 1) % projects.length);
  };
  const handleRightClick = () => {
    setIndex((index - 1 + projects.length) % projects.length);
  };

  let [index, setIndex] = useState(0);
  return (
    <div className="w-[100vw] h-[100vh] py-20">
      <div className="flex items-center justify-center">
        <h1 className="title-2 gsaptext">Our Projects</h1>
      </div>
      <div className="w-full h-full flex flex-row items-center justify-between gsaptext">
        <img
          src={leftArrow}
          alt="left"
          height={45}
          width={45}
          onClick={handleLeftClick}
        />
        <div className="w-full h-full">
          <Canvas>
            <ambientLight intensity={1} />
            <Lights />
            <OrbitControls enablePan={false} enableZoom={false} />
            <ProjectModel
              modelSrc={projects[index].modelSrc}
              position={[0, -2, 0]} // Example position
              rotation={[0, 0, 0]} // Example rotation
              scale={projects[index].scale} // Example scale
            />
            <Html fullscreen castShadow>
              {" "}
              <div className="text-white w-1/3 flex flex-col items-center justify-center ">
                <h1 className="title-3-yellow text-shadow-black ">
                  {projects[index].name}
                </h1>
                <p className="text-gray-200 font-semibold text-center ">
                  {projects[index].description}
                </p>
              </div>
            </Html>
          </Canvas>
        </div>
        <img
          src={rightArrrow}
          alt="right"
          height={45}
          width={45}
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
};

export default Projects;
