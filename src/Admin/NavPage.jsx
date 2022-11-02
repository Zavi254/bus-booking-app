import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
// import Drivers from "./Drivers";
import Bookings from "./Bookings";
import Drivers from "./Drivers";
import Buses from "./Buses";
import Admin from "./Admin";

function NavPage() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/drivers" element={<Drivers/>}/>
                <Route path="/bookings" element={<Bookings/>}/>
                <Route path="/buses" element={<Buses/>}/>
                <Route path="/admin" element={<Admin/>}/>
    
            </Routes>
        </>
    )
}
export default NavPage;