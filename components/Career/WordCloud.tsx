import Word from './Word'
import styles from '../../styles/Skills.module.css'
export default function WordCloud(props) {
  return (
    <div className={styles.word_cloud}>
      {props.data.map(word => (
        <Word key={word.id} data={word} />
      ))}
    </div>
  )
}
