import styles from '../../styles/SideNav.module.css'
export default function SideNav() {
  return (
    <div className={styles.side_nav_container}>
      <nav className={styles.side_nav}>
        <a href="#hire">
          <span className={styles.label}>Hire</span>
        </a>
        <a href="#skills">
          <span className={styles.label}>Skills</span>
        </a>
        <a href="#qualifications">
          <span className={styles.label}>Qualifications</span>
        </a>
        <a href="#experience">
          <span className={styles.label}>Experience</span>
        </a>
        <a href="#accolades">
          <span className={styles.label}>Accolades</span>
        </a>
        <a href="#stickers">
          <span className={styles.label}>Stickers</span>
        </a>
      </nav>
    </div>
  )
}
