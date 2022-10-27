import React from "react";

const Essentials = () => {
  const cardStyles = {
    marginTop: "80px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
  };
  return (
    <div className="p-2 d-flex justify-content-between" style={cardStyles}>
      <div style={{ marginLeft: "10px" }}>
        <p>Wifi</p>
        <h6>Access in the bus</h6>
        <p>Dinner / Lunch</p>
        <h6>Yes</h6>
        <p>Essentials</p>
        <h6>Pillow, Water</h6>
      </div>
      <div style={{ marginRight: "10px" }}>
        <p>AC</p>
        <h6>Ac is available</h6>
        <p>Safety Measures</p>
        <h6>Sanitazied Masks</h6>
        <p>Snacks</p>
        <h6>Juice / Shake</h6>
      </div>
    </div>
  );
};

export default Essentials;
