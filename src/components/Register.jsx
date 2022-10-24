import React from "react";
import Button from "./Button";

const Register = () => {
  const inputStyles = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin:"auto",
  };

  return (
    <form className="form">
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
      <Button classN="btn btn-primary barlowFont signRegisterBtn mb-4" text="Register" />
    </form>
  );
};

export default Register;
