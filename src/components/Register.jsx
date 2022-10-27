import Button from "./Button";
import { useState } from "react";

const Register = ({ showSignin }) => {
  const inputStyles = {
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.20)",
    borderRadius: "7px",
    margin: "auto",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const user = {
    email,
    password,
    role,
    name,
  };

  function handleRegister(e) {
    e.preventDefault();
    fetch("https://bus-booking-web-api.herokuapp.com/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
      }
    });
    alert(`You have successfully registered your Account ${user.name}`);
  }

  return (
    <form className="form" onSubmit={handleRegister}>
      <h2 className="text-center">Welcome to Bus Booking</h2>
      <p className="text-center">Sign up your account</p>
      <div className="mb-4">
        <input
          style={inputStyles}
          type="text"
          className="form-control p-3"
          placeholder="Enter Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
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
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-select p-3"
          style={inputStyles}
        >
          <option>Enter your role</option>
          <option value="customer">Customer</option>
          <option value="driver">Driver</option>
          {/* <option value="admin">Admin</option> */}
        </select>
      </div>
      <Button
        classN="btn btn-primary barlowFont signRegisterBtn mb-4 mt-2"
        text="Register"
        type="submit"
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
