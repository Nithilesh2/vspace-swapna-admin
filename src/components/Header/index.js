import React, { useState } from "react";
import {
  FaBars,
  FaCar,
  FaClipboardList,
  FaCreditCard,
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import "./index.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`navbar-container ${toggleMenu ? "collapsed" : ""}`}>
      <div className="toggleBtnInSideMenu">
        <FaBars
          className="toggleLogo"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
      </div>
      <img
        src="https://res.cloudinary.com/dagkvnqd9/image/upload/v1726917662/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
        alt="logo"
        className={`swapna-logo ${toggleMenu ? "hidden" : ""}`}
      />

      <div className="menu-item">
        <FaTachometerAlt size={20} />
        {!toggleMenu && <h1>Dashboard</h1>}
      </div>

      <div className="menu-item">
        <FaCreditCard size={20} />
        {!toggleMenu && <h1>Payments</h1>}
      </div>

      <div className="menu-item">
        <FaCar size={20} />
        {!toggleMenu && <h1>All Cars</h1>}
      </div>

      <div className="menu-item">
        <FaUsers size={20} />
        {!toggleMenu && <h1>All Customers</h1>}
      </div>

      <div className="menu-item">
        <FaClipboardList size={20} />
        {!toggleMenu && <h1>All Bookings</h1>}
      </div>

      <div className="menu-item">
        <FaMapMarkerAlt size={20} />
        {!toggleMenu && <h1>Tracking</h1>}
      </div>

      <div className="menu-item">
        <FaUserTie size={20} />
        {!toggleMenu && <h1>Employees</h1>}
      </div>
    </div>
  );
};

export default Header;
