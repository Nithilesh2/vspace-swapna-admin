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
  FaInfoCircle,
  FaPlusCircle,
  FaEdit,
  FaEnvelope,
  FaPen,
  FaUser,
} from "react-icons/fa"
import { FiBox, FiLogOut } from "react-icons/fi"
import "./index.css"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true)
  const [activeSubmenus, setActiveSubmenus] = useState({
    payments: false,
    employees: false,
    essentials: false,
    editCars: false,
  })

  const [logoImage, setLogoImage] = useState(
    "https://res.cloudinary.com/dagkvnqd9/image/upload/v1726917662/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
  )
  const [isEditing, setIsEditing] = useState(false)

  const handleMenuClick = (menu) => {
    setActiveSubmenus((prevState) => {
      const updatedState = {
        ...prevState,
        [menu]: !prevState[menu],
      }
      return updatedState
    })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoImage(reader.result)
        setIsEditing(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEditClick = () => {
    setIsEditing(true)
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
        <div className="bottomMenu">
          <div
            className="imgBox"
            style={{ display: "flex", position: "relative" }}
          >
            {!toggleMenu && (
              <>
                <img
                  onClick={() => navigate("/home")}
                  src={logoImage}
                  alt="logo"
                  className="swapna-logo"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    height: 34,
                    width: 34,
                    border: "2px solid black",
                    position: "absolute",
                    right: 30,
                    borderRadius: 30,
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleEditClick}
                >
                  <FaPen size={16} />
                </div>
                {isEditing && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "30px",
                      cursor: "pointer",
                      backgroundColor: "white",
                      height: "150px",
                      width: "150px",
                    }}
                  />
                )}
              </>
            )}
          </div>

          <div
            className="menu-item"
            onClick={() => navigate("/home")}
            title="Dashboard"
          >
            <FaHome size={20} />
            {!toggleMenu && <h1>Dashboard</h1>}
          </div>
          <div
            className="menu-item"
            onClick={() => navigate("/neworders")}
            title="New Orders"
          >
            <FaBell size={20} />
            {!toggleMenu && <h1>New Orders</h1>}
          </div>
          <div
            className={`menu-item ${activeSubmenus.payments ? "active" : ""}`}
            onClick={() => handleMenuClick("payments")}
            title="Payments"
          >
            <FaMoneyBillAlt size={20} />
            {!toggleMenu && (
              <h1>
                <b>Payments</b>
              </h1>
            )}
          </div>
          {activeSubmenus.payments && (
            <div className="submenu">
              <div
                className="submenu-item"
                onClick={() => navigateToPaymentPage("cashBased", "cash")}
                title="Cash Based Payments"
              >
                <FaMoneyBillWave size={20} />
                {!toggleMenu && <h1>Cash Based Payments</h1>}
              </div>

              <div
                className="submenu-item"
                onClick={() =>
                  navigateToPaymentPage("cardBased", "creditCards")
                }
                title="Card Based Payments"
              >
                <FaCreditCard size={20} />
                {!toggleMenu && <h1>Card Based Payments</h1>}
              </div>

              <div
                className="submenu-item"
                onClick={() =>
                  navigateToPaymentPage("electronicPayments", "bankTransfer")
                }
                title="Electronic Payments"
              >
                <FaLaptop size={20} />
                {!toggleMenu && <h1>Electronic Payments</h1>}
              </div>

              <div
                className="submenu-item"
                onClick={() =>
                  navigateToPaymentPage("mobilePayments", "digitalWallet")
                }
                title="Mobile Payments"
              >
                <FaMobileAlt size={20} />
                {!toggleMenu && <h1>Mobile Payments</h1>}
              </div>

              <div
                className="submenu-item"
                onClick={() =>
                  navigateToPaymentPage("pointOfSale", "buyNowPayLater")
                }
                title="Point of Sale Financing"
              >
                <FaStore size={20} />
                {!toggleMenu && <h1>Point of Sale Financing</h1>}
              </div>

              <div
                className="submenu-item"
                onClick={() =>
                  navigateToPaymentPage("others", "subscriptionBilling")
                }
                title="Others"
              >
                <FaQuestionCircle size={20} />
                {!toggleMenu && <h1>Others</h1>}
              </div>
            </div>
          )}

          <div
            className="menu-item"
            onClick={() => navigate("/allcars")}
            title="All Cars"
          >
            <FaCarSide size={20} />
            {!toggleMenu && <h1>All Cars</h1>}
          </div>
          <div
            className={`menu-item ${activeSubmenus.editCars ? "active" : ""}`}
            onClick={() => handleMenuClick("editCars")}
            title="Edit Cars"
          >
            <FaCarSide size={20} />
            {!toggleMenu && (
              <h1>
                <b>Edit Cars</b>
              </h1>
            )}
          </div>
          {activeSubmenus.editCars && (
            <div className="submenu">
              <div
                className="submenu-item"
                onClick={() => navigate("/editcars/addcar")}
                title="Add a new Car"
              >
                <FaPlusCircle size={20} />
                {!toggleMenu && <h1>Add a new Car</h1>}
              </div>
              <div
                className="submenu-item"
                onClick={() => navigate("/editcars/editcar")}
                title="Cars List"
              >
                <FaEdit size={20} />
                {!toggleMenu && <h1>Cars List</h1>}
              </div>
            </div>
          )}
          <div
            className="menu-item"
            onClick={() => navigate("/allcustomers")}
            title="All Customers"
          >
            <FaUserFriends size={20} />
            {!toggleMenu && <h1>All Customers</h1>}
          </div>
          <div
            className="menu-item"
            onClick={() => navigate("/allbookings")}
            title="All Bookings"
          >
            <FaBook size={20} />
            {!toggleMenu && <h1>All Bookings</h1>}
          </div>
          <div className="menu-item" title="Tracking">
            <FaLocationArrow size={20} />
            {!toggleMenu && <h1>Tracking</h1>}
          </div>
          <div
            className="menu-item"
            onClick={() => navigate("/assignorder")}
            title="Assign Order"
          >
            <FaTasks size={20} />
            {!toggleMenu && <h1>Assign Order</h1>}
          </div>
          <div
            className={`menu-item ${activeSubmenus.employees ? "active" : ""}`}
            onClick={() => handleMenuClick("employees")}
            title="Employees"
          >
            <FaUsersCog size={20} />
            {!toggleMenu && (
              <h1>
                <b>Employees</b>
              </h1>
            )}
          </div>
          {activeSubmenus.employees && (
            <div className="submenu">
              <div
                className="submenu-item"
                onClick={() => navigate("/employeeList")}
                title="List of employees"
              >
                <FaList size={20} />
                {!toggleMenu && <h1>List of Employees</h1>}
              </div>
              <div
                className="submenu-item"
                onClick={() => navigate("/addemployeerole")}
                title="Add Employee Role"
              >
                <FaUserPlus size={20} />
                {!toggleMenu && <h1>Add Employee Role</h1>}
              </div>
              <div className="submenu-item" title="Suspend Employees">
                <FaUserSlash size={20} />
                {!toggleMenu && <h1>Suspended Employees</h1>}
              </div>
            </div>
          )}

          <div
            className={`menu-item ${activeSubmenus.essentials ? "active" : ""}`}
            onClick={() => handleMenuClick("essentials")}
            title="Essentials"
          >
            <FiBox size={20} />
            {!toggleMenu && (
              <h1>
                <b>Essentials</b>
              </h1>
            )}
          </div>
          {activeSubmenus.essentials && (
            <div className="submenu">
              <div
                className="submenu-item"
                onClick={() => navigate("/essentials/privacypolicy")}
                title="Privacy Policy"
              >
                <FaQuestionCircle size={20} />
                {!toggleMenu && <h1>Privacy Policy</h1>}
              </div>
              <div
                className="submenu-item"
                onClick={() => navigate("/essentials/termsandconditions")}
                title="Terms And Conditions"
              >
                <FaBook size={20} />
                {!toggleMenu && <h1>Terms and Conditions</h1>}
              </div>
              <div
                className="submenu-item"
                onClick={() => navigate("/essentials/faqs")}
                title="FAQ's"
              >
                <FaList size={20} />
                {!toggleMenu && <h1>FAQ's</h1>}
              </div>
            </div>
          )}
          <div
            className="menu-item"
            onClick={() => navigate("/aboutus")}
            title="About Us"
          >
            <FaInfoCircle size={20} />
            {!toggleMenu && <h1>About Us</h1>}
          </div>
          <div
            className="menu-item"
            onClick={() => navigate("/contactus")}
            title="Contact Us"
          >
            <FaEnvelope size={20} />
            {!toggleMenu && <h1>Contact Us</h1>}
          </div>
          <div
            className="menu-item"
            onClick={() => navigate("/profile")}
            title="Profile"
          >
            <FaUser size={20} />
            {!toggleMenu && <h1>Profile</h1>}
          </div>

          {/* Sign Out button */}
          <div className="signOutBtn">
            <button type="button" onClick={() => navigate("/")}>
              <FiLogOut size={20} />
              {!toggleMenu && <>Sign Out</>}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
