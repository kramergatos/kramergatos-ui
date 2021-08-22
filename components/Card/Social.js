import ButtonSocial from './ButtonSocial'
import styles from '../../styles/Card.module.css'
export default function Social(props) {
  return (
    <div className={styles.social_links}>
      <ButtonSocial network="instagram" url={props.data.instagram} />
      <ButtonSocial network="facebook" url={props.data.facebook} />
      <ButtonSocial network="tiktok" url={props.data.tiktok} />
      <ButtonSocial network="linkedin" url={props.data.linkedin} />
      <ButtonSocial network="angellist" url={props.data.angellist} />
    </div>
  )
}
