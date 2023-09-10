import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/mystyle.css";
import { CartContext } from "../Store/CartContext";
import { AuthContext } from "../Store/AuthContext";
export default function Navbar() {
  var { qty } = useContext(CartContext);
  var { auth, authdispatch } = useContext(AuthContext);
  function logout() {
    authdispatch({ type: "LOGOUT" });
    localStorage.clear();
  }
  useEffect(() => {}, [auth]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light background fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            DCART
          </Link>
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
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Shop/All/All/All">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  ContactUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
            <form className="d-flex w-100">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("login") ? (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-light dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Nitin Chauhan
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cart">
                        Cart{" "}
                        <span className="badge background tex-light">
                          {qty}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
