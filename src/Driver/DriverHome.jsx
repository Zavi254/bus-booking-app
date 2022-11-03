//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Login from "./Login";
//import Navbar from "./Navbar";
//import AddBus from './AddBus';
//import Adddriver from './Adddriver';
//import SelectBus from './pages/selectBus';
//import { createContext, useState,useEffect } from 'react';
//import "./Driver.css"

//function DriverHome(){
//  const [user, setUser] = useState({})
//  const [reloadOnLogin, setReload] = useState(false)
//  const onLogin=()=>{
//    setReload(()=>!reloadOnLogin)
//  }

//  useEffect(()=>{
//    fetch("https://bus-booking-web-api.herokuapp.com/me",{
//      credentials: "include"
//    })
//    .then(r => r.json())
//    .then(user => {
//      setUser(user)
//    })
//  },[reloadOnLogin])
//console.log(user);
//  return(
//    <UserContext.Provider value={user}>
//      <Router>
//        <Navbar user={user}/>
//        <Routes>
//          <Route path='/' element={<Login onLogin={onLogin}/>} />
//          <Route path='/create/bus' element={<AddBus />} />
//          <Route path='/create/driver' element={<Adddriver />} />
//          <Route path='/mybus' element={<SelectBus />} />
//        </Routes>
//      </Router>
//    </UserContext.Provider>
//  )
//}
// export const UserContext = createContext(); 
//export default DriverHome;