import Job from './Job'
import styles from '../../styles/Jobs.module.css'
export default function Jobs(props) {
  let resumeHumanReadable = null
  let resumeMachineReadable = null
  let coverLetterHumanReadable = null
  let coverLetterMachineReadable = null
  if(props.data.resumeHumanReadable != undefined) {
    resumeHumanReadable = (
      <a className="button" href={'/download/' + props.data.resumeHumanReadable} target="_blank">
        <span className="fa fa-file-pdf"></span>
        <span className="button_label">Resume</span>
        <span className="button_sublabel">Human Readable</span>
      </a>
    )
  }
  if(props.data.resumeMachineReadable != undefined) {
    resumeMachineReadable = (
      <a className="button" href={'/download/' + props.data.resumeMachineReadable} target="_blank">
        <span className="fa fa-file-word"></span>
        <span className="button_label">Resume</span>
        <span className="button_sublabel">Machine Readable</span>
      </a>
    )
  }
  if(props.data.coverLetterHumanReadable != undefined) {
    coverLetterHumanReadable = (
      <a className="button" href={'/download/' + props.data.coverLetterHumanReadable} target="_blank">
        <span className="fa fa-file-pdf"></span>
        <span className="button_label">Cover Letter</span>
        <span className="button_sublabel">Human Readable</span>
      </a>
    )
  }
  if(props.data.coverLetterMachineReadable != undefined) {
    coverLetterMachineReadable = (
      <a className="button" href={'/download/' + props.data.coverLetterMachineReadable} target="_blank">
        <span className="fa fa-file-word"></span>
        <span className="button_label">Cover Letter</span>
        <span className="button_sublabel">Machine Readable</span>
      </a>
    )
  }
  return (
    <section id="experience">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Experience
          </div>
        </div>
        <div className="button_group">
          {resumeHumanReadable}
          {resumeMachineReadable}
        </div>
        <div className="button_group">
          {coverLetterHumanReadable}
          {coverLetterMachineReadable}
        </div>
        <div className={styles.jobs}>
          {props.data.jobs.map(item => (
            <Job data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
