import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        A blog website by 21cs037, 21cs079 and <b>21cs057</b>.
      </span>
      <div className="footer-links">
        <Link to="/about" className="footer-link">About Us</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
