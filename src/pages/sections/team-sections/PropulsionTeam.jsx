import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import PropulsionLogo from "../../../assets/PropulsionLogo.png";
import { members } from "../../../constants";
import LeadFilter from "../../../utils/lead-filter";
import MemberMapper from "../../../utils/MemberMapper";

const PropulsionTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Propulsion
          <img src={PropulsionLogo} alt="Propulsion Logo" className="size-16" />
        </legend>

        <div className="lead-namebox">
          <LeadFilter field="Propulsion" />
        </div>
        <div className="member-namebox">
          <MemberMapper field="Propulsion" />
        </div>
      </fieldset>
    </div>
  );
};

export default PropulsionTeam;
