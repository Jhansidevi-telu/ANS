import React from "react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light py-1 ">
      <div className="row align-items-center ">
        <div className="col-md-6 align-items-center justify-content-center mt-2">
          <p className="text-light contentFont">
            &copy; 2024 Anusha Catering & Suppliers. All rights reserved.
          </p>
        </div>
        <div className="col-md-6 text-md-end text-center">
          <a
            href="https://www.facebook.com/prasad.pothina.56"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/anusha_events515/"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

        </div>
      </div>
    </div>
  );
};
export default Footer;
