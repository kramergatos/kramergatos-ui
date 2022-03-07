import React, { useState, useEffect } from 'react';
import styles from '../../styles/Intro.module.css'
export default function Intro() {
  let textArray = ["JavaScript", "HTML5", "CSS3", "NodeJS", "NextJS", "ReactJS", "MongoDB", "AWS", "MySQL", "ExpressJS", "TypeScript", "REST API", "GraphQL", "JSON", "jQuery", "D3JS"]
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    let interval = setInterval(() => {
      if (currentIndex > textArray.length-1) {
        setCurrentIndex(0)
      }else {
        setCurrentIndex(currentIndex++)
      }
    }, 800)
    return () => clearInterval(interval)
  })
  return (
    <section className={styles.section} id="intro">
      <div className="content_wrap_slim">
        <img alt="JKtheory logo" className={styles.logo} src="/image/joe/joe-kramer-logo.png" />
        <div className={styles.title}>
          {'{'}<br />
          <span className={styles.title_indent}>name: "Joe Kramer",</span>
          <span className={styles.title_indent}>role: "Front End Software Engineer 👨🏼‍💻",</span>
          <span className={styles.title_indent}>technology: "{textArray[currentIndex]}",</span>
          <span className={styles.title_indent}>location: "Austin, TX 🤠"</span>
          {'}'}
        </div>
        <div className={styles.cards}>
          <a aria-label="Career" className={styles.card} href="/joe/career">
            <img alt="Code" className={styles.card_image} src="/image/joe/coder-min.jpeg"/>
            <span className={styles.card_label}>Career</span>
          </a>
          <a aria-label="Art" className={styles.card} href="/joe/art">
            <img alt="Art" className={styles.card_image} src="/image/joe/art-min.jpeg"/>
            <span className={styles.card_label}>Art</span>
          </a>
          <a aria-label="About Me" className={styles.card} href="/joe/about">
            <img alt="Joe Kramer" className={styles.card_image} src="/image/joe/aboutme-min.jpg"/>
            <span className={styles.card_label}>About Me</span>
          </a>
        </div>
      </div>
    </section>
  )
}
