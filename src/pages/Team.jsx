import React from "react";
import AvionicsTeam from "./sections/team-sections/AvionicsTeam";
import GCSTeam from "./sections/team-sections/GCSTeam";
import RecoveryTeam from "./sections/team-sections/RecoveryTeam";
import PropulsionTeam from "./sections/team-sections/PropulsionTeam";
import StructureTeam from "./sections/team-sections/StructureTeam";
const Team = () => {
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
