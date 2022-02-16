import styles from '../../styles/Joe.module.css'
export default function Hobbies() {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Hobbies
          </div>
        </div>
        <div className={styles.photos}>
          <img alt="Hiking" src="/image/joe/hiking.JPG" />
          <img alt="Racquetball" src="/image/joe/joe-kramer4.jpg" />
          <img alt="Photographing Graffiti" src="/image/joe/joe-kramer2.jpg" />
          <img alt="Art" src="/image/joe/joe-kramer3.jpg" />
          <img alt="Traveling" src="/image/joe/joe-kramer3.jpg" />
          <img alt="Cooking" src="/image/joe/joe-kramer3.jpg" />
        </div>
      </div>
    </section>
  )
}
