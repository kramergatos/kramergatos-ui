import styles from '../../styles/Interests.module.css'
export default function Interest(props) {
  return (
    <div className={styles.interest}>
      <img alt={props.data.title} className={styles.image} src={'/image/joe/interests/' + props.data.image} />
      <div className={styles.title}>{props.data.title}</div>
    </div>
  )
}
