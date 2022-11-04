import React from "react";
 import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="LandingParent">
        <img
          alt="Bus gif"
          style={{
            height: "500px",
            width: "1000px",
            maxWidth: "100%",
            paddingLeft: "400px",
            marginTop: "20px",
            marginBottom: "0px",
          }}
          className="bus"
          src="https://cdn.dribbble.com/users/2374064/screenshots/4737393/bus-truning.gif"
        />

        <p className="motto">
          Safe,comfortable and Dignified Travel{" "}
          <span className="mottoNav">Safiri popote kwa ustarabu</span>
        </p>
        <div>
          <Link className="start btn btn-danger" to="/home">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};
export default Landing;
