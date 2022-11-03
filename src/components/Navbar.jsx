import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm justify-content-between fixed-top"
      style={{
        backgroundColor: "#F20C0C",
        fontFamily: "Montserrat', sans-serif",
        fontWeight: "700",
      }}
    >
      <div className="mobileNavbar">
        <Link to="/" className="navbar-brand text-white">
          BUS BOOKING APP
        </Link>

        <button
          className="navbar-toggler togglerIcon"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo"
        >
          <FaBars style={{ fontSize: "1.5rem", color: "white" }} />
        </button>
      </div>
      <div>
        <ul
          className="navbar-nav offcanvas offcanvas-end text-bg-dark"
          id="demo"
        >
          <li className="nav-item">
            <Link to="/home" className="nav-link text-white">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-white">
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home/about" className="nav-link text-white">
              ABOUT US
            </Link>
          </li>
          <div className="offcanvas-header">
            <button
              className="btn-close btn-close-white close-button"
              type="button"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
        </ul>
      </div>

      <Outlet />
    </nav>
  );
};

export default Navbar;
