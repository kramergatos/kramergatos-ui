import styles from '../../styles/Header.module.css'
import React, { useState } from 'react'
export default function HeaderNav() {
  let [showNavMobile, setShowNavMobile] = useState(false)
  return (
    <div>
      <div className="desktop_only">
        <nav className={styles.nav}>
          <a href="/joe">Joe</a>
          <a href="/mali">Mali</a>
          <a href="/gear">Gear</a>
        </nav>
      </div>
      <div className="mobile_only">
        <div className={styles.nav_menu_mobile} onClick={() => setShowNavMobile(!showNavMobile)}>
          <i className="fas fa-bars" style={{display: showNavMobile ? "none" : "block"}}></i>
          <i className="fas fa-times" style={{display: showNavMobile ? "block" : "none"}}></i>
        </div>
      </div>
      <div className="mobile_only">
        <nav className={styles.nav_mobile} style={{display: showNavMobile ? "block" : "none"}}>
          <a href="/#about">About Us</a>
          <a href="/joe">Joe</a>
          <a href="/mali">Mali</a>
          <a href="/kitty">Pet Sitting</a>
          <a href="/gear">Gear</a>
        </nav>
      </div>
    </div>
  )
}
