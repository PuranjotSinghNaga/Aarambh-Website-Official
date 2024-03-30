import { Scroll } from "@react-three/drei";
import React from "react";
import Jumbotron from "../pages/sections/Jumbotron";
import RocketRecovery from "../pages/sections/RocketRecovery";
import RocketIntro from "../pages/sections/RocketIntro";
import RocketAvionics from "../pages/sections/RocketAvionics";
import RocketStructure from "../pages/sections/RocketStructure";
import RocketPropulsion from "../pages/sections/RocketPropulsion";
import RocketGCS from "../pages/sections/RocketGCS";
const Overlay = () => {
  return (
    <Scroll html>
      <Jumbotron />
      <RocketIntro />
      <RocketRecovery />
      <RocketAvionics />
      <RocketStructure />
      <RocketPropulsion />
      <RocketGCS />
    </Scroll>
  );
};

export default Overlay;
