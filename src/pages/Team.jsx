import React from "react";
import AvionicsTeam from "./sections/team-sections/AvionicsTeam";
import GCSTeam from "./sections/team-sections/GCSTeam";
import RecoveryTeam from "./sections/team-sections/RecoveryTeam";
import PropulsionTeam from "./sections/team-sections/PropulsionTeam";
import StructureTeam from "./sections/team-sections/StructureTeam";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Team = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".gsapimg", {
      y: 20,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div>
      <AvionicsTeam />
      <GCSTeam />
      <RecoveryTeam />
      <PropulsionTeam />
      <StructureTeam />
    </div>
  );
};

export default Team;
