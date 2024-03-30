import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import profilepic3 from "../../../assets/profilepic3.avif";
import AvionicsLogo from "../../../assets/AvionicsLogo.png";
const AvionicsTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Avionics
          <img src={AvionicsLogo} alt="AvionicsLogo" className="size-16" />
        </legend>

        <div className="lead-namebox">
          <NameSectionTeams
            img={profilepic3}
            name="Puranjot Singh Naga "
            field="Avionics Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
        </div>
        <div className="member-namebox">
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Avionics Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
          <NameSectionTeams
            img={profilepicdemo}
            name="Puranjot Singh Naga "
            field="Avionics Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
            email="puranjotsinghnaga@gmail.com"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default AvionicsTeam;
