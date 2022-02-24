import Social from './Social'
import styles from '../../styles/Intro.module.css'
export default function Intro() {
  return (
    <section className={styles.section} id="intro">
      <div className="content_wrap_slim">
        <img alt="JKtheory logo" className={styles.logo} src="/image/joe/joe-kramer-logo.png" />
        <div className={styles.title}>
          {'{'}<br />
          <span className={styles.title_indent}>name: "Joe Kramer",</span>
          <span className={styles.title_indent}>role: "Front End Software Engineer 👨🏼‍💻",</span>
          <span className={styles.title_indent}>language: "JavaScript ⌨️",</span>
          <span className={styles.title_indent}>location: "Austin, TX 🤠"</span>
          {'}'}
        </div>
        <div className={styles.cards}>
          <a className={styles.card} href="/joe/career">
            <img className={styles.card_image} src="/image/joe/coder-min.jpeg"/>
            <span className={styles.card_label}>Career</span>
          </a>
          <a className={styles.card} href="/joe/art">
            <img className={styles.card_image} src="/image/joe/art-min.jpeg"/>
            <span className={styles.card_label}>Art</span>
          </a>
          <a className={styles.card} href="/joe/about">
            <img className={styles.card_image} src="/image/joe/aboutme-min.jpg"/>
            <span className={styles.card_label}>About Me</span>
          </a>
        </div>
      </div>
    </section>
  )
}
