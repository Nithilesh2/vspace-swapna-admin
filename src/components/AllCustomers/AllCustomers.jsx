import React, { useState } from "react";
import styles from "./AllCustomers.module.css";
import Sidebar from "../Header/index"

const AllCustomers = () => {
  const [customers] = useState([
    { id: 1, name: "Rajesh Kumar", email: "rajesh.kumar@example.com", contact: "9876543210" },
    { id: 2, name: "Priya Sharma", email: "priya.sharma@example.com", contact: "8765432109" },
    { id: 3, name: "Amit Patel", email: "amit.patel@example.com", contact: "7654321098" },
    { id: 4, name: "Sneha Iyer", email: "sneha.iyer@example.com", contact: "9123456780" },
    { id: 5, name: "Vikas Verma", email: "vikas.verma@example.com", contact: "8987654321" },
    { id: 6, name: "Anjali Nair", email: "anjali.nair@example.com", contact: "9345678123" },
    { id: 7, name: "Ravi Singh", email: "ravi.singh@example.com", contact: "9987654321" },
    { id: 8, name: "Neha Gupta", email: "neha.gupta@example.com", contact: "9123487654" },
    { id: 9, name: "Kiran Das", email: "kiran.das@example.com", contact: "9876123456" },
  ]);
  


  return (
    <>
    <div className={styles.main}>
    <Sidebar />
      <div className={styles.container}>
      <h2 className={styles.heading}>All Customers</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.contact}</td>
              <td>
                <button
                  className={styles.actionButton}
                >
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default AllCustomers;