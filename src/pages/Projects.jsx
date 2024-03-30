import React, { useState } from "react";
import { leftArrow, rightArrrow } from "../utils";
import { Canvas } from "@react-three/fiber";
import { projects } from "../constants";
import Lights from "../components/Lights";
import { OrbitControls } from "@react-three/drei";
import ProjectModel from "../components/ProjectModel";

const Projects = () => {
  const handleLeftClick = () => {
    setIndex((index + 1) % projects.length);
  };
  const handleRightClick = () => {
    setIndex((index - 1 + projects.length) % projects.length);
  };

  let [index, setIndex] = useState(0);
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="flex items-center justify-center">
        <h1 className="title-2">Our Projects</h1>
      </div>
      <div className="w-full h-full flex flex-row items-center justify-between">
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
              scale={[0.03, 0.03, 0.03]} // Example scale
            />
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
