import React from "react"
import styles from "./BillInvoice.module.css"
import StatusBar from "../../Header/index"

const BillInvoice = () => {
  const calculateTotalWithTax = (rate, taxRate, duration) => {
    const taxAmount = (rate * taxRate) / 100
    const totalAmount = rate + taxAmount
    return totalAmount * duration
  }

  const date = new Date()

  const carDetails = {
    name: "Swift Dzire",
    duration: 12,
    rate: 3500,
    taxRate: 5,
  }

  const totalWithTax = calculateTotalWithTax(
    carDetails.rate,
    carDetails.taxRate,
    carDetails.duration / 12
  )

  return (
    <>
      <div className={styles.main}>
        <StatusBar className={styles.statusBar}/>
        <div className={styles.container}>
          <h2 className={styles.heading}>Bill</h2>
          <div className={styles.billBox}>
            <div className={styles.top}>
              <div className={styles.billInvoice}>Bill Invoice</div>
              <div className={styles.date}>
                Issue Date: {date.getMonth() + 1}/{date.getDate()}/
                {date.getFullYear()}
              </div>
              <hr className={styles.hLine} />
            </div>
            <div className={styles.middle}>
              <div className={styles.billFrom}>
                <div className={styles.fromDetailsB}>Bill From : </div>
                <div className={styles.fromDetails}>Swapna Self Drive Cars</div>
                <div className={styles.fromDetails}>
                  Kondapur, Hyderabad, Telangana, 500042.
                </div>
                <div className={styles.fromDetails}>
                  swapnaselfdrivecars@gmail.com
                </div>
                <div className={styles.fromDetails}>
                  8309772580 / 9550884883
                </div>
              </div>
              <div className={styles.billTo}>
                <div className={styles.toDetailsB}>Bill To : </div>
                <div className={styles.toDetails}>Mr. Ramesh</div>
                <div className={styles.toDetails}>
                  Sangamner, Hyderabad, Telangana, 500025.
                </div>
                <div className={styles.toDetails}>ramesh@gmail.com</div>
                <div className={styles.toDetails}>9987654321</div>
              </div>
            </div>
            <hr className={styles.hLine} />
            <div className={styles.bottom}>
              <div className={styles.headerBox}>
                <div className={styles.header}>Car Name</div>
                <div className={styles.header}>Time Duration</div>
                <div className={styles.header}>Rate</div>
                <div className={styles.header}>Tax</div>
                <div className={styles.header}>Amount</div>
              </div>
              <div className={styles.dataBox}>
                <div className={styles.data}>{carDetails.name}</div>
                <div className={styles.data}>{carDetails.duration} hours</div>
                <div className={styles.data}>{carDetails.rate}</div>
                <div className={styles.data}>
                  {carDetails.taxRate}% (
                  {((carDetails.rate * carDetails.taxRate) / 100).toFixed(2)})
                </div>
                <div className={styles.data}>Rs. {totalWithTax.toFixed(2)}</div>
              </div>
            </div>
            
            <div className={styles.subTotal}>
              <div className={styles.one}>
                <div className={styles.subTotalText}>Sub Total</div>
                <div className={styles.subTotalAmount}>
                  Rs. {totalWithTax.toFixed(2)}
                </div>
              </div>
              <div className={styles.one}>
                <div className={styles.subTotalText}>Discount</div>
                <div className={styles.subTotalAmount}>Rs. 0</div>
              </div>
              <div className={styles.totalSection}>
                <hr className={styles.line} />
                <div className={styles.one}>
                  <div className={styles.subTotalText}>Total</div>
                  <div className={styles.subTotalAmountF}>
                    Rs. {totalWithTax.toFixed(2)}
                  </div>
                </div>
                <hr className={styles.line} />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.shareBtn}>Share</button>
            <button type="button" className={styles.printBtn} onClick={() => window.print()}>Print</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillInvoice
