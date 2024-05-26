import React from "react";
import FooterOne from "../components/FooterOne";
import NavbarTwo from "../components/NavbarTwo";
import TeamDetailsGroup from "../components/TeamDetailsGroup";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default TeamDetails;
