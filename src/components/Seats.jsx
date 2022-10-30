import React from "react";

const Seats = ({ seats }) => {
  const styles = {
    width: "50px",
    height: "50px",
    borderRadius: "7px",
    textAlign: "center",
    fontWeight: "bold",
  };
  return (
    <div className="d-flex justify-content-between">
      <div>
        {seats.slice(0, 6).map((seat) => (
          <div style={styles} className="card" key={seat.id}>
            {seat.seat_no}
          </div>
        ))}
      </div>
      <div>
        {seats.slice(6, seats.length).map((seat) => (
          <div style={styles} className="card" key={seat.id}>
            {seat.seat_no}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seats;
