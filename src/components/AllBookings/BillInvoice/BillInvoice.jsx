import React from 'react'
import styles from "./BillInvoice.module.css"
import StatusBar from "../../Header/index"

const BillInvoice = () => {
  return (
    <>
      <div className={styles.main}>
        <StatusBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>Bill</h2>
          <div className={styles.billBox}>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default BillInvoice
