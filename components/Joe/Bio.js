import styles from '../../styles/Joe.module.css'
export default function Bio() {
  return (
    <section id="about">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            About Me
          </div>
        </div>
        <div className={styles.about}>
          I specialize in designing and building custom, high traffic, enterprise level applications from scratch. My career has been developing innovative and award winning next generation technologies and experiences. I have cultivated many valuable skills over my sixteen years in the tech industry. While I have a diverse set of skills, I still absolutely love coding. I’m a thoroughbred engineer ready to take on any challenge.
        </div>
      </div>
    </section>
  )
}
