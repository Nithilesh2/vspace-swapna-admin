import React, { useState } from "react"
import EmployeeCard from "./EmployeeCard "
import styles from "./EmployeeList.module.css"
import Sidebar from "../../Header/index"

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 12345,
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      designation: "Software Engineer",
    },
    {
      id: 54321,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      designation: "Product Manager",
    },
    {
      id: 67890,
      name: "Anil Mehta",
      email: "anil.mehta@example.com",
      designation: "Designer",
    },
    {
      id: 23456,
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      designation: "QA Engineer",
    },
    {
      id: 98765,
      name: "Amit Verma",
      email: "amit.verma@example.com",
      designation: "DevOps Engineer",
    },
    {
      id: 34567,
      name: "Neha Singh",
      email: "neha.singh@example.com",
      designation: "HR Manager",
    },
    {
      id: 45678,
      name: "Vikas Gupta",
      email: "vikas.gupta@example.com",
      designation: "Marketing Specialist",
    },
  ])

  const [showPopup, setShowPopup] = useState(false)
  const [password, setPassword] = useState("")
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
  const [errorMessage, setErrorMessage] = useState("") 

  const handleSuspend = (id) => {
    setSelectedEmployeeId(id)
    setShowPopup(true)
    setErrorMessage("") 
  }

  const handleConfirmSuspend = () => {
    if (password === "admin123") {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== selectedEmployeeId)
      )
      setShowPopup(false)
      alert("Employee suspended successfully!")
    } else {
      setErrorMessage("Incorrect password!")
    }
  }

  const handleCancel = () => {
    setShowPopup(false)
  }

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.employeeList}>
          <div className={styles.employeeListContainer}>
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                id={employee.id}
                name={employee.name}
                email={employee.email}
                designation={employee.designation}
                handleSuspend={handleSuspend}
              />
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={`${styles.popup} ${showPopup ? styles.show : ""}`}>
          <div className={styles.popupContent}>
            <h3>Enter your password to confirm suspension</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.popupInput}
              placeholder="Password"
            />
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} {/* Show error message */}
            <div className={styles.popupActions}>
              <button onClick={handleCancel} className={styles.noBtn}>
                No
              </button>
              <button onClick={handleConfirmSuspend} className={styles.yesBtn}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmployeeList
