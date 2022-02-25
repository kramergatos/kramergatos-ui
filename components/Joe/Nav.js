import styles from '../../styles/HeaderJoe.module.css'
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/joe/career">
        Career
      </a>
      <a href="/joe/art">
        Art
      </a>
      <a href="/joe/about">
        About Me
      </a>
    </nav>
  )
}
