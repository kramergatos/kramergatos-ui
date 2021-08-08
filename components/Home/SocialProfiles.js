import Social from './Social'
import styles from '../../styles/Card.module.css'
export default function SocialAccounts(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className={styles.section_title}>Channels</div>
        {props.data.social.map(item => (
          <Social data={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
