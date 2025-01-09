import React from "react"
import StatusBar from "../Header/index"
import styles from "./NewOrders.module.css"
// import { No_Orders } from "../../../public/no-order-3-256 (1).png"

const NewOrders = () => {
  // const [newOrders, setNewOrders] = useState({})

  return (
    <>
      <div className={styles.main}>
        <StatusBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>New Orders</h2>
          <div className={styles.newOrdersBox}>
            {/* {newOrders.length === 0 ? <img src={No_Orders} alt="imagePic"/> : ""} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewOrders
