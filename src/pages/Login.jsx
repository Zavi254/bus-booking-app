import { useState } from "react";
import Button from "../components/Button";
import Register from "../components/Register";
import Signin from "../components/Signin";

const Login = () => {
  const [show, setShow] = useState(true);

  const showSignin = () => {
    setShow(true);
  };

  const showRegister = () => {
    setShow(false);
  };

  return (
    <div
      className="container-fluid d-sm-flex justify-content-sm-between br"
      style={{ height: "100vh" }}
    >
      <img
        style={{ width: "500px", maxWidth: "100%" }}
        className="img-fluid align-self-sm-center flex-fill"
        src="https://res.cloudinary.com/dogmqg8to/image/upload/v1666362327/bus%20booking%20Web%20Application/8493_tnwt3p.jpg"
      />

      <div className="row flex-fill br">
        <Button
          onClick={showSignin}
          text="Sign in"
          classN="btn btn-link col-6 buttonLinks"
        />
        <Button
          onClick={showRegister}
          text="Register"
          classN="btn btn-link col-6 buttonLinks"
        />
        {show ? <Signin /> : <Register />}
      </div>
    </div>
  );
};

export default Login;
