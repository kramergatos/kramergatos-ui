import Interest from './Interest'
import styles from '../../styles/Interests.module.css'
export default function Interests(props) {
  return (
    <section className={styles.section} id="interests">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Interests
          </div>
        </div>
        <div className={styles.interests}>
          {props.data.map(item => (
            <Interest key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
