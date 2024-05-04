import React from "react";
import ContactAreaOne from "../components/ContactAreaOne";

import FooterOne from "../components/FooterOne";
import NavbarTwo from "../components/NavbarTwo";

import "../home.scss";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Contact Main */}
      <ContactAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;
