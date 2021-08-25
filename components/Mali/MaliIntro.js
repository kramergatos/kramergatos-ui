import ButtonSocial from '../Joe/ButtonSocial'
import styles from '../../styles/Joe.module.css'
export default function Intro(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Mali Kramer</div>
        <div className={styles.social_links}>
          <ButtonSocial network="instagram" url={props.data.instagram} />
          <ButtonSocial network="facebook" url={props.data.facebook} />
          <ButtonSocial network="linkedin" url={props.data.linkedin} />
          <ButtonSocial network="angellist" url={props.data.angellist} />
        </div>
        <p>On the journey to create amazing content and experiences</p>
      </div>
    </section>
  )
}
