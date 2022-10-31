import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MdChair } from "react-icons/md";
import { useParams } from "react-router-dom";
import Destination from "../components/Destination";
import BusDetails from "../components/BusDetails";
import Seats from "../components/Seats";
import BookNow from "../components/BookNow";

const SelectBus = () => {
  const { id } = useParams();
  const [bus, setBus] = useState({});
  const [seats, setSeats] = useState([]);
  const [price, setPrice] = useState(0)
  const [selected, setSelected] = useState(0)
  const iconStyle = {
    fontSize: "2.5rem",
  };

  useEffect(() => {
    fetch(`https://bus-booking-web-api.herokuapp.com/buses/${id}`)
      .then((response) => response.json())
      .then((bus) => {
        setBus(bus);
        setSeats(bus.seats);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Destination from={bus.from} to={bus.to} />
      <BusDetails
        from={bus.from}
        to={bus.to}
        time={bus.travel_time}
        cost={bus.cost_per_seat}
        numberPlate={bus.plate_number}
        seats={bus.no_of_seats}
      />
      <div className="d-flex justify-content-between mt-5">
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
      <div>
        <Seats seats={seats} />
      </div>
      <BookNow price={price} selected={selected} />
    </div>
  );
};

export default SelectBus;
