import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Signin = ({ showRegister, Login }) => {
  const inputStyles = {
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.20)",
    borderRadius: "7px",
    margin: "auto",
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const userLogin = {
    email,
    password,
    role,
    name,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://bus-booking-web-api.herokuapp.com/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      // .then((r) => {
      //   if(r.ok) {
      //     r.json().then((user) => {

      //     })
      //   }
      // })
    setEmail("");
    setPassword("");
    setRole("");
    setName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <div className="mb-3">
        <input
          style={inputStyles}
          type="password"
          className="form-control p-3"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select p-3"
          style={inputStyles}
          value={role.toLowerCase()}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Enter your role</option>
          <option value="customer">Customer</option>
          <option value="driver">Driver</option>
          {/* <option value="admin">Admin</option> */}
        </select>
      </div>
      <Button
        onClick={handleSubmit}
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
