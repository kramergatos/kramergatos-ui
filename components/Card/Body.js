import styles from '../../styles/Card.module.css'
export default function Body(props) {
  return (
    <span>
      <img alt={props.data.title} className={styles.image} src={props.imagePath + props.data.image} />
      <span className={styles.title}>{props.data.title}</span>
      <span className={styles.subtitle}>{props.data.subtitle}</span>
    </span>
  )
}
