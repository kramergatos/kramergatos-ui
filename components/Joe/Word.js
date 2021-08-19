import styles from '../../styles/WordCloud.module.css'
export default function Word(props) {
  return (
    <div className={styles.word}>
      <div className={styles.title}>{props.data.title}</div>
    </div>
  )
}
