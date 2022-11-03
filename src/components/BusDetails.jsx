import React from "react";
import { BiBus } from "react-icons/bi";

const BusDetails = ({ from, to, time, numberPlate, cost, seats }) => {
  const styles = {
    fontFamily: "Montserrat', sans-serif",
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };
  const fontColor = {
    color: "#FFA500",
  };


  return (
    <div
      className="d-sm-flex justify-content-between mt-5 mx-auto p-4"
      style={styles}
    >
      <BiBus style={{ fontSize: "30px" }} />
      <div>
        {from} - {to}
      </div>
      <div className="d-flex flex-column">
        <div style={fontColor}>Departure Time</div>
        <div>{time}</div>
      </div>
      <div className="d-flex flex-column">
        <div style={fontColor}>Number Plate</div>
        <div>{numberPlate}</div>
      </div>
      <div>KES {cost}</div>
      <div style={fontColor}>{seats}</div>
    </div>
  );
};

export default BusDetails;
