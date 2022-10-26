import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
