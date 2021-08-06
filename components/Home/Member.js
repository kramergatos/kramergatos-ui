import styles from '../../styles/Card.module.css'
export default function Member(props) {
  return (
    <div className={styles.card_member}>
      <img alt={props.data.name} className={styles.card_image} src={'/image/' + props.data.image} />
      <div className={styles.card_title}>
        {props.data.name}
      </div>
      <div className={styles.social_links}>
        <a className={styles.social_link} href={props.data.url.instagram} target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a className={styles.social_link} href={props.data.url.facebook} target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className={styles.social_link} href={props.data.url.linkedin} target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className={styles.social_link} href={props.data.url.angellist} target="_blank">
          <i className="fab fa-angellist"></i>
        </a>
      </div>
    </div>
  )
}
