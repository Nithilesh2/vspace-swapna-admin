import React, { useState } from "react"
import styles from "./AllBookings.module.css"
import StatusBar from "../Header/index"
import { FaEllipsisV } from "react-icons/fa"

const AllBookings = () => {
  const [allBookingsData] = useState([
    {
      bookingId: 1234,
      customerName: "Priya Sharma",
      carBooked: "Swift",
      bookedFrom: "10/11/2024",
      bookedTo: "12/11/2024",
      totalCost: 2400,
    },
    {
      bookingId: 1235,
      customerName: "Rahul Verma",
      carBooked: "Hyundai i20",
      bookedFrom: "15/11/2024",
      bookedTo: "17/11/2024",
      totalCost: 3200,
    },
    {
      bookingId: 1236,
      customerName: "Anjali Gupta",
      carBooked: "Maruti Alto",
      bookedFrom: "20/11/2024",
      bookedTo: "22/11/2024",
      totalCost: 1800,
    },
    {
      bookingId: 1237,
      customerName: "Rajesh Singh",
      carBooked: "Honda City",
      bookedFrom: "25/11/2024",
      bookedTo: "28/11/2024",
      totalCost: 5400,
    },
    {
      bookingId: 1238,
      customerName: "Pooja Mehta",
      carBooked: "Toyota Innova",
      bookedFrom: "01/12/2024",
      bookedTo: "05/12/2024",
      totalCost: 7500,
    },
    {
      bookingId: 1239,
      customerName: "Karan Malhotra",
      carBooked: "Ford EcoSport",
      bookedFrom: "08/12/2024",
      bookedTo: "10/12/2024",
      totalCost: 4200,
    },
    {
      bookingId: 1240,
      customerName: "Meera Nair",
      carBooked: "Tata Nexon",
      bookedFrom: "12/12/2024",
      bookedTo: "14/12/2024",
      totalCost: 3900,
    },
    {
      bookingId: 1241,
      customerName: "Siddharth Rao",
      carBooked: "Kia Seltos",
      bookedFrom: "18/12/2024",
      bookedTo: "20/12/2024",
      totalCost: 4600,
    },
    {
      bookingId: 1242,
      customerName: "Neha Jain",
      carBooked: "MG Hector",
      bookedFrom: "22/12/2024",
      bookedTo: "25/12/2024",
      totalCost: 6200,
    },
    {
      bookingId: 1243,
      customerName: "Amit Tiwari",
      carBooked: "Volkswagen Polo",
      bookedFrom: "28/12/2024",
      bookedTo: "30/12/2024",
      totalCost: 3400,
    },
  ])

  return (
    <>
      <div className={styles.main}>
        <StatusBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>All Bookings</h2>
          <div className={styles.allBookingsBox}>
            <div className={styles.filterBox}>
              <input type="date" name="from" className={styles.fromAndTo} />
              <label className={styles.to}>To</label>
              <input type="date" name="from" className={styles.fromAndTo} />
            </div>
            <div className={styles.allBookings}>
              <div className={styles.allBookingsHeading}>
                <div className={styles.bookingHeadings}>Booking ID</div>
                <div className={styles.bookingHeadings}>Customer Name</div>
                <div className={styles.bookingHeadings}>Car Booked</div>
                <div className={styles.bookingHeadings}>Booked From</div>
                <div className={styles.bookingHeadings}>Booked To</div>
                <div className={styles.bookingHeadings}>Total Cost</div>
                <div className={styles.bookingHeadings}>Action</div>
              </div>
              <div className={styles.allBookingsData}>
                {allBookingsData.map((booking, index) => (
                  <div key={index} className={styles.booking}>
                    <div className={styles.bookingData}>
                      {booking.bookingId}
                    </div>
                    <div className={styles.bookingData}>
                      {booking.customerName}
                    </div>
                    <div className={styles.bookingData}>
                      {booking.carBooked}
                    </div>
                    <div className={styles.bookingData}>
                      {booking.bookedFrom}
                    </div>
                    <div className={styles.bookingData}>{booking.bookedTo}</div>
                    <div className={styles.bookingData}>
                      {booking.totalCost}
                    </div>
                    <div className={styles.bookingData}>
                      <FaEllipsisV size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllBookings
