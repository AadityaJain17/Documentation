import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar w-full fixed mb-5">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              src="https://img.icons8.com/?size=100&id=KE7Lna1lAPUQ&format=png&color=e0e1dd"
              alt="SITENAME"
              style={{ height: "80px", width: "50px", paddingTop: "30px" }}
            />
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/javascript"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Javascript
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/python"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Python
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
