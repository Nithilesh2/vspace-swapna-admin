import React from "react"
import SingleCar from "./SingleCar"
import styles from "./Cars.module.css"

const Cars = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.allCarsName}>All Cars</div>
        <div className={styles.allCars}>
          <SingleCar imgSrc='https://www.seekpng.com/png/full/258-2589471_swift-car-png.png' imgAlt='Swift' imgName='Swift'/>
          <SingleCar imgSrc='https://www.carsized.com/resources/hyundai/i20/d/2014/sl_246111089_hyundai-i20-2014-side-view_4x.png' imgAlt='i20' imgName='i20'/>
          <SingleCar imgSrc='https://res.cloudinary.com/dagkvnqd9/image/upload/v1735673852/used-maruti-suzuki-car-500x500-removebg-preview_aqdrpd.png' imgAlt='Ritz' imgName='Ritz'/>
          <SingleCar imgSrc='https://www.carblogindia.com/wp-content/uploads/2017/04/ford-figo-s-white-official-image-side.png' imgAlt='Ford Figo' imgName='Ford Figo'/>
          <SingleCar imgSrc='https://res.cloudinary.com/dagkvnqd9/image/upload/v1735674023/R-removebg-preview_kgqpgq.png' imgAlt='Ford Aspire' imgName='Ford Aspire'/>
          <SingleCar imgSrc='https://toppng.com/uploads/preview/maruti-suzuki-dzire-car-color-ford-crown-victoria-side-view-11562993605wszxnzlruh.png' imgAlt='Swift Dzire' imgName='Swift Dzire'/>
          <SingleCar imgSrc='https://www.carsized.com/resources/ford/ecosport/d/2017/sm_280111106_ford-ecosport-2017-side-view_4x.png' imgAlt='EcoSport' imgName='EcoSport'/>
          <SingleCar imgSrc='https://www.kia.com/content/dam/kwcms/gt/en/images/showroom/sonet-qy-22my-rhd/360/Exterior/clear_white/01.png' imgAlt='Kia Sonet' imgName='Kia Sonet'/>
        </div>
      </div>
    </>
  )
}

export default Cars
