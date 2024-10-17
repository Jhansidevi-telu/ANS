import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import card from "../assets/ANSLogo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`header ${isHome ? "home-header" : "other-header"}`}>
      <div
        className={`contact-info pt-2 d-none d-lg-block ${
          isHome ? "text-white" : "text-black"
        }`}
      >
        <p className={`pl-2 ms-4 ${isHome ? "text-white" : "text-black"}`}>
          <strong>Phone:</strong> +91 9949319515 | <strong>Email:</strong>{" "}
          prasadpothina1@gmail.com
        </p>
        <hr className="divider" />
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <img src={card} alt="logo" className="Logo" />
          <a
            className={`navbar-brand ${isHome ? "text-white" : "text-black"}`}
            href="/"
          >
            Anusha Catering & Suppliers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="text-light" size={24} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${isHome ? "text-white" : "text-black"}`}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${isHome ? "text-white" : "text-black"}`}
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${isHome ? "text-white" : "text-black"}`}
                  href="/#services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isHome ? "text-white" : "text-black"}`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${isHome ? "text-white" : "text-black"}`}
                  href="/#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
