import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Destination = ({ from, to }) => {
  const styles = {
    marginTop: "90px",
    backgroundColor:"#eb472b",
    color:"#fff"
  };

  return (
    <div className="d-flex justify-content-between p-3" style={styles}>
      <div>{from}</div>
        <BsArrowRightCircleFill style={{marginTop:"5px", fontSize:"20px"}} />
      <div>{to}</div>
    </div>
  );
};

export default Destination;
