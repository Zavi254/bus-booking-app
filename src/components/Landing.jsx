import React from "react";
// import { Link } from 'react-router-dom';

const Landing = ({ Link }) => {
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
          <p className="mottoNav">Safiri popote kwa ustarabu</p>
        </p>
        <div>
          <button className="start" component={Link} to="./pages/Homepage">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
export default Landing;
