import React from "react";
// import Breadcrumb from "../components/Breadcrumb";
import AboutArea from "../components/AboutArea";
import FaqArea from "../components/FaqArea";
import FooterOne from "../components/FooterOne";
import Navbar from "../components/Navbar";
import WorkProcess from "../components/WorkProcess";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      <AboutArea/>
      {/* FAQ Area */}
      <FaqArea />

      {/* Work Process */}
      <WorkProcess />

      {/* Footer */}
      <FooterOne />
    </>
  );
};

export default About;
