import React from "react";
import { members } from "../constants";
import NameSectionTeams from "../components/NameSectionTeams";
const MemberMapper = (props) => {
  return (
    <div>
      {members.map((item, index) => {
        item.field === props.field && item.position != "Lead" ? (
          <div key={index}>
            <NameSectionTeams
              img={item.img}
              name={item.name}
              field={item.field}
              linkedin={item.linkedin}
              email={item.email}
            />
          </div>
        ) : (
          <div></div>
        );
      })}
    </div>
  );
};

export default MemberMapper;
