import ButtonSocial from './ButtonSocial'
import styles from '../../styles/Card.module.css'
export default function Member(props) {
  return (
    <div className={styles.card_member}>
      <a href={props.data.url.page}>
        <img alt={props.data.name} className={styles.card_image} src={'/image/' + props.data.image} />
        <span className={styles.card_title}>
          {props.data.name}
        </span>
      </a>
      <div className={styles.social_links}>
        <ButtonSocial network="instagram" url={props.data.url.instagram} />
        <ButtonSocial network="facebook" url={props.data.url.facebook} />
        <ButtonSocial network="linkedin" url={props.data.url.linkedin} />
        <ButtonSocial network="angellist" url={props.data.url.angellist} />
      </div>
    </div>
  )
}
