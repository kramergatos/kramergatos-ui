import Qualification from './Qualification'
import styles from '../../styles/Joe.module.css'
export default function Qualifications(props) {
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Qualifications</div>
        <ul className={styles.qualifications}>
          {props.data.map(item => (
            <Qualification key={item.id} title={item.title} />
          ))}
        </ul>
      </div>
    </section>
  )
}
