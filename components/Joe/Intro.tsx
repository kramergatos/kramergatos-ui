import React, { useState, useEffect } from 'react'
import {dataTech} from '../../data/joe'
import styles from '../../styles/Intro.module.css'
export default function Intro() {
  let [currentIndex, setCurrentIndex] = useState<number>(0)
  useEffect(() => {
    let interval = setInterval(() => {
      if (currentIndex > dataTech.length-1) {
        setCurrentIndex(0)
      }else {
        setCurrentIndex(currentIndex++)
      }
    }, 500)
    return () => clearInterval(interval)
  })
  return (
    <section className={styles.section} id="intro">
      <div className="content_wrap_slim">
        <img alt="JKtheory logo" className={styles.logo} src="/image/joe/joe-kramer-logo-black.png" />
        <div className={styles.title}>
          {'{'}<br />
          <span className={styles.title_indent}>name: "Joe Kramer",</span>
          <span className={styles.title_indent}>role: "Front End Software Engineer 👨🏼‍💻",</span>
          <span className={styles.title_indent}>technology: "{dataTech[currentIndex]}",</span>
          <span className={styles.title_indent}>location: "Austin, TX 🤠"</span>
          {'}'}
        </div>
      </div>
    </section>
  )
}
