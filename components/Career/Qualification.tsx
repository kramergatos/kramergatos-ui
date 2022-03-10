import styles from '../../styles/Qualifications.module.css'
export default function Qualification(props: {
  title: string
}) {
  return (
    <li className={styles.qualification}>
      <span className="fa fa-star"></span>
      <span className={styles.qualification_title}>{props.title}</span>
    </li>
  )
}
