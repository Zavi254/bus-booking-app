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
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

export const UserContext = createContext();
