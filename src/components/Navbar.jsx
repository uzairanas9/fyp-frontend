import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setShowLogout(true);
    } else {
      setShowLogout(false);
    }
  }, [showLogout]);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            BakraMandi
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="buyanimals"
                >
                  Buy Animals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  exact
                  className="nav-link"
                  to="termsandcond"
                >
                  Terms and Conditions
                </NavLink>
              </li>
              {showLogout ? (
                <li className="nav-item">
                  <NavLink
                    activeclassname="menu_active"
                    exact
                    className="nav-link"
                    onClick={() => {
                      localStorage.removeItem("authToken");
                      localStorage.removeItem("userId");
                      window.location.reload();
                    }}
                  >
                    Log out
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    activeclassname="menu_active"
                    exact
                    className="nav-link"
                    to="signup"
                  >
                    Register Now
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  exact
                  className="nav-link"
                  to="myaccount"
                >
                  My Account
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
