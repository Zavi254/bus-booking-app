import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ showSignin }) => {
  const navigate = useNavigate();

  const inputStyles = {
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.20)",
    borderRadius: "7px",
    margin: "auto",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [telephone, setTelephone] = useState("");
  const [name, setName] = useState("");

  const user = {
    name,
    email,
    password,
    role,
    telephone,
  };

  function handleRegister(e) {
    e.preventDefault();
    fetch(`https://bus-booking-web-api.herokuapp.com/${role}`, {
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
    if (role === "customers") {
      navigate("/buses")
    }
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
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          style={inputStyles}
          type="number"
          className="form-control p-3"
          placeholder="Enter Phone Number"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
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
          value={role.toLowerCase()}
          onChange={(e) => setRole(e.target.value)}
          className="form-select p-3"
          style={inputStyles}
        >
          <option>Enter your role</option>
          <option value="customers">Customer</option>
          <option value="drivers">Driver</option>
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
