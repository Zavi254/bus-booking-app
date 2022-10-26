import React from "react";
import Button from "./Button";

const Register = ({ showSignin }) => {
  const inputStyles = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: "auto",
  };

  return (
    <form className="form">
      <h2 className="text-center">Welcome to Bus Booking</h2>
      <p className="text-center">Sign up your account</p>
      <div className="mb-4">
        <input
          style={inputStyles}
          type="email"
          className="form-control p-3"
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
      <div className="mb-5">
        <select className="form-select p-3" style={inputStyles}>
          <option>Enter your role</option>
          <option value="customer">Customer</option>
          <option value="driver">Driver</option>
          {/* <option value="admin">Admin</option> */}
        </select>
      </div>
      <Button
        classN="btn btn-primary barlowFont signRegisterBtn mb-4"
        text="Register"
      />
      <p style={{ color: "#ACADAC", textAlign: "center" }}>
        Already have an Account?
        <span>
          <button
            onClick={showSignin}
            className="btn btn-link"
            style={{ textDecoration: "none" }}
          >
            Login
          </button>
        </span>
      </p>
    </form>
  );
};

export default Register;
