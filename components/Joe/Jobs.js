import Job from './Job'
import styles from '../../styles/Jobs.module.css'
export default function Jobs(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Career</div>
        <a className={styles.button_download} href="/download/JoeKramerResume.pdf" target="_blank">
          <span className="fa fa-file-pdf"></span>
          <span className={styles.button_label}>Resume</span>
        </a>
        <div className={styles.jobs}>
          {props.data.map(item => (
            <Job data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
