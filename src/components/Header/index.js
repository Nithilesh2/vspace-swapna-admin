import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaCar,
  FaClipboardList,
  FaCreditCard,
  FaList,
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaUserPlus,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // Sidebar toggle state
  const [activeMenu, setActiveMenu] = useState(null); // Active submenu state

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu)); // Toggle submenu
  };

  const navigate = useNavigate();

  return (
    <div className={`navbar-container ${toggleMenu ? "collapsed" : ""}`}>
      <div className="toggleBtnInSideMenu">
        {toggleMenu ? (
          <FaChevronRight
            className="toggleArrow"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FaChevronLeft
            className="toggleArrow"
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      <img
        src="https://res.cloudinary.com/dagkvnqd9/image/upload/v1726917662/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
        alt="logo"
        className={`swapna-logo ${toggleMenu ? "hidden" : ""}`}
      />

      <div className="menu-item" onClick={() => navigate('/home')}>
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

      <div className="menu-item" onClick={() => handleMenuClick("employees")}>
        <FaUserTie size={20} />
        {!toggleMenu && <h1>Employees</h1>}
      </div>
      {activeMenu === "employees" && (
        <div className="submenu">
          <div className="submenu-item" onClick={() => navigate("/employeeList")}>
            <FaList size={20} />
            {!toggleMenu && <h1>List of Employees</h1>}
          </div>
          <div className="submenu-item">
            <FaUserPlus size={20} />
            {!toggleMenu && <h1>Add New Employee</h1>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
