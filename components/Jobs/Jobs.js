import Job from './Job'
import styles from '../../styles/Jobs.module.css'
export default function Jobs(props) {
  let resume = null
  let coverLetter = null
  if(props.data.resume != undefined) {
    resume = (
      <a className="button" href={'/download/' + props.data.resume} target="_blank">
        <span className="fa fa-file-pdf"></span>
        <span className="button_label">Resume</span>
      </a>
    )
  }
  if(props.data.coverLetter != undefined) {
    coverLetter = (
      <a className="button" href={'/download/' + props.data.coverLetter} target="_blank">
        <span className="fa fa-file-pdf"></span>
        <span className="button_label">Cover Letter</span>
      </a>
    )
  }
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Career</div>
        {resume}
        {coverLetter}
        <div className={styles.jobs}>
          {props.data.jobs.map(item => (
            <Job data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
