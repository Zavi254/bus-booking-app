import React from "react";
import Essentials from "../components/Essentials";
import Navbar from "../components/Navbar";

const SelectBus = ({ show }) => {
  return (
    <>
      <Navbar />
      <Essentials />
      <div>{show}</div>
    </>
  );
};

export default SelectBus;
