import React from "react";
import NameSectionTeams from "../components/NameSectionTeams";
import profilePic from "../assets/profile-pic-2.jpg";
import profilePic2 from "../assets/profilepic3.webp";
import profilePicWomen from "../assets/profilepic-women.webp";

const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="title">Contact Us</h1>
      <h3 className="title-3">For Mentorship or Sponsorship</h3>
      <div className="w-full flex items-center justify-evenly">
        <NameSectionTeams
          img={profilePic}
          name="Aditya Vinod Ingle"
          field="Team Lead"
          email="adityaingle@gmail.com"
        />

        <NameSectionTeams
          img={profilePic2}
          name="Puranjot Singh Naga"
          field="Website Lead"
          email="puranjotsinghnaga@gmail.com"
          linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
        />

        <NameSectionTeams
          img={profilePicWomen}
          name="Vidhi Arya"
          field="Team Manager"
          email="@gmail.com"
          linkedin="#"
        />
      </div>
    </div>
  );
};

export default Contact;
