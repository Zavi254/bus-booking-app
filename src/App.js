import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";
import SelectBus from "./pages/SelectBus";
import MainPage from "./Admin/MainPage";


function App() {
  // function handleLogin() {
  //   console.log("Hello");
  // }
  return (
    <div>
      <MainPage/>
      </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Landingpage />} />
    //     <Route path="login" element={<Login userLogin={handleLogin} />} />
    //     <Route path="/buses/:id" element={<SelectBus />} />
    //     <Route path="home" element={<Homepage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
