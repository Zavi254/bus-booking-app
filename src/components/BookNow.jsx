import React from "react";

const BookNow = ({ price, seatNo }) => {
  const styles = {
    background: "#F20C0C",
    fontWeight:"700",
    borderRadius:"15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };
  const btnStyle = {
    textDecoration:"none",
    fontSize:"1.3rem"
  }
  return (
    <div className="d-flex p-3 mt-5 justify-content-between" style={styles}>
      <div className="d-flex flex-column">
        <h1 className="text-white">Total: Kshs. {seatNo? price: 0}</h1>
        <p className="text-white">SEAT SELECTED: {seatNo}</p>
      </div>
      <div className="align-self-center">
        <button style={btnStyle} className="btn btn-link text-white">Book Now</button>
      </div>
    </div>
  );
};

export default BookNow;

