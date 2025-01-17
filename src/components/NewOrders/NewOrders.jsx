import React, { useState } from "react"
import StatusBar from "../Header/index"
import styles from "./NewOrders.module.css"
import No_Orders from "../../assests/no-order-3-256 (1).png"

const NewOrders = () => {
  const [newOrders] = useState([])

  return (
    <>
      <div className={styles.main}>
        <StatusBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>New Orders</h2>
          <div className={styles.newOrdersBox}>
            {newOrders.length === 0 ? (
              <>
                <img src={No_Orders} alt="No new orders" />
                <p className={styles.noOrdersText}>
                  Currently, there are no new orders. Please check back later or
                  contact support if you need assistance.
                </p>
              </>
            ) : (
              <p>No new orders</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewOrders
