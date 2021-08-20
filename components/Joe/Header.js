import ButtonSocial from '../Joe/ButtonSocial'
import styles from '../../styles/Header.module.css'
export default function Header(props) {
  return (
    <header className={styles.header_joe}>
      <div className="content_wrap_slim">
        <img alt="JKtheory logo" className={styles.logo} src="image/joe-kramer-logo.png" />
        <div className={styles.title}>Joe Kramer</div>
        <div className="social_links_joe_page">
          <div className={styles.social_links}>
            <ButtonSocial network="instagram" url={props.data.instagram} />
            <ButtonSocial network="facebook" url={props.data.facebook} />
            <ButtonSocial network="linkedin" url={props.data.linkedin} />
            <ButtonSocial network="angellist" url={props.data.angellist} />
          </div>
        </div>
      </div>
    </header>
  )
}
