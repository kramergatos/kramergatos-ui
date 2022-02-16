import styles from '../../styles/Art.module.css'
export default function Art(props) {
  return (
    <div className={styles.art}>
      <img alt={'art work titled: ' + props.data.title} className={styles.image} src={'/image/joe/art/' + props.data.image} />
      <div className={styles.title}>
        {props.data.title}
      </div>
      <div className={styles.tags}>
        <div className={styles.tag}>
          <i className="far fa-calendar-alt"></i>
          <span className={styles.tag_text}>{props.data.date}</span>
        </div>
        <div className={styles.tag}>
          <i className="fa-solid fa-paintbrush"></i>
          <span className={styles.tag_text}>{props.data.medium}</span>
        </div>
        <div className={styles.tag}>
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          <span className={styles.tag_text}>{props.data.dimensions}</span>
        </div>
      </div>
      <div className={styles.description}>
        {props.data.description}
      </div>
    </div>
  )
}
