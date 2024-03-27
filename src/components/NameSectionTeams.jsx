import React from "react";
import LinkedinLogo from "../assets/linkedinLogo.svg";
const NameSectionTeams = (props) => {
  return (
    <div className="name-card">
      <img className="name-card-image" src={props.img} alt="" />
      <h2 className="name ">{props.name}</h2>
      <h3 className="field text-center">
        {props.field}
        <br />
        {props.email}
      </h3>
      <a href={props.linkedin}>
        <img className="" src={LinkedinLogo} alt="Linkedin" />
      </a>
    </div>
  );
};

export default NameSectionTeams;
