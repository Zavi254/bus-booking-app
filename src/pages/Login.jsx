import { useState } from "react";
import Register from "../components/Register";
import Signin from "../components/Signin";

const Login = ({ userLogin }) => {
  const [show, setShow] = useState(true);

  const showSignin = () => {
    setShow(true);
  };

  const showRegister = () => {
    setShow(false);
  };

  return (
    <div
      className="container-fluid d-sm-flex align-items-sm-center"
      style={{ height: "100vh" }}
    >
      <img
        alt="people loading a bus"
        style={{ width: "500px", maxWidth: "100%" }}
        className="img-fluid align-self-sm-center flex-fill"
        src="https://res.cloudinary.com/dogmqg8to/image/upload/v1666362327/bus%20booking%20Web%20Application/8493_tnwt3p.jpg"
      />

      <div className="row flex-fill">
        {show ? (
          <Signin showRegister={showRegister} Login={userLogin} />
        ) : (
          <Register showSignin={showSignin} />
        )}
      </div>
    </div>
  );
};

export default Login;
