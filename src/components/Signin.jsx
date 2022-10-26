import React, { useState } from "react";
import Button from "./Button";

const Signin = ({ showRegister }) => {
  const inputStyles = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: "auto",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function showLog(e) {
    e.preventDefault();
    alert(password);
  }

  return (
    <form className="form">
      <h2 className="text-center">Welcome to Bus Booking</h2>
      <p className="text-center">Sign in to your account</p>
      <div className="mb-4">
        <input
          required
          style={inputStyles}
          type="email"
          className="form-control p-3"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <input
          style={inputStyles}
          type="password"
          className="form-control p-3"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <select
          className="form-select p-3"
          style={inputStyles}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Enter your role</option>
          <option value="customer">Customer</option>
          <option value="driver">Driver</option>
          {/* <option value="admin">Admin</option> */}
        </select>
      </div>
      <Button
        onClick={showLog}
        classN="btn btn-danger signRegisterBtn mb-4"
        text="Login"
      />
      <p style={{ color: "#ACADAC", textAlign: "center" }}>
        Don't have any Account?
        <span>
          <button
            onClick={showRegister}
            className="btn btn-link"
            style={{ textDecoration: "none" }}
          >
            Register
          </button>
        </span>
      </p>
    </form>
  );
};

export default Signin;
