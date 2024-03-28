import { Scroll } from "@react-three/drei";
import React from "react";

export const Section = () => {
  return (
    <section className="bg-white w-1/2 m-4 ">
      <div className="flex flex-col p-4 m-4 items-center justify-center  ">
        <h1 className="">Recovery</h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
    </section>
  );
};

const Overlay = () => {
  return (
    <Scroll html>
      <Section />
    </Scroll>
  );
};

export default Overlay;
