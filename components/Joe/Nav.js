import styles from '../../styles/HeaderJoe.module.css'
export default function Nav() {
  return (
    <nav aria-label="Navigation" className={styles.nav}>
      <a aria-label="Career" href="/joe/career">
        Career
      </a>
      <a aria-label="Art" href="/joe/art">
        Art
      </a>
      <a aria-label="About Me" href="/joe/about">
        About Me
      </a>
    </nav>
  )
}
