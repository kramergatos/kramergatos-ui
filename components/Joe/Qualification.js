import styles from '../../styles/Joe.module.css'
export default function Qualification(props) {
  return (
    <li className={styles.qualification}>
      <span className="fa fa-star"></span>
      <span className={styles.qualification_title}>{props.title}</span>
    </li>
  )
}