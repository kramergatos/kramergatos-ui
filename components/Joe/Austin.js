import Map from './Map'
import styles from '../../styles/Joe.module.css'
export default function Austin() {
  return (
    <section className={styles.section_austin} id="about">
      <div className="content_wrap">
        <div className="section_title">
          <div className="section_title_text">
            Austin
          </div>
        </div>
        <img alt="Austin Texas street art" className={styles.austin} src="/image/joe/austin.jpg" />
        <div className={styles.map_container}>
          <Map />
        </div>
      </div>
    </section>
  )
}
