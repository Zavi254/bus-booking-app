import React from "react";
import HomeImage from "../components/HomeImage";
import Navbar from "../components/Navbar";
import PleaseCall from "../components/PleaseCall";
import Search from "../components/Search";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomeImage />
      <Search />
      <PleaseCall />
    </div>
  );
};

export default Homepage;
