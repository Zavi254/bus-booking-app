import React from "react";
import BusDetails from "../components/BusDetails";
import BusList from "../components/Buslist";
import Addbus from "../components/Addbus";
import Navbar from "../components/Navbar";



const Driver = () => {
    return (
      <div>
        
        <Navbar />
        <Addbus />
        <BusDetails />
        <BusList />
        <Driver />
        
        
      </div>
    );
  };
  
  export default Driver;
  