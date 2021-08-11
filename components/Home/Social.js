import ButtonSocial from './ButtonSocial'
import styles from '../../styles/Card.module.css'
export default function SocialAccount(props) {
  return (
    <div className={styles.card}>
      <img alt={props.data.title} className={styles.card_image} src={'/image/' + props.data.image} />
      <div className={styles.card_title}>{props.data.title}</div>
      <div className={styles.social_links}>
        <ButtonSocial network="instagram" url={props.data.url.instagram} />
        <ButtonSocial network="facebook" url={props.data.url.facebook} />
        <ButtonSocial network="tiktok" url={props.data.url.tiktok} />
      </div>
    </div>
  )
}
