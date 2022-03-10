import Qualification from './Qualification'
import styles from '../../styles/Qualifications.module.css'
export default function Qualifications(props: {
  data: {
    id: number,
    title: string
  }[]
}) {
  return (
    <section id="qualifications">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Qualifications
          </div>
        </div>
        <ul className={styles.qualifications}>
          {props.data.map(item => (
            <Qualification key={item.id} title={item.title} />
          ))}
        </ul>
      </div>
    </section>
  )
}
