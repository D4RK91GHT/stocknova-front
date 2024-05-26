import React from "react";
import FooterOne from "../components/FooterOne";
import Navbar from "../components/Navbar";
import TeamAreaGroup from "../components/TeamAreaGroup";

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Team;
