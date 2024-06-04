import React from "react";
import Navbar from "../components/Navbar";
import AboutArea from "../components/AboutArea";
import Banner from "../components/Banner";
import CounterAreaTwo from "../components/CounterAreaTwo";
import PricingAreaOne from "../components/PricingAreaOne";

import ServiceArea from "../components/ServiceArea";
import PotentialArea from "../components/PotentialArea";

import Testimonial from "../components/Testimonial";
import WorkProcess from "../components/WorkProcess";
import FaqArea from "../components/FaqArea";
import FooterOne from "../components/FooterOne";


const Home = () => {
  return (
    <>
      {/* Navigation Bar*/}
      <Navbar/>

      {/* Banner */}
      <Banner />

      {/* About Area */}
      <AboutArea />

      {/* About Area */}
      <ServiceArea />

      <PotentialArea />

      {/* Pricing Area Two */}
      {/* <PricingAreaOne/> */}

      {/* Counter Area Two */}
      {/* <CounterAreaTwo /> */}

      {/* Work Process */}
      <WorkProcess />

      {/* Testimonial One */}
      <Testimonial />

      {/* Blog Area Two */}
      <FaqArea />
      
      {/* Footer Two */}
      <FooterOne />

    </>
  );
};

export default Home;
