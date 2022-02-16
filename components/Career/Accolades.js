import Accolade from './Accolade'
import styles from '../../styles/Accolades.module.css'
export default function Accolades(props) {
  return (
    <section id="accolades">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Accolades
          </div>
        </div>
        <div className={styles.jobs}>
          {props.data.map(item => (
            <Accolade data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
