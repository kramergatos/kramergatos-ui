import styles from '../../styles/Header.module.css'
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#about">
        About Me
      </a>
      <a href="#dreamers">
        Dreamers
      </a>
      <a href="#hire">
        Hire Me
      </a>
      <a href="#qualifications">
        Qualifications
      </a>
      <a href="#skills">
        Skills
      </a>
      <a href="#stickers">
        Stickers
      </a>
      <a href="#experience">
        Experience
      </a>
      <a href="#accolades">
        Accolades
      </a>
    </nav>
  )
}
