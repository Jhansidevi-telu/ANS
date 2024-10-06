import React from "react";
import "./Header.css";
import card from "../assets/ANSLogo.png";

const Header = () => {
  return (
    <div className="header">
       <div className="contact-info pt-2 d-none d-lg-block"> 
        <p className="pl-2 ms-4 text-white">
          <strong>Phone:</strong> +1 (234) 567-8901 | <strong>Email:</strong>{" "}
          info@example.com
        </p>
        {/* <div className="divider" /> */}
        <hr className="divider"/>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <img src={card} alt="logo" className="Logo" />
          <a className="navbar-brand text-white" href="#">
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
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <a className="nav-link active text-white " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
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
