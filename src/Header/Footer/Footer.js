import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid bg-dark text-light py-3">
      <div className="text-center">
        <p className="mb-2 contentFont">
          &copy; {currentYear} Bhimavaram Delicious Biryanis | Designed &
          Developed by{" "}
          <a
            href="https://www.instagram.com/host.hive/?igsh=ZXZjMnJkM2hqZWRr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#fec62a",
            }}
          >
            Host.Hive
          </a>
        </p>

        <div>
          <a
            href="https://www.facebook.com/deliciousbiryanis/"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/deliciousbiryanivizag/"
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
