import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MdChair } from "react-icons/md";
import { useParams } from "react-router-dom";
import Destination from "../components/Destination";
import BusDetails from "../components/BusDetails";
//import Seats from "../components/Seats";
//import BookNow from "../components/BookNow";
import Test from "../components/Test";
import { useContext } from "react";
import { UserContext } from "../App";

const SelectBus = () => {
  const user = useContext(UserContext);
  const { id } = useParams();
  const [bus, setBus] = useState({});
  const [reload, setReload] = useState(false);
  const [seats, setSeats] = useState([]);
  const [travel_time, setTime] = useState("");
  const [seat, setSeatNo] = useState();
  const iconStyle = {
    fontSize: "2.5rem",
  };

  useEffect(() => {
    fetch(`https://bus-booking-web-api.herokuapp.com/buses/${id}`)
      .then((response) => response.json())
      .then((bus) => {
        setBus(bus);
        setSeats(bus.seats);
        setTime(bus.travel_time);
      });
  }, [id, reload, user]);

  const hour = `${travel_time}`.slice(0, 2);
  const minutes = `${travel_time}`.slice(-2);
  const hourAmPm = hour > 12 ? hour - 12 : hour;
  const zone = hour >= 12 ? "PM" : "AM";
  const departureTime = hourAmPm + ":" + minutes + zone;


  const onBooking = (bookedSeat) => {
    let array = seats.map((seat) => {
      if (seat.id === bookedSeat.id) {
        return bookedSeat;
      } else {
        return seat;
      }
    });
    setSeats(array);
    setReload(() => !reload);
  };

  const onClickBook = (seatNo) => {
    setSeatNo(seatNo);
  };

  const totalBus = seats.filter((seat) => seat.is_booked === false);

  return (
    <div>
      <Navbar />
      <Destination from={bus.from} to={bus.to} />
      <BusDetails
        from={bus.from}
        to={bus.to}
        time={departureTime}
        cost={bus.cost_per_seat}
        numberPlate={bus.plate_number}
        seats={
          totalBus.length === 0
            ? "Fully Booked "
            : `${totalBus.length} Seats Available`
        }
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
        <Test
          seats={seats}
          onBooking={onBooking}
          time={departureTime}
          busId={id}
          bus={bus}
          onClickBook={onClickBook}
        />
      </div>
      {/*<BookNow price={bus.cost_per_seat} seatNo={seat} />*/}
    </div>
  );
};

export default SelectBus;
