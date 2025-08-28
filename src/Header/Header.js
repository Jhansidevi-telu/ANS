import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import card from "../assets/1000058850-removebg-preview.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="contact-info pt-2 d-none d-lg-block text-white">
        <p className="pl-2 ms-4 text-white">
          <strong>Phone:</strong> +91 9959788999 | <strong>Email:</strong>{" "}
          delicious50biryanis@gmail.com
        </p>
        <hr className="divider" />
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={card} alt="logo" className="Logo" />
          <a className="navbar-brand text-white" href="/">
            Bhimavaram Delicious Biryanis
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
            <FaBars className="text-white" size={24} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#services">Services</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/termsAndConditions">
                  Terms and Conditions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/refundPolicy">
                  Refund Policy
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
