import React from "react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-xxl bg-dark text-light py-1 ">
      <div className="row align-items-center ">
        <div className="col-md-6 align-items-center justify-content-center mt-2">
          <p style={{
           fontFamily: '"Abril Fatface", serif', 
            fontSize: '14px',
            color: 'white',
            textAlign: 'center',
            margin: '0',
            padding: '0'
          }}>
            &copy; 2024 Anusha Catering & Suppliers. All rights reserved.
          </p>
        </div>
        <div className="col-md-6 text-md-end text-center">
          <a
            href="https://www.facebook.com/prasad.pothina.56?rdid=JuEMiIHjst97QMhu"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/anusha_events515/?igsh=MTJ6cnc0MGU3a25ieQ%3D%3D"
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
