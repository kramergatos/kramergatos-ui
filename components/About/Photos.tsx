import styles from '../../styles/Photos.module.css'
export default function Photos() {
  return (
    <section id="photos">
      <div className="content_wrap_slim">
        <div className={styles.photos}>
          <img alt="Joe Kramer" src="/image/joe/joe-kramer3.jpg" />
          <img alt="Joe Kramer" src="/image/joe/joe-kramer4.jpg" />
          <img alt="Joe Kramer" src="/image/joe/joe-kramer2.jpg" />
        </div>
        <div className={styles.photos_horz}>
          <img alt="Joe Kramer" src="/image/joe/computer.jpg" />
          <img alt="Joe Kramer" src="/image/joe/computer2.jpg" />
        </div>
      </div>
    </section>
  )
}
