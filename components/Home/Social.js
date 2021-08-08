import styles from '../../styles/Card.module.css'
export default function SocialAccount(props) {
  return (
    <div className={styles.card}>
      <img alt={props.data.title} className={styles.card_image} src={'/image/' + props.data.image} />
      <div className={styles.card_title}>{props.data.title}</div>
      <div className={styles.social_links}>
        <a className={styles.social_link} href={props.data.url.instagram} target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a className={styles.social_link} href={props.data.url.facebook} target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  )
}
