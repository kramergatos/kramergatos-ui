import Job from './Job'
import styles from '../../styles/Accolades.module.css'
export default function Accolades(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Career</div>
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
