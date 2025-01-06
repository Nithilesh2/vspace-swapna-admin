import React from 'react'
import styles from "./SingleCar.module.css"

const SingleCar = (props) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.carImage}>
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div className={styles.carName}>{props.imgName}</div>
      </div>
    </>
  )
}

export default SingleCar
