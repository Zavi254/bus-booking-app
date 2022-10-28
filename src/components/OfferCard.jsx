import React from "react";

const OfferCard = ({ imageLink, off, code }) => {
  return (
    <div
      className="card mx-auto mb-5 p-5"
      style={{ width: "350px", borderRadius: "7px" }}
    >
      <img className="img-fluid" src={imageLink} alt="bus offers" style={{ borderRadius: "12px" }} />
      <div className="card-body">
        <h4>{off}OFF</h4>
        <h4>On Bus Bookings</h4>
        <h4>Use Code</h4>
      </div>
      <button
        className="btn"
        style={{
          borderRadius: "17px",
          backgroundColor: "#F20C0C",
          color: "white",
        }}
      >
        {code}
      </button>
    </div>
  );
};

export default OfferCard;
