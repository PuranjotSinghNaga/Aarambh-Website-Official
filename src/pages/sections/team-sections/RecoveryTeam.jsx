import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import RecoveryLogo from "../../../assets/RecoveryLogo.png";
const RecoveryTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Recovery
          <img src={RecoveryLogo} alt="AvionicsLogo" className="size-16" />
        </legend>

        <div className="lead-namebox">
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Recovery Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
        </div>
        <div className="member-namebox">
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Recovery Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Recovery Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default RecoveryTeam;
