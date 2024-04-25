import React from "react";
import NavbarTwo from "../components/NavbarTwo";
import AboutAreaTwo from "../components/AboutAreaTwo";
import BannerTwo from "../components/BannerTwo";
// import BlogAreaTwo from "../components/BlogAreaTwo";
import ContactAreaTwo from "../components/ContactAreaTwo";
import CounterAreaTwo from "../components/CounterAreaTwo";
import PricingAreaTwo from "../components/PricingAreaTwo";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import ServiceAreaFive from "../components/ServiceAreaFive";

import TestimonialOne from "../components/TestimonialOne";
import WorkProcessTwo from "../components/WorkProcessTwo";
// import FooterTwo from "../components/FooterTwo";
import FooterOne from "../components/FooterOne";


const Home = () => {
  return (
    <>
      {/* Navigation Bar Two*/}
      <NavbarTwo />

      {/* Banner Two */}
      <BannerTwo />

      {/* About Area Two */}
      <AboutAreaTwo />

      {/* About Area Two */}
      <ServiceAreaTwo />
      <ServiceAreaFive />

      {/* Pricing Area Two */}
      <PricingAreaTwo />

      {/* Counter Area Two */}
      <CounterAreaTwo />

      {/* Contact Area Two */}
      <ContactAreaTwo />

      {/* Work Process Two */}
      <WorkProcessTwo />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Blog Area Two */}
      {/* <BlogAreaTwo /> */}

      {/* Footer Two */}
      {/* <FooterTwo /> */}
      <FooterOne />

    </>
  );
};

export default Home;