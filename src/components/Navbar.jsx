import React, { useEffect, useState } from "react";
import { Link, Navigate, NavLink, usenavigate } from "react-router-dom";
import AdminUserData from "./Adminuserdata";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [Adminid, setAdminid] = useState("");
  
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setShowLogout(true);
    } else {
      setShowLogout(false);
    }
    setAdminid("63cebb00bb356b04f0cee4aa");
    if (localStorage.getItem("lohinUserId")==Adminid) {
      setShowAdmin(true);
    } else {
      setShowAdmin(false);
    }
  }, [showLogout]);

  
  // useEffect(() => {
  //   if (localStorage.getItem("lohinUserid")===Adminid) {
  //     setShowAdmin(true);
  //   } else {
  //     setShowAdmin(false);
  //   }
  // }, [showLogout]);

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
                    to="login"
                    onClick={() => {
                      // window.confirm("Do You want to Log Out")
                      // if (confirm("Do You want to Log Out"))
                      {
                        localStorage.removeItem("authToken");
                        localStorage.removeItem("userId");
                        localStorage.removeItem("lohinUserId")
                        window.location.reload();
                        alert("Log out Successful");
                        Navigate("/login")
                        
                      }
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
              
              {showAdmin ? (
                <li className="nav-item">
                  <NavLink
                    activeclassname="menu_active"
                    exact
                    className="nav-link"
                    to="Adminuserdata"
                  >
                    Admin Panel
                  </NavLink>
                  </li>
              ):(<li className="nav-item">
              <NavLink
                activeclassname="menu_active"
                exact
                className="nav-link"
                to="myaccount"
              >
                My Account
              </NavLink>
            </li>)}

            
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
