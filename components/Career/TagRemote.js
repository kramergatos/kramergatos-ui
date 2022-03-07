import styles from '../../styles/Jobs.module.css'
export default function TagRemote(props) {
  let icon
  let text
  switch (props.remote) {
    case 0:
      icon = "fas fa-building"
      text = "On Site"
      break
    case 1:
      icon = "fas fa-globe-americas"
      text = "Remote"
      break
    case 2:
      icon = "fas fa-globe-americas"
      text = "Partial Remote"
      break
  }
  return (
    <div aria-label="Remote Status" className={styles.tag}>
      <span className={icon}></span>
      <span className={styles.tag_text}>{text}</span>
    </div>
  )
}
