import React from "react";
import Button from "./Button";

const Signin = () => {
  const inputStyles = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: "auto",
  };

  const iconStyles = {
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    padding: "2px 20px",
    cursor: "pointer",
    border: "1px solid #DDDFDD",
  };

  return (
    <form>
      <div className="mb-4">
        <input
          style={inputStyles}
          type="email"
          className="form-control p-3 mb-4"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-5">
        <input
          style={inputStyles}
          type="password"
          className="form-control p-3"
          placeholder="Enter password"
        />
      </div>
      <Button classN="btn btn-danger signRegisterBtn mb-4" text="Sign in" />
      <p style={{ color: "#ACADAC", textAlign: "center" }}>Or continue with</p>
      <div className="d-flex justify-content-around">
        <img
        alt="google vector"
          style={iconStyles}
          src="https://img.icons8.com/color/48/000000/google-logo.png"
        />
        <img
        alt="facebook vector"
          style={iconStyles}
          src="https://img.icons8.com/color/48/000000/facebook-new.png"
        />
        <img
        alt="mac os vector"
          style={iconStyles}
          src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
        />
      </div>
    </form>
  );
};

export default Signin;
