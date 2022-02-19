import Art from './Art'
import styles from '../../styles/Art.module.css'
export default function Arts(props) {
  return (
    <section id="art">
      <div className="content_wrap">
        <div className="section_title">
          <div className="section_title_text">
            Art Work
          </div>
        </div>
        <div className={styles.photos}>
          {props.data.map(item => (
            <Art key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}