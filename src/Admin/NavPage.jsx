import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Driver from "../Driver/Driver";
import Bookings from "./Bookings";
import Drivers from "./Drivers";
import Buses from "./Buses";
import Admin from "./Admin";

function NavPage() {
    return (
        <>
            <Routes>
            {/* <Route path="home" element={<Driver/>}/> */}
                {/* <Route path="/" element={<Login/>}/> */}
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/drivers" element={<Drivers/>}/>
                <Route path="/bookings" element={<Bookings/>}/>
                <Route path="/buses" element={<Buses/>}/>
                <Route path="/admin" element={<Admin/>}/>
                {/* <Route path="/department" element={<Department/>}/> */}
               
            </Routes>
        </>
    )
}
export default NavPage;