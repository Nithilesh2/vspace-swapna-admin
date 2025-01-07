import React, { useState } from "react"
import styles from "./Payments.module.css"
import Sidebar from "../Header/index"

const Payments = () => {
  const [selectedPayment, setSelectedPayment] = useState(null)

  const handlePaymentSelection = (paymentId) => {
    setSelectedPayment(paymentId)
  }

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.container}>
          <h2 className={styles.heading}>Payment Modes</h2>
          <div className={styles.payments}>
            <div className={styles.paymentMode}>
              <input
                type="radio"
                className={styles.checkBox}
                id="customRadiobox1"
                name="paymentMode"
                checked={selectedPayment === "customRadiobox1"}
                onChange={() => handlePaymentSelection("customRadiobox1")}
              />
              <label
                htmlFor="customRadiobox1"
                className={styles.paymentModeHeader}
              >
                Cash Based Payments
              </label>
            </div>
            <hr className={styles.hLine}/>
            <div className={styles.paymentMode}>
              <input
                type="radio"
                className={styles.checkBox}
                id="customRadiobox2"
                name="paymentMode"
                checked={selectedPayment === "customRadiobox2"}
                onChange={() => handlePaymentSelection("customRadiobox2")}
              />
              <label
                htmlFor="customRadiobox2"
                className={styles.paymentModeHeader}
              >
                Card Based Payments
              </label>
            </div>
            <hr className={styles.hLine}/>
            <div className={styles.paymentMode}>
              <input
                type="radio"
                className={styles.checkBox}
                id="customRadiobox3"
                name="paymentMode"
                checked={selectedPayment === "customRadiobox3"}
                onChange={() => handlePaymentSelection("customRadiobox3")}
              />
              <label
                htmlFor="customRadiobox3"
                className={styles.paymentModeHeader}
              >
                Electronic Based Payments
              </label>
            </div>
            <hr className={styles.hLine}/>
            <div className={styles.paymentMode}>
              <input
                type="radio"
                className={styles.checkBox}
                id="customRadiobox4"
                name="paymentMode"
                checked={selectedPayment === "customRadiobox4"}
                onChange={() => handlePaymentSelection("customRadiobox4")}
              />
              <label
                htmlFor="customRadiobox4"
                className={styles.paymentModeHeader}
              >
                Mobile Based Payments
              </label>
            </div>
            <hr className={styles.hLine}/>
            <div className={styles.paymentMode}>
              <input
                type="radio"
                className={styles.checkBox}
                id="customRadiobox5"
                name="paymentMode"
                checked={selectedPayment === "customRadiobox5"}
                onChange={() => handlePaymentSelection("customRadiobox5")}
              />
              <label
                htmlFor="customRadiobox5"
                className={styles.paymentModeHeader}
              >
                Point of Sale Financing
              </label>
            </div>
            <hr className={styles.hLine}/>
            <div className={styles.paymentMode}>
              <input
                type="radio"
                className={styles.checkBox}
                id="customRadiobox6"
                name="paymentMode"
                checked={selectedPayment === "customRadiobox6"}
                onChange={() => handlePaymentSelection("customRadiobox6")}
              />
              <label
                htmlFor="customRadiobox6"
                className={styles.paymentModeHeader}
              >
                Others
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payments
