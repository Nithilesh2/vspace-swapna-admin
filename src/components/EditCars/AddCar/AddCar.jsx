import React, { useState } from "react"
import styles from "./AddCar.module.css"
import Statusbar from "../../Header/index"
import { FaPlus, FaTrash } from "react-icons/fa"

const AddCar = () => {
  const [imagePreview, setImagePreview] = useState(null)
  const [carDetails, setCarDetails] = useState({
    name: "",
    passengers: "",
    bags: "",
    model: "",
    description: "",
  })
  const [prices, setPrices] = useState([""]) // Array to manage prices
  const [showModal, setShowModal] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCarDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePriceChange = (index, value) => {
    const updatedPrices = [...prices]
    updatedPrices[index] = value
    setPrices(updatedPrices)
  }

  const addPriceInput = () => {
    setPrices((prevPrices) => [...prevPrices, ""])
  }

  const removePriceInput = (index) => {
    setPrices((prevPrices) => prevPrices.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isFormValid =
      carDetails.name &&
      carDetails.passengers &&
      carDetails.bags &&
      carDetails.model &&
      carDetails.description &&
      prices.every((price) => price.trim() !== "") && // Check all prices are filled
      imagePreview

    if (!isFormValid) {
      alert(
        "Please fill in all the fields, upload an image, and enter all price ranges."
      )
      return
    }

    setShowModal(true)
  }

  const handleModalCancel = () => {
    setShowModal(false)
  }

  const handleModalSubmit = () => {
    setShowModal(false)
    setCarDetails({
      name: "",
      passengers: "",
      bags: "",
      model: "",
      description: "",
    })
    setPrices([""]) // Reset prices
    alert("Successfully added a new Car")
  }

  return (
    <>
      <div className={styles.main}>
        <Statusbar />
        <div className={styles.container}>
          <h2 className={styles.heading}>Add Car</h2>
          <form className={styles.formBox}>
            <div className={styles.carImgBox}>
              {imagePreview && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  id="preview"
                  src={imagePreview}
                  alt="Image Preview"
                  width="200"
                />
              )}
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                onChange={handleImageChange}
              />
            </div>
            <div className={styles.carDetails}>
              <input
                type="text"
                name="name"
                className={styles.aboutCar}
                required
                placeholder="Car Name"
                value={carDetails.name}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="passengers"
                className={styles.aboutCar}
                required
                placeholder="Passengers Capacity"
                min={1}
                value={carDetails.passengers}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="bags"
                className={styles.aboutCar}
                required
                placeholder="Bags Capacity"
                min={1}
                value={carDetails.bags}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="model"
                className={styles.aboutCar}
                required
                placeholder="Model"
                min={1}
                value={carDetails.model}
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                className={styles.aboutCarDesc}
                rows={5}
                placeholder="Car Description"
                value={carDetails.description}
                onChange={handleInputChange}
              />
              <div className={styles.pricesBox}>
                {prices.map((price, index) => (
                  <div className={styles.boxes} key={index}>
                    <input
                      type="text"
                      name={`price-${index}`}
                      className={styles.aboutCarPrice}
                      required
                      placeholder="Ex :- 24HRS (300 KM) - 1800 Rs"
                      value={price}
                      onChange={(e) => handlePriceChange(index, e.target.value)}
                    />
                    <div
                      className={styles.removeBtn}
                      onClick={() => removePriceInput(index)}
                    >
                      <FaTrash size={20} />
                    </div>
                  </div>
                ))}
                <div className={styles.addBtn} onClick={addPriceInput}>
                  <FaPlus size={20} />
                </div>
              </div>
            </div>
            <div className={styles.submitBtnBox}>
              <button
                type="submit"
                className={styles.submitBtn}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Confirm Car Details</h3>
            <div className={styles.modalContent}>
              <p>
                <strong>Name:</strong> {carDetails.name}
              </p>
              <p>
                <strong>Passengers:</strong> {carDetails.passengers}
              </p>
              <p>
                <strong>Bags:</strong> {carDetails.bags}
              </p>
              <p>
                <strong>Model:</strong> {carDetails.model}
              </p>
              <p>
                <strong>Description:</strong> {carDetails.description}
              </p>
              <p>
                <strong>Prices:</strong> {prices.join(", ")}
              </p>
              {imagePreview && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={imagePreview} alt="Car Image" width="200" />
              )}
            </div>
            <div className={styles.modalActions}>
              <button
                onClick={handleModalCancel}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className={styles.submitButton}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddCar
