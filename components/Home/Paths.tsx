import styles from '../../styles/Joe.module.css'
export default function Paths() {
  return (
    <section className={styles.section} id="paths">
      <div className="content_wrap">
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
