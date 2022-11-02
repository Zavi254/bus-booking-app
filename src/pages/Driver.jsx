import React from "react";
import BusDetails from "../components/BusDetails";
import BusList from "../components/Buslist";
//import NewBusForm  from "../components/NewBusForm ";
import Navbar from "../components/Navbar";
import Addbus from "../components/Addbus";




const Driver = () => {
    return (
      <div>
        <Navbar />
        <Addbus  />
        <BusList />
        <BusDetails />
      </div>
    );
  };
  
  export default Driver;
  