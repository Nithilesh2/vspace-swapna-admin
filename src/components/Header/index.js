import React, { useState } from "react"
import {
  FaChevronRight,
  FaChevronLeft,
  FaHome,
  FaMoneyBillAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaLaptop,
  FaMobileAlt,
  FaStore,
  FaQuestionCircle,
  FaCarSide,
  FaUserFriends,
  FaBook,
  FaLocationArrow,
  FaTasks,
  FaUsersCog,
  FaUserSlash,
  FaUserPlus,
  FaList,
  FaBell,
} from "react-icons/fa"
import { FiBox, FiLogOut } from "react-icons/fi"
import "./index.css"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [activeSubmenus, setActiveSubmenus] = useState({
    payments: false,
    employees: false,
    essentials: false,
  })

  const handleMenuClick = (menu) => {
    setActiveSubmenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }))
  }

  const navigate = useNavigate()

  const navigateToPaymentPage = (paymentType, subMenuType) => {
    navigate(`/payments/${paymentType}/${subMenuType}`)
  }

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
          <FaHome size={20} />
          {!toggleMenu && <h1>Dashboard</h1>}
        </div>
        <div className="menu-item">
          <FaBell size={20} />
          {!toggleMenu && <h1>New Orders</h1>}
        </div>
        <div className="menu-item" onClick={() => handleMenuClick("payments")}>
          <FaMoneyBillAlt size={20} />
          {!toggleMenu && <h1>Payments</h1>}
        </div>
        {activeSubmenus.payments && (
          <div className="submenu">
            {/* Cash Based Payments */}
            <div
              className="submenu-item"
              onClick={() => navigateToPaymentPage("cashBased", "cash")}
            >
              <FaMoneyBillWave size={20} />
              {!toggleMenu && <h1>Cash Based Payments</h1>}
            </div>

            {/* Card Based Payments */}
            <div
              className="submenu-item"
              onClick={() => navigateToPaymentPage("cardBased", "creditCards")}
            >
              <FaCreditCard size={20} />
              {!toggleMenu && <h1>Card Based Payments</h1>}
            </div>

            {/* Electronic Payments */}
            <div
              className="submenu-item"
              onClick={() =>
                navigateToPaymentPage("electronicPayments", "bankTransfer")
              }
            >
              <FaLaptop size={20} />
              {!toggleMenu && <h1>Electronic Payments</h1>}
            </div>

            {/* Mobile Payments */}
            <div
              className="submenu-item"
              onClick={() =>
                navigateToPaymentPage("mobilePayments", "digitalWallet")
              }
            >
              <FaMobileAlt size={20} />
              {!toggleMenu && <h1>Mobile Payments</h1>}
            </div>

            {/* Point of Sale Financing */}
            <div
              className="submenu-item"
              onClick={() =>
                navigateToPaymentPage("pointOfSale", "buyNowPayLater")
              }
            >
              <FaStore size={20} />
              {!toggleMenu && <h1>Point of Sale Financing</h1>}
            </div>

            {/* Others */}
            <div
              className="submenu-item"
              onClick={() =>
                navigateToPaymentPage("others", "subscriptionBilling")
              }
            >
              <FaQuestionCircle size={20} />
              {!toggleMenu && <h1>Others</h1>}
            </div>
          </div>
        )}

        {/* Other menu items */}
        <div className="menu-item" onClick={() => navigate('/allcars')}>
          <FaCarSide size={20} />
          {!toggleMenu && <h1>All Cars</h1>}
        </div>
        <div className="menu-item" onClick={() => navigate("/allcustomers")}>
          <FaUserFriends size={20} />
          {!toggleMenu && <h1>All Customers</h1>}
        </div>
        <div className="menu-item">
          <FaBook size={20} />
          {!toggleMenu && <h1>All Bookings</h1>}
        </div>
        <div className="menu-item">
          <FaLocationArrow size={20} />
          {!toggleMenu && <h1>Tracking</h1>}
        </div>
        <div className="menu-item" onClick={() => navigate("/assignorder")}>
          <FaTasks size={20} />
          {!toggleMenu && <h1>Assign Order</h1>}
        </div>
        <div className="menu-item" onClick={() => handleMenuClick("employees")}>
          <FaUsersCog size={20} />
          {!toggleMenu && <h1>Employees</h1>}
        </div>
        {activeSubmenus.employees && (
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
              <FaUserSlash size={20} />
              {!toggleMenu && <h1>Suspended Employees</h1>}
            </div>
          </div>
        )}

        <div
          className="menu-item"
          onClick={() => handleMenuClick("essentials")}
        >
          <FiBox size={20} />
          {!toggleMenu && <h1>Essentials</h1>}
        </div>
        {activeSubmenus.essentials && (
          <div className="submenu">
            <div className="submenu-item">
              <FaQuestionCircle size={20} />
              {!toggleMenu && <h1>Privacy Policy</h1>}
            </div>
            <div className="submenu-item">
              <FaBook  size={20} />
              {!toggleMenu && <h1>Terms and Conditions</h1>}
            </div>
            <div className="submenu-item">
              <FaList  size={20} />
              {!toggleMenu && <h1>FAQ's</h1>}
            </div>
          </div>
        )}

        {/* Sign Out button */}
        <div className="signOutBtn" >
          <button type="button" onClick={() => navigate('/')}>
            <FiLogOut size={20} />
            {!toggleMenu && <>Sign Out</>}
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
