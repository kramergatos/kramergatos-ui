import TagRemote from './TagRemote'
import styles from '../../styles/Accolades.module.css'
export default function Accolade(props: {
  data: {
    id: string,
    name: string,
    date: string,
    image: string,
    description: string
  }
}) {
  return (
    <div className={styles.accolade}>
      <img alt={'person ' + props.data.company} className={styles.image} src={'/image/joe/accolades/' + props.data.image} />
      <div className={styles.description}>
        <div className={styles.quote_start}>
          <i className="fa-solid fa-quote-left"></i>
        </div>
        {props.data.description}
        <div className={styles.quote_end}>
          <i className="fa-solid fa-quote-right"></i>
        </div>
      </div>
      <div className={styles.title}>
        {props.data.name}
      </div>
    </div>
  )
}
