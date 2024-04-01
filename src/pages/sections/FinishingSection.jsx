import React from "react";
import { AarambhLogo } from "../../utils";
import { NavLink } from "react-router-dom";

const FinishingSection = () => {
  return (
    <div className="mx-4 p-4 flex flex-col justify-center">
      <img src={AarambhLogo} alt="Logo" height={500} width={500} />
      <h1 className="title-3">The Mission Starts Here...</h1>
    </div>
  );
};

export default FinishingSection;
