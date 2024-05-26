import React from "react";
import FooterOne from "../components/FooterOne";
import Navbar from "../components/Navbar";
import TeamDetailsGroup from "../components/TeamDetailsGroup";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default TeamDetails;
