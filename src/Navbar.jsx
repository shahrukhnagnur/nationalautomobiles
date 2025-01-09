import React from "react";
import logo from "./images/national automobiles.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img
          src={logo}
          alt="National Automobiles"
          className="logo"
          height={50}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto" style={{ gap: 20 }}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/parts"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                Parts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Right side icons for Contact, Gmail, and Logout */}
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center"
                href="tel:+919130309797"
                style={{ textDecoration: "none", fontSize: "16px" }}
              >
                <FaPhone className="text-success me-2" size={20} />
                <span className="d-none d-lg-inline">Call Us</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center"
                href="mailto:info@nationalautomobiles.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", fontSize: "16px" }}
              >
                <FaEnvelope className="text-warning me-2" size={20} />
                <span className="d-none d-lg-inline">Email Us</span>
              </a>
            </li>
            {/* Logout button */}
            <li className="nav-item">
              <button
                className="btn btn-outline-danger d-flex align-items-center"
                onClick={handleLogout}
                style={{ fontSize: "16px" }}
              >
                <FaSignOutAlt className="me-2" size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
