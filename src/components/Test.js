import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../pages/Login";
import { UserContext } from "../App";
import { useContext } from "react";

const Test = ({ seats, bus, onBooking, time, busId, onClickBook }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  function compareId(a, b) {
    return a.id - b.id;
  }
  let splitDate = `${bus.travel_date}`.split("-").reverse().join("-");
    let columnA = seats
    .filter((seat) => seat.seat_no >= 1 && seat.seat_no <= 12)
    .sort(compareId);
  let columnB = seats
    .filter((seat) => seat.seat_no >= 13 && seat.seat_no <= 24)
    .sort(compareId);
  let columnC = seats
    .filter((seat) => seat.seat_no >= 25 && seat.seat_no <= 36)
    .sort(compareId);
  let columnD = seats
    .filter((seat) => seat.seat_no >= 37 && seat.seat_no <= 48)
    .sort(compareId);
  const handleClick = (e) => {
    e.preventDefault();
    const seatNo = parseInt(e.target.textContent);
    const id = parseInt(e.target.id);
    const bookingData = {
      customer_id: 2,
      seat_no: seatNo,
      bus_id: parseInt(busId),
    };

    fetch("https://bus-booking-web-api.herokuapp.com/bookings", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    }).then((r) => {
      if (r.ok) {
        fetch(`https://bus-booking-web-api.herokuapp.com/seats/${id},`, {
          credentials: "include",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_booked: true,
          }),
        })
          .then((r) => r.json())
          .then((bookedSeat) => onBooking(bookedSeat));
      } else {
        alert("Booking failed, You may have to login or check your network");
      }
    });
  };
  function renderLogin() {
    alert("Booking failed, You may have to login or check your network");
    navigate("/login");
  }

  function handleAlreadyBooked() {
    alert(
      "Green seats are already booked.Red seats are available. Check if there are any."
    );
  }

  function handleBook(e) {
    onClickBook(e.target.textContent);
    confirmAlert({
      title: "Confirm booking",
      message: `Do you wish to book seat ${e.target.textContent} at Kshs. ${bus.cost_per_seat}. Travel date: ${splitDate} Departure time:${time} ?`,
      buttons: [
        {
          label: "Book",
          onClick: () => (user.id > 0 ? handleClick(e) : renderLogin()),
        },
        {
          label: "Exit",
          onClick: () => null,
        },
      ],
    });
  }

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <div>
          {columnA.map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
                marginRight: "50px",
              }}
              className="card text-center mb-2"
              key={seat.id}
              id={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
        <div>
          {columnB.map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
              }}
              className="card text-center mb-2"
              key={seat.id}
              id={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex">
        <div>
          {columnC.map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
                marginRight: "50px",
              }}
              className="card text-center mb-2"
              key={seat.id}
              id={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
        <div>
          {columnD.map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
              }}
              className="card text-center mb-2"
              key={seat.id}
              id={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
