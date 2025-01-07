import React, { useState } from "react"
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
  FaClipboardCheck,
  FaUserTimes,
} from "react-icons/fa"
import "./index.css"
import { useNavigate } from "react-router-dom"
import { FiLogOut } from "react-icons/fi"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu))
  }

  const navigate = useNavigate()

  return (
    <>
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

        <div className="menu-item" onClick={() => navigate("/home")}>
          <FaTachometerAlt size={20} />
          {!toggleMenu && <h1>Dashboard</h1>}
        </div>

        <div className="menu-item" onClick={() => navigate('/payments')}>
          <FaCreditCard size={20} />
          {!toggleMenu && <h1>Payments</h1>}
        </div>

        <div className="menu-item">
          <FaCar size={20} />
          {!toggleMenu && <h1>All Cars</h1>}
        </div>

        <div className="menu-item" onClick={() => navigate('/allcustomers')}>
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

        <div className="menu-item" onClick={() => navigate("/assignorder")}>
          <FaClipboardCheck size={20} />
          {!toggleMenu && <h1>Assign Order</h1>}
        </div>

        <div className="menu-item" onClick={() => handleMenuClick("employees")}>
          <FaUserTie size={20} />
          {!toggleMenu && <h1>Employees</h1>}
        </div>
        {activeMenu === "employees" && (
          <div className="submenu">
            <div
              className="submenu-item"
              onClick={() => navigate("/employeeList")}
            >
              <FaList size={20} />
              {!toggleMenu && <h1>List of Employees</h1>}
            </div>
            <div
              className="submenu-item"
              onClick={() => navigate("/addemployeerole")}
            >
              <FaUserPlus size={20} />
              {!toggleMenu && <h1>Add Employee Role</h1>}
            </div>
            <div className="submenu-item">
              <FaUserTimes size={20} />
              {!toggleMenu && <h1>Suspended Employees</h1>}
            </div>
          </div>
        )}
        <div className="signOutBtn">
          <button type="button">
            <FiLogOut size={20} /> 
            {!toggleMenu && <>Sign Out</>}
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
