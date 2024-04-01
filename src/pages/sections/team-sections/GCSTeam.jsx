import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import profilepic2 from "../../../assets/profilepic4.avif";
import GCSLogo from "../../../assets/GCSLogo.png";
import { members } from "../../../constants";

const GCSTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          GCS
          <img src={GCSLogo} alt="GCSLogo" className="size-16" />
        </legend>
        <div>
          {members.map((items, i) =>
            items.field == "Ground Station" ? (
              items.lead == true ? (
                <div className="lead-namebox" key={i}>
                  <NameSectionTeams
                    img={items.img}
                    name={items.name}
                    field={items.field + "-Lead"}
                    linkedin={items.linkedin}
                    email={items.email}
                  />
                </div>
              ) : (
                <div className="member-namebox" key={i}>
                  <NameSectionTeams
                    img={items.img}
                    name={items.name}
                    field={items.field}
                    linkedin={items.linkedin}
                    email={items.email}
                  />
                </div>
              )
            ) : (
              <div key={i}></div>
            ),
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default GCSTeam;
