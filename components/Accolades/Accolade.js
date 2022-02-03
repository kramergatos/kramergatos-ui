import TagRemote from './TagRemote'
import styles from '../../styles/Jobs.module.css'
export default function Job(props) {
  return (
    <div className={styles.job}>
      <div className={styles.logo}>
        <img alt={'logo ' + props.data.company} src={'/image/company/' + props.data.logo} />
      </div>
      <div className={styles.title}>
        {props.data.title}
      </div>
      <div className={styles.company}>
        {props.data.company}
      </div>
      <div className={styles.tags}>
        <div className={styles.tag}>
          <i className="far fa-calendar-alt"></i>
          <span className={styles.tag_text}>{props.data.dateStart} - {props.data.dateEnd}</span>
        </div>
        <div className={styles.tag}>
          <i className="fas fa-briefcase"></i>
          <span className={styles.tag_text}>{props.data.status}</span>
        </div>
        <TagRemote remote={props.data.remote} />
        <div className={styles.tag}>
          <i className="fas fa-map-pin"></i>
          <span className={styles.tag_text}>{props.data.location}</span>
        </div>
      </div>
      <div className={styles.description}>
        {props.data.description}
      </div>
    </div>
  )
}
