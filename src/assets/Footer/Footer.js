import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container-xxl bg-dark text-light py-1 ">
      <div className="row align-items-center ">
        <div className="col-md-6 align-items-center justify-content-center mt-2">
          <p>&copy; 2024 Anusha Catering & Suppliers. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-md-end text-center">
          <a
            href="https://www.facebook.com"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
