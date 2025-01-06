import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "./EmployeeCard.module.css";

const EmployeeCard = ({ id, name, email, designation, isSuspended, handleSuspend }) => {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <div className={styles.profileIcon}>
          <FaUserCircle size={60} />
        </div>
        <h2>ID: {id}</h2>
        <p><b>Name</b>: {name}</p>
        <p><b>Designation</b>: {designation}</p>
        <p><b>Email</b>: {email}</p>
      </div>
      <div className={styles.actions}>
        <button
          className={`${styles.suspendBtn} ${isSuspended ? styles.suspended : ""}`}
          onClick={() => handleSuspend(id)}
        >
          {isSuspended ? "Suspended" : "Suspend"}
        </button>
        <button className={styles.editBtn}>Edit</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
