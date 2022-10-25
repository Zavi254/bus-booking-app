import React from "react";
import { BsTelephoneFill } from "react-icons/bs";

const PleaseCall = () => {
  return (
    <div
      className="d-flex pleaseCall"
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-white" style={{ padding: "10px"}}>
        <p className="text-center">For Telephone booking service</p>
        <h3 className="text-center">Please Call</h3>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ backgroundColor: "#F20C0C", padding: "10px", width: "220px" }}
      >
        <BsTelephoneFill className="phoneIcon" style={{ color: "white" }} />
        <h1 className="text-white">91345</h1>
      </div>
    </div>
  );
};

export default PleaseCall;
