import { Scroll } from "@react-three/drei";
import React from "react";
import Jumbotron from "../pages/sections/Jumbotron";
import RocketRecovery from "../pages/sections/RocketRecovery";
import RocketIntro from "../pages/sections/RocketIntro";
import RocketAvionics from "../pages/sections/RocketAvionics";
import RocketStructure from "../pages/sections/RocketStructure";
import RocketPropulsion from "../pages/sections/RocketPropulsion";
import RocketSpaceSeparator from "../pages/sections/RocketSpaceSeparator";
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
      <RocketSpaceSeparator />
      <RocketGCS />
    </Scroll>
  );
};

export default Overlay;
