import Social from './Social'
import styles from '../../styles/Intro.module.css'
export default function Intro() {
  return (
    <section className={styles.section} id="intro">
      <div className="content_wrap_slim">
        <img alt="JKtheory logo" className={styles.logo} src="/image/joe/joe-kramer-logo.png" />
        <div className={styles.item}>
          <img alt="Joe Kramer" className={styles.icon} src="/image/joe/joekramer.jpg"/>
          <div className={styles.label}>
            Joe Kramer
          </div>
        </div>
        <div className={styles.item}>
          <img alt="Programmer" className={styles.icon} src="/image/joe/code.png"/>
          <div className={styles.label}>
            Front End Software Engineer
          </div>
        </div>
        <div className={styles.item}>
          <img alt="JavaScript" className={styles.icon} src="/image/joe/js.png"/>
          <div className={styles.label}>
            JavaScript
          </div>
        </div>
        <div className={styles.item}>
          <img alt="Texas flag" className={styles.icon} src="/image/joe/texas.png"/>
          <div className={styles.label}>
            Austin, TX
          </div>
        </div>
        <div className={styles.cards}>
          <a className={styles.card} href="/joe/career">
            <img className={styles.card_image} src="/image/joe/binary-code.jpg"/>
            <span className={styles.card_label}>Career</span>
          </a>
          <a className={styles.card} href="/joe/art">
            <img className={styles.card_image} src="/image/joe/art.jpeg"/>
            <span className={styles.card_label}>Art</span>
          </a>
          <a className={styles.card} href="/joe/about">
            <img className={styles.card_image} src="/image/joe/aboutme.jpg"/>
            <span className={styles.card_label}>About Me</span>
          </a>
        </div>
      </div>
    </section>
  )
}
