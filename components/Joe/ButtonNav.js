import React, { createContext, useState } from 'react'
import Nav from './Nav'
import styles from '../../styles/HeaderJoe.module.css'
export default function ButtonNav() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe)
  }
  return (
    <div className={styles.button} onClick={toggle}>
      <i className="fa-solid fa-bars" style={{display: showMe?"none":"block"}}></i>
      <i className="fa-solid fa-xmark" style={{display: showMe?"block":"none"}}></i>
      <div style={{display: showMe?"block":"none"}}>
        <Nav />
      </div>
    </div>
  )
}
