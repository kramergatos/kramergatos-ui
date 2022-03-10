import Value from './Value'
import styles from '../../styles/Values.module.css'
export default function Arts(props: {
  data: [
    {
      id: number,
      title: string,
      description: string
    }
  ]
}) {
  return (
    <section className={styles.section} id="values">
      <div className="content_wrap_slim">
        <div className="section_title">
          <div className="section_title_text">
            Core Values
          </div>
        </div>
        <div className={styles.values}>
          {props.data.map(item => (
            <Value key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
