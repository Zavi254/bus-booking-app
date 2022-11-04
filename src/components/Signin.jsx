import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

const Signin = ({ showRegister, onLogin }) => {
  const user = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();
  const inputStyles = {
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.20)",
    borderRadius: "7px",
    margin: "auto",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const userLogin = {
    email,
    password,
    role,
  };

  const formStyle = {
    marginTop: "120px",
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
    }).then((r) => {
      if (r.ok) {
        onLogin();
        navigate("/home");
      } else {
        alert("User does not exist!");
      }
    });

    setEmail("");
    setPassword("");
    setRole("");
  }

  return (
    <form className="form" style={formStyle} onSubmit={handleSubmit}>
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
          <option value="admin">Admin</option>
        </select>
      </div>
      <Button classN="btn btn-danger signRegisterBtn mb-4" text="Login" />
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
