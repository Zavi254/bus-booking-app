import React, { useState, useEffect } from "react";
import ModalCard from "./ModalCard";
import { FaBus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetch("https://bus-booking-web-api.herokuapp.com/buses/")
      .then((response) => response.json())
      .then((data) => setBuses(data));
  }, []);

  const fontGreyColor = {
    color: "#666666",
  };

  const availableBuses = buses.filter((value) => {
    return value.from === from && value.to === to && value.travel_date === date;
  });


  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form
        className="d-sm-flex justify-content-sm-between searchForm"
        onSubmit={handleSubmit}
      >
        <select
          className="form-select searchInputs"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option style={fontGreyColor}>From</option>
          <option value="MOMBASA">MOMBASA</option>
          <option value="NAIROBI">NAIROBI</option>
          <option value="KISUMU">KISUMU</option>
          <option value="ISIOLO">ISIOLO</option>
          <option value="MACHAKOS">MACHAKOS</option>
        </select>
        <select
          className="form-select searchInputs"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option>To</option>
          <option value="NAKURU">NAKURU</option>
          <option value="ISIOLO">ISIOLO</option>
          <option value="MOMBASA">MOMBASA</option>
          <option value="NAIROBI">NAIROBI</option>
          <option value="MACHAKOS">MACHAKOS</option>
        </select>
        <input
          className="form-control searchInputs"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Search
        </button>

        <ModalCard
          content={availableBuses.map((bus) => (
            <div key={bus.id} className="d-flex">
              <FaBus style={{ fontSize: "2rem" }} />
              <p style={{ marginLeft: "10px" }}>
                From:{bus.from} to: {bus.to}
              </p>
              <p>Departure Time: {bus.travel_time}</p>
              <p>Available Seats: {bus.no_of_seats}</p>
              <NavLink id={bus.id} to={`/buses/${bus.id}`} className="bookBtn bg-danger">
                View Seats
              </NavLink>
            </div>
          ))}
        />
      </form>
    </div>
  );
};

export default Search;
