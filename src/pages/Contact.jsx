import React from "react";
import NameSectionTeams from "../components/NameSectionTeams";
import profilePic from "../assets/profile-pic-2.jpg";
import profilePic2 from "../assets/profilepic3.webp";
import profilePicWomen from "../assets/profilepic-women.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Contact = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".gsaptext", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
    tl.from(".gsapimg", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
        axis: "x",
      },
    });
  }, []);
  return (
    <div className="flex items-center justify-center flex-col py-8">
      <h1 className="title gsaptext">Contact Us</h1>
      <h3 className="title-3 gsaptext">For Mentorship or Sponsorship</h3>
      <div className="w-full flex items-center justify-evenly">
        <NameSectionTeams
          className="gsapimg"
          img={profilePic}
          name="Aditya Vinod Ingle"
          field="Team Lead"
          email="adityaingle@gmail.com"
        />

        <NameSectionTeams
          className="gsapimg"
          img={profilePic2}
          name="Puranjot Singh Naga"
          field="Website Lead"
          email="puranjotsinghnaga@gmail.com"
          linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
        />

        <NameSectionTeams
          className="gsapimg"
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
