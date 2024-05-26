import React from "react";
import ContactAreaOne from "../components/ContactAreaOne";

import FooterOne from "../components/FooterOne";
import Navbar from "../components/Navbar";


const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Contact Main */}
      <ContactAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;
