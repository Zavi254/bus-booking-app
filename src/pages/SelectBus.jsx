import React, { useEffect, useState } from "react";
import Essentials from "../components/Essentials";
import Navbar from "../components/Navbar";
import { MdChair } from "react-icons/md";
import { useParams } from "react-router-dom";

const SelectBus = () => {
  const { id } = useParams();
  const [bus, setBus] = useState("");
  const iconStyle = {
    fontSize: "2.5rem",
  };

  useEffect(() => {
    fetch(`https://bus-booking-web-api.herokuapp.com/buses/${id}`)
      .then((response) => response.json())
      .then((data) => setBus(data));
  }, []);
  console.log(bus.seats);
  return (
    <div>
      <Navbar />
      <Essentials />
      <div className="d-flex justify-content-between mt-3">
        <div>
          <MdChair style={iconStyle} />

          <MdChair style={iconStyle} />
          <MdChair style={iconStyle} />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dogmqg8to/image/upload/v1667054290/bus%20booking%20Web%20Application/Frame_12_xsjbmc.png"
            alt="driver seat icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectBus;
