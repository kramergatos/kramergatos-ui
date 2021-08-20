import Job from './Job'
import styles from '../../styles/Jobs.module.css'
export default function Jobs(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Career</div>
        <a className="button" href="/download/JoeKramerResume.pdf" target="_blank">
          <span className="fa fa-file-pdf"></span>
          <span className="button_label">Resume</span>
        </a>
        <a className="button" href="/download/JoeKramerCoverLetter.pdf" target="_blank">
          <span className="fa fa-file-pdf"></span>
          <span className="button_label">Cover Letter</span>
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
