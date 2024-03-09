import React from "react";
import NameSectionTeams from "../components/NameSectionTeams";
import profilepicdemo from "../assets/profile-demo (1).jpeg";
const Team = () => {
  return (
    <div className="">
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
      <NameSectionTeams
        img={profilepicdemo}
        name="Puranjot Singh Naga "
        field="Avionics Lead"
        linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
        email="puranjotsinghnaga@gmail.com"
      />
    </div>
  );
};

export default Team;
