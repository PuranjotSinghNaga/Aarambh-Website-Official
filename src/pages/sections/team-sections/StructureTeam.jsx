import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import StructureLogo from "../../../assets/StructureLogo.png";
const StructureTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Structures
          <img src={StructureLogo} alt="Structure Logo" className="size-16" />
        </legend>

        <div className="lead-namebox">
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Structure Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
        </div>
        <div className="member-namebox">
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Structure Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Structure Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default StructureTeam;
