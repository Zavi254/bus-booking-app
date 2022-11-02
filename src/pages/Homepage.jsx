import React from "react";
import { useEffect } from "react";
import AboutUsSection from "../components/AboutUsSection";
import HomeImage from "../components/HomeImage";
import Navbar from "../components/Navbar";
import OfferCardSection from "../components/OfferCardSection";
import PleaseCall from "../components/PleaseCall";
import Search from "../components/Search";

const Homepage = () => {
  

  return (
    <div>
      <Navbar />
      <HomeImage />
      <Search />
      <PleaseCall />
      <OfferCardSection />
      <AboutUsSection />
    </div>
  );
};

export default Homepage;
