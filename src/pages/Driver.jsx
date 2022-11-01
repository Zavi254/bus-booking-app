import React from "react";
import BusDetails from "../components/BusDetails";
import BusList from "../components/Buslist";
import NewBusForm  from "../components/NewBusForm ";
import Navbar from "../components/Navbar";




const Driver = () => {
    return (
      <div>
        
        <Navbar />
        <NewBusForm  />
        <BusDetails />
        <BusList />
       
        
        
      </div>
    );
  };
  
  export default Driver;
  