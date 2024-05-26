import React from "react";
import Navbar from "../components/Navbar";
import AboutAreaTwo from "../components/AboutAreaTwo";
import BannerTwo from "../components/Banner";
import CounterAreaTwo from "../components/CounterAreaTwo";
import PricingAreaOne from "../components/PricingAreaOne";

import ServiceAreaTwo from "../components/ServiceAreaTwo";
import ServiceAreaFive from "../components/ServiceAreaFive";

import TestimonialOne from "../components/TestimonialOne";
import WorkProcessTwo from "../components/WorkProcessTwo";
import FaqAreaOne from "../components/FaqAreaOne";
import FooterOne from "../components/FooterOne";


const Home = () => {
  return (
    <>
      {/* Navigation Bar Two*/}
      <Navbar/>

      {/* Banner Two */}
      <BannerTwo />

      {/* About Area Two */}
      <AboutAreaTwo />

      {/* About Area Two */}
      <ServiceAreaTwo />
      <ServiceAreaFive />

      {/* Pricing Area Two */}
      <PricingAreaOne/>

      {/* Counter Area Two */}
      <CounterAreaTwo />

      {/* Work Process Two */}
      <WorkProcessTwo />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Blog Area Two */}
      <FaqAreaOne />
      
      {/* Footer Two */}
      <FooterOne />

    </>
  );
};

export default Home;