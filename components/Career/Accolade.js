import TagRemote from './TagRemote'
import styles from '../../styles/Accolades.module.css'
export default function Accolade(props) {
  return (
    <div className={styles.accolade}>
      <div className={styles.quote_start}>"</div>
      <div className={styles.description}>
        {props.data.description}
      </div>
      <div className={styles.quote_end}>"</div>
      <div className={styles.title}>
        {props.data.name}
      </div>
      <div className={styles.date}>
        {props.data.date}
      </div>
    </div>
  )
}
