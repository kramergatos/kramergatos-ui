import Button from './Button'
import styles from '../../styles/Card.module.css'
export default function Buttons(props) {
  return (
    <div className={styles.social_links}>
      <Button network="instagram" url={props.data.instagram} />
      <Button network="facebook" url={props.data.facebook} />
      <Button network="tiktok" url={props.data.tiktok} />
      <Button network="linkedin" url={props.data.linkedin} />
      <Button network="angellist" url={props.data.angellist} />
      <Button network="amazon" url={props.data.cart} />
    </div>
  )
}
