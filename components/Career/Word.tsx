import styles from '../../styles/Skills.module.css'
export default function Word(props: {
  data: {
    id: number,
    type: string,
    title: string,
    years: string
  }
}) {
  return (
    <div className={styles.word}>
      <div className={styles.title}>{props.data.title}</div>
      <div className={styles.years}>{props.data.years} yrs</div>
    </div>
  )
}
