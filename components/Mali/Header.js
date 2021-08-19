import ButtonSocial from '../Joe/ButtonSocial'
import styles from '../../styles/Header.module.css'
export default function Header(props) {
  return (
    <header className={styles.header_mali}>
      <div className="content_wrap_slim">
        <div className={styles.title}>Mali Kramer</div>
          <div className={styles.social_links}>
          <ButtonSocial network="instagram" url={props.data.instagram} />
          <ButtonSocial network="facebook" url={props.data.facebook} />
          <ButtonSocial network="linkedin" url={props.data.linkedin} />
          <ButtonSocial network="angellist" url={props.data.angellist} />
        </div>
      </div>
    </header>
  )
}
