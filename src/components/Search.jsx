import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Search = () => {
  const [date, setDate] = useState("");

  const fontGreyColor = {
    color: "#666666",
  };

  return (
    <form className="d-sm-flex justify-content-sm-between searchForm">
      <select className="form-select searchInputs">
        <option style={fontGreyColor}>From</option>
        <option value="Mombasa">Mombasa</option>
        <option value="Nairobi">Nairobi</option>
        <option value="Nakuru">Nakuru</option>
        <option value="Kisumu">Kisumu</option>
      </select>
      <select className="form-select searchInputs">
        <option>To</option>
        <option value="Mombasa">Mombasa</option>
        <option value="Nairobi">Nairobi</option>
        <option value="Nakuru">Nakuru</option>
        <option value="Kisumu">Kisumu</option>
      </select>
      <input
        className="form-control searchInputs"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <Button variant="danger" style={{ backgroundColor: "#F20C0C", width:"200px" }}>
        Search
      </Button>
    </form>
  );
};

export default Search;
