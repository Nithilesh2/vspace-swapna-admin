import React, { useState } from "react"
import styles from "./Profile.module.css"
import StatusBar from "../Header/index"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Profile = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showCnfrmPassword, setShowCnfrmPassword] = useState(false)

  const handleSubmit = (eve) => {
    eve.preventDefault()

    if(password === confirmPassword){
      if(password.length >= 8){
        alert('password updated successfully')
        setPassword("")
        setConfirmPassword("")
        setShowPassword(false)
        setShowCnfrmPassword(false)
      }
      else{
        alert('Password should be at least 8 characters long')
      }
    }
    else{
      alert('Passwords do not match')
    }
  }

  return (
    <>
      <div className={styles.main}>
        <StatusBar />
        <div className={styles.container}>
          <h2 className={styles.heading}>Profile</h2>
          <form className={styles.passwordBox}>
            <h2 className={styles.changePass}>Change Password</h2>
            <div className={styles.pass}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={styles.passAndCnfrmPass}
              />
              {showPassword ? (
                <FaEyeSlash
                  size={20}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  size={20}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className={styles.pass}>
              <input
                type={showCnfrmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className={styles.passAndCnfrmPass}
              />
              {showCnfrmPassword ? (
                <FaEyeSlash
                  size={20}
                  onClick={() => setShowCnfrmPassword(!showCnfrmPassword)}
                />
              ) : (
                <FaEye
                  size={20}
                  onClick={() => setShowCnfrmPassword(!showCnfrmPassword)}
                />
              )}
            </div>
            <div className={styles.buttonBox}>
              <button type="button" className={styles.btn} onClick={handleSubmit}>
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile
