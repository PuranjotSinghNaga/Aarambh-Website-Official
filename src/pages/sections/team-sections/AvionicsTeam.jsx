import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import profilepic3 from "../../../assets/profilepic3.avif";
import AvionicsLogo from "../../../assets/AvionicsLogo.png";
import { members } from "../../../constants";
import LeadFilter from "../../../utils/lead-filter";
import MemberMapper from "../../../utils/MemberMapper";
const AvionicsTeam = (props) => {
  return (
    <div className="namebox">
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Avionics
          <img src={AvionicsLogo} alt="AvionicsLogo" className="size-16" />
        </legend>
        <div className="lead-namebox">
          <LeadFilter field="Avionics" />
        </div>
        <div className="member-namebox">
          <MemberMapper field="Avionics" />
        </div>
      </fieldset>
    </div>
  );
};

export default AvionicsTeam;
