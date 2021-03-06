import styles from '../../styles/Values.module.css'
export default function Art(props: {
  data: {
    id: number,
    title: string,
    description: string
  }
}) {
  return (
    <div className={styles.value}>
      <div className={styles.id}>
        {props.data.id}
      </div>
      <div className={styles.title}>
        {props.data.title}
      </div>
      <div className={styles.description}>
        {props.data.description}
      </div>
    </div>
  )
}
