import styles from '../../styles/Social.module.css'
export default function Social(props) {
  return (
    <nav className={styles.nav_social}>
      <a aria-label="Instagram" className="button_icon_only" href="https://www.instagram.com/kramergatos/" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
      <a aria-label="LinkedIn" className="button_icon_only" href="https://www.linkedin.com/in/kramergatos/" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a aria-label="AngelList" className="button_icon_only" href="https://angel.co/u/kramergatos" target="_blank">
        <i className="fab fa-angellist"></i>
      </a>
      <a aria-label="GitHub" className="button_icon_only" href="https://github.com/kramergatos" target="_blank">
        <i className="fab fa-github"></i>
      </a>
    </nav>
  )
}
