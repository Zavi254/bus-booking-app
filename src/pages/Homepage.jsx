import React from "react";
import HomeImage from "../components/HomeImage";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomeImage />
      <Search />
    </div>
  );
};

export default Homepage;
