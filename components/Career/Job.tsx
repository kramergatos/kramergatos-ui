import TagRemote from './TagRemote'
import styles from '../../styles/Jobs.module.css'
export default function Job(props) {
  return (
    <div aria-label="Job" className={styles.job}>
      <div className={styles.logo}>
        <img alt={'logo ' + props.data.company} src={'/image/company/' + props.data.logo} />
      </div>
      <div aria-label="Job Title" className={styles.title}>
        {props.data.title}
      </div>
      <div aria-label="Company" className={styles.company}>
        {props.data.company}
      </div>
      <div className={styles.tags}>
        <div aria-label="Employment Date Range" className={styles.tag}>
          <i className="far fa-calendar-alt"></i>
          <span className={styles.tag_text}>{props.data.dateStart} - {props.data.dateEnd}</span>
        </div>
        <div aria-label="Employment Type" className={styles.tag}>
          <i className="fas fa-briefcase"></i>
          <span className={styles.tag_text}>{props.data.status}</span>
        </div>
        <TagRemote remote={props.data.remote} />
        <div aria-label="Location" className={styles.tag}>
          <i className="fas fa-map-pin"></i>
          <span className={styles.tag_text}>{props.data.location}</span>
        </div>
      </div>
      <div aria-label="Job Description" className={styles.description}>
        {props.data.description}
      </div>
    </div>
  )
}