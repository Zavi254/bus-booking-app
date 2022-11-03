import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";
import SelectBus from "./pages/SelectBus";
import { useEffect } from "react";
import { createContext } from "react";
import MainPage from "./Admin/MainPage"
//import NavPage from "./Admin/NavPage";
//import Customers from "./Admin/Customers";
//import Bookings from "./Admin/Bookings";
//import Drivers from "./Admin/Drivers";
//import Buses from "./Admin/Buses";
import Driverdash from './Driver/Driverdash';
import AddBus from "./Driver/AddBus";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [reload, setReload] = useState(false);

  function onLogin() {
    setReload(() => !reload);
  }

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
  }, [reload]);

  return (
    <UserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage onLogin={onLogin}/>} />
          <Route path="login" element={<Login onLogin={onLogin} />} />
          <Route path="/buses/:id" element={<SelectBus />} />
          <Route path="home" element={<Homepage />} />
          <Route path="/mainPage/*" element={<MainPage/>}/>
          <Route path="/driverDashboard" element={<Driverdash />} />
          <Route path="/addbus" element={<AddBus />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

export const UserContext = createContext();

