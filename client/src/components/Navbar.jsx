import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="links">
          <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
          <Link className="link" to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className="link" to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">Login</Link>
          )}
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>

        {/* Menu icon for mobile view */}
        <div className="menu-icon" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
          </svg>
        </div>

        {/* Sidebar */}
        {isSidebarVisible && (
          <div className="sidebar">
            <button className="close-btn" onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </button>
            <Link className="link" to="/?cat=art" onClick={toggleSidebar}>ART</Link>
            <Link className="link" to="/?cat=science" onClick={toggleSidebar}>SCIENCE</Link>
            <Link className="link" to="/?cat=technology" onClick={toggleSidebar}>TECHNOLOGY</Link>
            <Link className="link" to="/?cat=cinema" onClick={toggleSidebar}>CINEMA</Link>
            <Link className="link" to="/?cat=design" onClick={toggleSidebar}>DESIGN</Link>
            <Link className="link" to="/?cat=food" onClick={toggleSidebar}>FOOD</Link>
            {currentUser ? (
              <span onClick={() => { logout(); toggleSidebar(); }}>Logout</span>
            ) : (
              <Link className="link" to="/login" onClick={toggleSidebar}>Login</Link>
            )}
            <Link className="link" to="/write" onClick={toggleSidebar}>Write</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
