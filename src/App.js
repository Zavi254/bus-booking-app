import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";
import SelectBus from "./pages/SelectBus";
import { useEffect } from "react";
import { createContext } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  
  // function onLogin(user) {
  //   setCurrentUser(user);
  // }
  // console.log(currentUser);

  useEffect(() => {
    fetch("https://bus-booking-web-api.herokuapp.com/me", {
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      } else {
        console.log("There is no user in session");
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="login" element={<Login userLogin={handleLogin} />} />
        <Route path="/buses/:id" element={<SelectBus />} />
        <Route path="home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export const UserContext = createContext();
