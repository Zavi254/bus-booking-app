import React from "react";
import BusDetails from "../components/BusDetails";
import BusList from "../components/Buslist";
import AddBus from "../components/AddBus";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";



const Driver = () => {
    return (
      <div>
        
        <Navbar />
        <Destination/>
        <AddBus />
        <BusDetails />
        <BusList />
       
        
        
      </div>
    );
  };
  
  export default Driver;
  